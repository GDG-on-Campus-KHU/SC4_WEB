import { authPaths, packPaths } from "~/constants/paths";

import BackgroundImage from "~/ui/BackgroundImage";
import Button from "~/ui/Button";
import Container from "~/ui/Container";
import Layout from "~/layouts/CommonLayout";
import { Link } from "@remix-run/react";
import { LinkItemType } from "~/types";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "PACK+MATE" },
    {
      property: "og:title",
      content: "PACK+MATE",
    },
    {
      name: "description",
      content: "생존가방 체크리스트 서비스",
    },
    {
      rel: "icon",
      href: "/path/to/your/favicon.ico",
      type: "image/x-icon",
    },
  ];
};

const links: LinkItemType[] = [
  { label: "내 생존배낭 등록하기", to: packPaths.MAIN },
  { label: "로그인 하러하기", to: authPaths.LOGIN },
  { label: "만든이들", to: packPaths.ABOUT },
];

export default function Index() {
  return (
    <Layout>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black flex justify-center items-center">
        <BackgroundImage />
        <Container className="w-[320px] z-[1]">
          <div className="w-full flex flex-col gap-[20px]">
            {links.map(({ label, to }) => (
              <Link key={to} to={to}>
                <Button label={label} />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
