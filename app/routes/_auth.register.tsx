import { Link, useNavigate } from "@remix-run/react";
import postRegister, { RegisterBodyType } from "~/api/auth/postRegister";

import { AxiosError } from "axios";
import Button from "~/ui/Button";
import Container from "~/ui/Container";
import LabelInput from "~/ui/LabelInput";
import { authPaths } from "~/constants/paths";
import { useInputChange } from "~/hooks/useInputChange";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [registerBody, setRegisterBody] = useState<RegisterBodyType>({
    name: "",
    password: "",
  });

  const handleInputChange = useInputChange(registerBody, setRegisterBody);

  const onSubmitRegisterForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await postRegister(registerBody);
      navigate("/login");
    } catch (e) {
      const error = e as AxiosError;
      if (error.response) {
        alert(error.response.data);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <form onSubmit={onSubmitRegisterForm}>
      <Container>
        <div className="text-2xl text-extrabold">회원가입</div>
        <LabelInput
          label="이름"
          name="name"
          value={registerBody.name}
          onChange={handleInputChange}
        />
        <LabelInput
          label="비밀번호"
          type="password"
          name="password"
          value={registerBody.password}
          onChange={handleInputChange}
        />
        <Button label="입력 완료" />
        <Link className="text-center underline" to={authPaths.LOGIN}>
          로그인 하러가기
        </Link>
      </Container>
    </form>
  );
}
