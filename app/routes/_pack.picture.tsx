import BackgroundImage from "~/ui/BackgroundImage";
import Container from "~/ui/Container";

export default function PackPicture() {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black flex justify-center items-center">
      <BackgroundImage />
      <Container className="z-[1] flex flex-col gap-[20px] justify-evenly h-[200px]">
        <h3 className="text-xl">사진으로 물품등록하기</h3>
        <div className="flex flex-col gap-[10px]">
          <input type="file" />
          <div className="text-right">* 이미지파일만 등록해주세요.</div>
        </div>
      </Container>
    </div>
  );
}
