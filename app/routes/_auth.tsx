import Header from "~/ui/Header";
import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div>
      <Header isAuthPage />
      <main className="h-screen pt-[50px] pb-[100px] flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
}
