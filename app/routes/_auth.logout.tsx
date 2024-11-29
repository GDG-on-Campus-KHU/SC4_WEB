import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";

export default function AuthLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/");
  }, [navigate]);

  return <div></div>;
}
