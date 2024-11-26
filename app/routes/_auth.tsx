import BackgroundImage from "~/ui/BackgroundImage";
import Header from "~/ui/Header";
import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div>
      <Header isAuthPage />
      <main className="h-screen pt-[60px] pb-[100px] flex justify-center items-center relative">
        <Outlet />
        <BackgroundImage />
      </main>
    </div>
  );
}
