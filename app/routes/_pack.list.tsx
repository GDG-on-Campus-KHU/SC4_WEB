import { ItemPositionType, item_positions } from "~/ui/Canvas";
import { Link, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";

import Button from "~/ui/Button";
import getUserSupplies from "~/api/supplies/getUserSupplies";

export default function PackList() {
  const navigate = useNavigate();
  const [currentSuppliesList, setCurrentSuppliesList] =
    useState(item_positions);

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

  const handleCheckboxChange = (value: string) => {
    setCurrentSuppliesList((prev) =>
      prev.map((item) =>
        item.name === value ? { ...item, exists: !item.exists } : item
      )
    );
  };

  return (
    <div className="grid grid-cols-2 gap-y-[10px]">
      {currentSuppliesList.map((item) => (
        <ListItem
          key={item.name}
          label={item.label}
          value={item.name}
          isChecked={item.exists}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}
      <Link
        to="/result"
        className="absolute left-[20px] right-[20px] bottom-[20px]"
        onClick={onClickSubmit}
      >
        <Button label="저장하고 결과보기" />
      </Link>
    </div>
  );
}

type ListItemProps = {
  label: string;
  value: string;
  isChecked: boolean;
  onCheckboxChange: (value: string) => void;
};

function ListItem({
  label,
  value,
  isChecked,
  onCheckboxChange,
}: ListItemProps) {
  return (
    <div className="flex gap-[10px]">
      <label className="flex gap-[10px] text-xl cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheckboxChange(value)}
        />
        {label}
      </label>
    </div>
  );
}

export type ListItemType = { label: string; value: string; exists: boolean };

export const suppliesList: ListItemType[] = [
  { label: "신분증", value: "ID_card", exists: false },
  { label: "백팩", value: "backpack", exists: false },
  { label: "담요", value: "blanket", exists: false },
  { label: "촛불", value: "candle", exists: false },
  { label: "사탕", value: "candy", exists: false },
  { label: "참치캔", value: "canned_tuna", exists: false },
  { label: "초콜릿 바", value: "chocolate_bar", exists: false },
  { label: "나침반", value: "compass", exists: false },
  { label: "구급상자", value: "first_aid_kit", exists: false },
  { label: "손전등", value: "flashlight", exists: false },
  { label: "핫팩", value: "heat_pack", exists: false },
  { label: "즉석 라면", value: "instant_noodles", exists: false },
  { label: "칼", value: "knife", exists: false },
  { label: "라이터", value: "lighter", exists: false },
  { label: "지도", value: "map", exists: false },
  { label: "마스크", value: "mask", exists: false },
  { label: "성냥", value: "matches", exists: false },
  { label: "라디오", value: "radio", exists: false },
  { label: "로프", value: "rope", exists: false },
  { label: "침낭", value: "sleeping_bag", exists: false },
  { label: "고체 연료", value: "solid_fuel", exists: false },
  { label: "보온 담요", value: "thermal_blanket", exists: false },
  { label: "티슈", value: "tissue", exists: false },
  { label: "세면도구", value: "toiletries", exists: false },
  { label: "수건", value: "towel", exists: false },
  { label: "우산", value: "umbrella", exists: false },
  { label: "물", value: "water", exists: false },
  { label: "정수 알약", value: "water_purification_tablets", exists: false },
  { label: "호루라기", value: "whistle", exists: false },
  { label: "지퍼백", value: "ziplock_bag", exists: false },
];
