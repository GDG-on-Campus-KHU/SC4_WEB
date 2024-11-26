import { Link } from "@remix-run/react";
import { LinkItemType } from "~/types";
import { useState } from "react";

type HeaderProps = Pick<MenuProps, "isAuthPage">;

type MenuProps = { isAuthPage: boolean; onClose: () => void };

const common_menus: LinkItemType[] = [
  { label: "생존가방 바로가기", to: "/main" },
  { label: "만든이들", to: "/about" },
];

const private_menus: LinkItemType[] = [
  ...common_menus,
  { label: "로그인하러가기", to: "/login" },
];

const public_menus: LinkItemType[] = [
  ...common_menus,
  { label: "로그인 하러가기", to: "/login" },
  { label: "회원가입 하러가기", to: "/register" },
];

export default function Header({ isAuthPage }: HeaderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-[50px] flex justify-between bg-yellow">
      <h1>
        PACK<span>+</span>MATE
      </h1>
      {isOpenMenu ? (
        <Menu
          isAuthPage={isAuthPage}
          onClose={() => {
            setIsOpenMenu(false);
          }}
        />
      ) : (
        <button
          onClick={() => {
            setIsOpenMenu(true);
          }}
        >
          MENU
        </button>
      )}
    </header>
  );
}

function Menu({ isAuthPage, onClose }: MenuProps) {
  const menus = isAuthPage ? private_menus : public_menus;

  return (
    <nav className="flex flex-col">
      {menus.map(({ label, to }) => (
        <Link key={to} to={to}>
          {label}
        </Link>
      ))}
      <button onClick={onClose}>닫기</button>
    </nav>
  );
}
