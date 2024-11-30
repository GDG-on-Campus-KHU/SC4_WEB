import { useEffect, useRef } from "react";

import CheckSVG from "~/assets/icons/CheckSVG";
import pack from "../assets/background.png";

export type ItemPositionType = {
  name: keyof SuppliesType;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  exists: boolean;
};
export const item_positions: ItemPositionType[] = [
  {
    name: "ID_card",
    label: "신분증",
    x: 0,
    y: 14,
    width: 100,
    height: 46,
    exists: false,
  },
  {
    name: "candle",
    label: "촛불",
    x: 0,
    y: 135,
    width: 50,
    height: 100,
    exists: false,
  },
  {
    name: "lighter",
    label: "라이터",
    x: 40,
    y: 160,
    width: 50,
    height: 80,
    exists: false,
  },
  {
    name: "candy",
    label: "사탕",
    x: 0,
    y: 240,
    width: 95,
    height: 50,
    exists: false,
  },
  {
    name: "canned_tuna",
    label: "참치캔",
    x: 45,
    y: 280,
    width: 70,
    height: 70,
    exists: false,
  },
  {
    name: "tissue",
    label: "티슈",
    x: 5,
    y: 370,
    width: 70,
    height: 50,
    exists: false,
  },
  {
    name: "compass",
    label: "나침반",
    x: 100,
    y: 110,
    width: 50,
    height: 70,
    exists: false,
  },
  {
    name: "chocolate_bar",
    label: "초콜릿 바",
    x: 180,
    y: 15,
    width: 60,
    height: 40,
    exists: false,
  },
  {
    name: "solid_fuel",
    label: "고체 연료",
    x: 255,
    y: 25,
    width: 90,
    height: 45,
    exists: false,
  },
  {
    name: "radio",
    label: "라디오",
    x: 170,
    y: 65,
    width: 100,
    height: 65,
    exists: false,
  },
  {
    name: "mask",
    label: "마스크",
    x: 170,
    y: 135,
    width: 50,
    height: 50,
    exists: false,
  },
  {
    name: "whistle",
    label: "호루라기",
    x: 230,
    y: 120,
    width: 70,
    height: 50,
    exists: false,
  },
  {
    name: "rope",
    label: "로프",
    x: 100,
    y: 15,
    width: 70,
    height: 65,
    exists: false,
  },
  {
    name: "thermal_blanket",
    label: "보온 담요",
    x: 250,
    y: 490,
    width: 100,
    height: 80,
    exists: false,
  },
  {
    name: "instant_noodles",
    label: "즉석 라면",
    x: 260,
    y: 160,
    width: 80,
    height: 95,
    exists: false,
  },
  {
    name: "water",
    label: "물",
    x: 270,
    y: 280,
    width: 60,
    height: 160,
    exists: false,
  },
  {
    name: "map",
    label: "지도",
    x: 5,
    y: 70,
    width: 95,
    height: 40,
    exists: false,
  },
  {
    name: "backpack",
    label: "백팩",
    x: 120,
    y: 180,
    width: 140,
    height: 170,
    exists: false,
  },
  {
    name: "knife",
    label: "칼",
    x: 290,
    y: 80,
    width: 50,
    height: 60,
    exists: false,
  },
  {
    name: "heat_pack",
    label: "핫팩",
    x: 190,
    y: 350,
    width: 65,
    height: 65,
    exists: false,
  },
  {
    name: "flashlight",
    label: "손전등",
    x: 105,
    y: 425,
    width: 65,
    height: 65,
    exists: false,
  },
  {
    name: "blanket",
    label: "담요",
    x: 185,
    y: 425,
    width: 65,
    height: 65,
    exists: false,
  },
  {
    name: "umbrella",
    label: "우산",
    x: 0,
    y: 420,
    width: 100,
    height: 150,
    exists: false,
  },
  {
    name: "towel",
    label: "수건",
    x: 0,
    y: 580,
    width: 100,
    height: 90,
    exists: false,
  },
  {
    name: "ziplock_bag",
    label: "지퍼백",
    x: 110,
    y: 535,
    width: 40,
    height: 40,
    exists: false,
  },
  {
    name: "sleeping_bag",
    label: "침낭",
    x: 100,
    y: 570,
    width: 120,
    height: 100,
    exists: false,
  },
  {
    name: "first_aid_kit",
    label: "구급상자",
    x: 230,
    y: 560,
    width: 130,
    height: 110,
    exists: false,
  },
  {
    name: "water_purification_tablets",
    label: "정수 알약",
    x: 170,
    y: 650,
    width: 50,
    height: 50,
    exists: false,
  },
  {
    name: "toiletries",
    label: "세면도구",
    x: 150,
    y: 480,
    width: 80,
    height: 70,
    exists: false,
  },
  {
    name: "matches",
    label: "성냥",
    x: 100,
    y: 370,
    width: 70,
    height: 40,
    exists: false,
  },
];

type CanvasProps = {
  currentPositions: ItemPositionType[];
  setCurrentPositions: React.Dispatch<React.SetStateAction<ItemPositionType[]>>;
};
export default function Canvas({
  currentPositions,
  setCurrentPositions,
}: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = pack;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, 350, 700);

      currentPositions.forEach(({ x, y, width, height, exists }) => {
        if (exists) {
          return;
        }
        const imageData = ctx.getImageData(x, y, width, height);

        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const avg = (r + g + b) / 3;

          data[i] = avg;
          data[i + 1] = avg;
          data[i + 2] = avg;
        }
        ctx.putImageData(imageData, x, y);
      });
    };
  }, [currentPositions]);

  const resetCanvas = (index: number) => {
    setCurrentPositions((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, exists: !item.exists } : item
      )
    );
  };

  return (
    <div className="relative w-[350px]">
      <canvas ref={canvasRef} width={350} height={700} />
      {currentPositions.map(({ x, y, width, height, exists }, index) => (
        <button
          key={index}
          onClick={() => {
            resetCanvas(index);
          }}
          className={
            "absolute bg-transparent border-none cursor-pointer flex justify-center items-center group"
          }
          style={{
            left: x,
            top: y,
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          <CheckSVG
            className={
              exists ? "text-yellow" : "text-white group-hover:text-yellow"
            }
          />
        </button>
      ))}
    </div>
  );
}
