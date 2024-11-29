import { useEffect, useRef, useState } from "react";

import CheckSVG from "~/assets/icons/CheckSVG";
import pack from "../assets/background.png";

type ItemPositionType = {
  name: keyof SuppliesType;
  x: number;
  y: number;
  width: number;
  height: number;
  exists: boolean;
};

export const item_positions: ItemPositionType[] = [
  { name: "ID_card", x: 0, y: 14, width: 100, height: 46, exists: false },
  { name: "candle", x: 0, y: 135, width: 50, height: 100, exists: false },
  { name: "lighter", x: 40, y: 160, width: 50, height: 80, exists: false },
  { name: "candy", x: 0, y: 240, width: 95, height: 50, exists: false },
  { name: "canned_tuna", x: 45, y: 280, width: 70, height: 70, exists: false },
  { name: "tissue", x: 5, y: 370, width: 70, height: 50, exists: false },
  { name: "compass", x: 100, y: 110, width: 50, height: 70, exists: false },
  {
    name: "chocolate_bar",
    x: 180,
    y: 15,
    width: 60,
    height: 40,
    exists: false,
  },
  { name: "solid_fuel", x: 255, y: 25, width: 90, height: 45, exists: false },
  { name: "radio", x: 170, y: 65, width: 100, height: 65, exists: false },
  { name: "mask", x: 170, y: 135, width: 50, height: 50, exists: false },
  { name: "whistle", x: 230, y: 120, width: 70, height: 50, exists: false },
  { name: "rope", x: 100, y: 15, width: 70, height: 65, exists: false },
  {
    name: "thermal_blanket",
    x: 250,
    y: 490,
    width: 100,
    height: 80,
    exists: false,
  },
  {
    name: "instant_noodles",
    x: 260,
    y: 160,
    width: 80,
    height: 95,
    exists: false,
  },
  { name: "water", x: 270, y: 280, width: 60, height: 160, exists: false },
  { name: "map", x: 5, y: 70, width: 95, height: 40, exists: false },
  { name: "backpack", x: 120, y: 180, width: 140, height: 170, exists: false },
  { name: "knife", x: 290, y: 80, width: 50, height: 60, exists: false },
  { name: "heat_pack", x: 190, y: 350, width: 65, height: 65, exists: false },
  { name: "flashlight", x: 105, y: 425, width: 65, height: 65, exists: false },
  { name: "blanket", x: 185, y: 425, width: 65, height: 65, exists: false },
  { name: "umbrella", x: 0, y: 420, width: 100, height: 150, exists: false },
  { name: "towel", x: 0, y: 580, width: 100, height: 90, exists: false },
  {
    name: "ziplock_bag",
    x: 110,
    y: 535,
    width: 40,
    height: 40,
    exists: false,
  },
  {
    name: "sleeping_bag",
    x: 100,
    y: 570,
    width: 120,
    height: 100,
    exists: false,
  },
  {
    name: "first_aid_kit",
    x: 230,
    y: 560,
    width: 130,
    height: 110,
    exists: false,
  },
  {
    name: "water_purification_tablets",
    x: 170,
    y: 650,
    width: 50,
    height: 50,
    exists: false,
  },
  {
    name: "toiletries",
    x: 150,
    y: 480,
    width: 80,
    height: 70,
    exists: false,
  },
  {
    name: "matches",
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
  const [reload, setReload] = useState(0);

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
        if (exists) return;
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
  }, [currentPositions, reload]);

  const resetCanvas = (index: number) => {
    setCurrentPositions((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, exists: !item.exists } : item
      )
    );
    setReload((prev) => prev + 1);
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
