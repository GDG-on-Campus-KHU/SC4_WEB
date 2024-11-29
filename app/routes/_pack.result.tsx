import BackgroundImage from "~/ui/BackgroundImage";
import Button from "~/ui/Button";
import Container from "~/ui/Container";
import { Link } from "@remix-run/react";

export default function PackResult() {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black flex justify-center items-center">
      <BackgroundImage />
      <Container className="z-[9990] flex flex-col">
        <div>결과</div>
        <Link to="/main" className="w-full">
          <Button label="다시하기" />
        </Link>
        <Link to="/login">로그인하고 저장하기</Link>
      </Container>
    </div>
  );
}
