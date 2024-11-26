export default function CheckSVG({
  width = "30px",
  height = "30px",
  className = "",
}: {
  width?: string | number;
  height?: string | number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 215.434 215.434"
      className={className}
    >
      <g>
        <circle
          className="fill-current"
          cx="107.717"
          cy="107.717"
          r="106.299"
        />
        <polygon
          className="#ffffff"
          points="96.977,121.718 145.084,50.79 168.752,69.02 103.583,164.647 46.678,120.299 63.562,96.402"
        />
      </g>
    </svg>
  );
}
