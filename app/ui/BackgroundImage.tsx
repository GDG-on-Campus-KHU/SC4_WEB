import Overlay from "./Overlay";
import background from "../assets/background.png";

export default function BackgroundImage() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-cover bg-white bg-center z-[0]"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Overlay />
    </div>
  );
}
