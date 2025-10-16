"use client";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const disableNavigation = ["/login", "/register"];

const ClientLayout = () => {
  const pathname = usePathname();
  return <>{!disableNavigation.includes(pathname) && <Navbar />}</>;
};

export default ClientLayout;
