import BackgroundImage from "~/ui/BackgroundImage";
import Header from "~/ui/Header";
import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div>
      <Header isAuthPage />
      <main className="h-screen overflow-hidden pt-[60px] pb-[100px] flex justify-center items-center relative">
        <BackgroundImage />
        <Outlet />
      </main>
    </div>
  );
}
