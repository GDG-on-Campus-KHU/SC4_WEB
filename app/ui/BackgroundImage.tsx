import Overlay from "./Overlay";
import background from "../assets/background.png";

export default function BackgroundImage() {
  return (
    <div className="absolute top-[60px] left-0 right-0 bottom-0 z-[-15] flex justify-center items-center">
      <img
        className="absolute top-0 left-0 right-0 bottom-0 object-contain z-[-10]"
        src={background}
        alt="재난 아이템 컬러 이미지"
      />
      <Overlay />
    </div>
  );
}
