import Canvas, { ItemPositionType, item_positions } from "~/ui/Canvas";
import { Link, useNavigate } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

import Button from "~/ui/Button";
import getUserSupplies from "~/api/supplies/getUserSupplies";

export default function PackMain() {
  const navigate = useNavigate();
  const [currentSuppliesList, setCurrentSuppliesList] =
    useState(item_positions);
  const [showResultButton, setShowResultButton] = useState(false);
  const [userActivityTimer, setUserActivityTimer] =
    useState<NodeJS.Timeout | null>(null);
  const resultButtonRef = useRef<HTMLAnchorElement | null>(null);

  const onClickSubmit = () => {
    localStorage.setItem("supplies", JSON.stringify(currentSuppliesList));
    navigate("/result");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const suppliesString = localStorage.getItem("supplies");
        const localSupplies = suppliesString ? JSON.parse(suppliesString) : [];

        const response = await getUserSupplies();
        const updatedList = item_positions.map((item) => {
          const localSupply = localSupplies.find(
            (supply: ItemPositionType) => supply.name === item.name
          );

          const existsFromLocal = localSupply ? localSupply.exists : false;
          const existsFromServer =
            response.supplies[item.name as keyof typeof response.supplies] ===
            true;

          return {
            ...item,
            exists: existsFromLocal || existsFromServer,
          };
        });

        setCurrentSuppliesList(updatedList);
      } catch (error) {
        console.error("Failed to fetch user supplies:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const resetTimer = (event: MouseEvent | KeyboardEvent) => {
      if (
        resultButtonRef.current &&
        resultButtonRef.current.contains(event.target as Node)
      ) {
        return;
      }

      if (userActivityTimer) {
        clearTimeout(userActivityTimer);
      }

      const timer = setTimeout(() => {
        setShowResultButton(true);
      }, 500);

      setUserActivityTimer(timer);
      setShowResultButton(false);
    };

    const events: ("mousemove" | "keydown" | "click")[] = [
      "mousemove",
      "keydown",
      "click",
    ];

    events.forEach((event) => {
      window.addEventListener(event, resetTimer as EventListener);
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer as EventListener);
      });
      if (userActivityTimer) {
        clearTimeout(userActivityTimer);
      }
    };
  }, [userActivityTimer]);

  return (
    <div className="overflow-hidden">
      <Canvas
        currentPositions={currentSuppliesList}
        setCurrentPositions={setCurrentSuppliesList}
      />
      {showResultButton && (
        <Link
          to="/result"
          ref={resultButtonRef}
          onClick={onClickSubmit}
          className="absolute left-[20px] right-[20px] bottom-[20px]"
        >
          <Button label="저장하고 결과보기" />
        </Link>
      )}
    </div>
  );
}
