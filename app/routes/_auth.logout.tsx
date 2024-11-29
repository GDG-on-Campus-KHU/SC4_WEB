import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";

export default function AuthLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("token");
    navigate("/");
  }, [navigate]);

  return <div></div>;
}
