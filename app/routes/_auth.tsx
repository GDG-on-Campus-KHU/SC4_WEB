import BackgroundImage from "~/ui/BackgroundImage";
import Header from "~/ui/Header";
import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div className="bg-gray h-screen">
      <div className="max-w-[390px] m-auto relative h-screen">
        <Header isAuthPage />
        <main className="h-full pt-[60px] pb-[100px] flex justify-center items-center relative">
          <div className="z-[1]">
            <Outlet />
          </div>
          <BackgroundImage />
        </main>
      </div>
    </div>
  );
}
