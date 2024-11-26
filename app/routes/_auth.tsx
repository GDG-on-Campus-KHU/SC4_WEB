import Header from "~/ui/Header";
import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div>
      <Header isAuthPage />
      <Outlet />
    </div>
  );
}
