import CommonLayout from "./CommonLayout";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return <CommonLayout>{children}</CommonLayout>;
}
