import { useEffect, useRef, useState } from "react";

import CheckSVG from "~/assets/icons/CheckSVG";
import pack from "../assets/background.png";

const item_positions = [
  { name: "id", x: 10, y: 18, width: 120, height: 40, exists: false },
  { name: "rope", x: 140, y: 15, width: 110, height: 65, exists: false },
  { name: "map", x: 5, y: 70, width: 150, height: 40, exists: false },
  { name: "backpack", x: 170, y: 180, width: 200, height: 170, exists: true },
];

export default function Canvas() {
  const [currentPositions, setCurrentPositions] = useState(item_positions);
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
      ctx.drawImage(img, 0, 0, 500, 700);

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
    <div className="relative w-[500px] h-[700px]">
      <canvas ref={canvasRef} width={500} height={700} />
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
