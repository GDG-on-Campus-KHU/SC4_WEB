import CommonLayout from "~/layouts/CommonLayout";
import { Outlet } from "@remix-run/react";

export default function PackLayout() {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}
