import Button from "./Button";
import { Link } from "@remix-run/react";
import { LinkItemType } from "~/types";
import MenuIcon from "../assets/icons/menu_hamburger.png";
import { packPaths } from "~/constants/paths";
import { useState } from "react";

type HeaderProps = Pick<MenuProps, "isAuthPage">;

type MenuProps = { isAuthPage: boolean; onClose: () => void };

const common_menus: LinkItemType[] = [
  { label: "생존가방 체크가기", to: "/main" },
  { label: "목록으로 체크하기", to: "/list" },
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
    <header className="absolute top-0 left-0 right-0 h-[60px] flex items-center px-[20px] bg-yellow z-[99999]">
      <div className="m-auto w-full flex items-center justify-between">
        <Link to={packPaths.MAIN}>
          <h1 className="text-4xl font-extrabold">
            PACK<span className="text-white">+</span>MATE
          </h1>
        </Link>
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
            <img src={MenuIcon} alt="메뉴 아이콘" width={50} height={50} />
          </button>
        )}
      </div>
    </header>
  );
}

function Menu({ isAuthPage, onClose }: MenuProps) {
  const menus = isAuthPage ? private_menus : public_menus;

  return (
    <nav className="absolute right-0 top-[60px] w-[200px] p-[20px] bg-gray flex flex-col gap-[10px] z-[99999]">
      {menus.map(({ label, to }) => (
        <Link
          key={to}
          to={to}
          className="px-[10px] hover:bg-darkGray rounded-[8px]"
        >
          {label}
        </Link>
      ))}
      <Button label="닫기" variants="white" onClick={onClose} />
    </nav>
  );
}
