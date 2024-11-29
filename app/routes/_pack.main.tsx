import Canvas, { item_positions } from "~/ui/Canvas";
import { useEffect, useState } from "react";

import getUserSupplies from "~/api/supplies/getUserSupplies";

export default function PackMain() {
  const [currentSuppliesList, setCurrentSuppliesList] =
    useState(item_positions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserSupplies();
        const updatedList = item_positions.map((item) => ({
          ...item,
          exists:
            response.supplies[item.name as keyof typeof response.supplies] ===
            true,
        }));

        setCurrentSuppliesList(updatedList);
      } catch (error) {
        console.error("Failed to fetch user supplies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-hidden">
      <Canvas
        currentPositions={currentSuppliesList}
        setCurrentPositions={setCurrentSuppliesList}
      />
    </div>
  );
}
