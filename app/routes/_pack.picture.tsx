import React, { useState } from "react";

import BackgroundImage from "~/ui/BackgroundImage";
import Button from "~/ui/Button";
import Container from "~/ui/Container";
import axios from "axios";
import postPredictSupplies from "~/api/supplies/postPredictSupplies";
import { useNavigate } from "@remix-run/react";

const expiration = 300;
const imgbbApiKey = "5fae1c3b610e555df5a08568afde9431";

export default function PackPicture() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      alert("이미지 파일만 선택해주세요.");
      setSelectedFile(null);
    }
  };

  const handleUploadClick = async () => {
    if (!selectedFile) {
      alert("먼저 파일을 선택해주세요.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const imageResponse = await axios.post(
        `https://api.imgbb.com/1/upload?expiration=${expiration}&key=${imgbbApiKey}`,
        formData
      );

      await postPredictSupplies(imageResponse.data.data.url);
      setSelectedFile(null);
      navigate("/main");
    } catch (uploadError) {
      console.error("이미지 업로드 실패:", uploadError);
      alert("이미지 업로드 중 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black flex justify-center items-center">
      <BackgroundImage />
      <Container className="z-[1] flex flex-col gap-[20px] justify-evenly h-[300px]">
        <h3 className="text-xl">사진으로 물품등록하기</h3>
        <div className="flex flex-col gap-[10px]">
          <input type="file" onChange={handleFileChange} />
          <div className="text-right">* 이미지파일만 등록해주세요.</div>
        </div>
        <Button
          label="물품 등록하기"
          onClick={handleUploadClick}
          disabled={loading}
        />
      </Container>
    </div>
  );
}
