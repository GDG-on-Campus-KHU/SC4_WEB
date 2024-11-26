import Container from "~/ui/Container";
import LabelInput from "~/ui/LabelInput";
import { Link } from "@remix-run/react";
import { LoginBodyType } from "~/api/auth/postLogin";
import { authPaths } from "~/constants/paths";
import { useInputChange } from "~/hooks/useInputChange";
import { useState } from "react";

export default function Login() {
  const [loginBody, setLoginBody] = useState<LoginBodyType>({
    id: "",
    pw: "",
  });

  const handleInputChange = useInputChange(loginBody, setLoginBody);

  return (
    <form>
      <Container>
        <LabelInput label="아이디" name="id" value={loginBody.id} />
        <LabelInput
          label="비밀번호"
          type="password"
          name="pw"
          value={loginBody.pw}
          onChange={handleInputChange}
        />
      </Container>
      <Link to={authPaths.REGISTER}>회원가입 하러가기</Link>
    </form>
  );
}
