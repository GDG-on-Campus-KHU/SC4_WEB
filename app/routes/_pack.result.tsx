import { useEffect, useState } from "react";

import BackgroundImage from "~/ui/BackgroundImage";
import Button from "~/ui/Button";
import Container from "~/ui/Container";
import { ItemPositionType } from "~/ui/Canvas";
import { Link } from "@remix-run/react";
import { suppliesList } from "./_pack.list";

export default function PackResult() {
  const [isClient, setIsClient] = useState(false);
  const [supplies, setSupplies] = useState<ItemPositionType[]>([]);
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    setIsClient(true);

    const token = localStorage?.getItem("token");
    setIsLogin(!!token);

    const suppliesString = localStorage?.getItem("supplies");
    if (suppliesString) {
      setSupplies(JSON.parse(suppliesString));
    }
  }, []);

  if (!isClient) return null;
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black flex justify-center items-center">
      <BackgroundImage />
      <Container className="z-[9990] flex flex-col w-[330px]">
        <h3 className="text-xl">필요한 생존 물품 목록</h3>
        {supplies.length === 0 ? (
          <div>생존 배낭을 전부 챙기셨네요!</div>
        ) : (
          <div className="grid grid-cols-2">
            {supplies.map((supply) => {
              if (!supply.exists) {
                const supplyLabel = suppliesList.find(
                  ({ value }) => value === supply.name
                );

                return (
                  <div key={supply.name}>
                    {supplyLabel ? supplyLabel.label : "알 수 없음"}
                  </div>
                );
              }
            })}
          </div>
        )}
        <Link to="/main" className="w-full">
          <Button label="다시하기" />
        </Link>
        {!isLogin && <Link to="/login">로그인하고 저장하기</Link>}
      </Container>
    </div>
  );
}
