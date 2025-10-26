"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { signIn } from "next-auth/react";

const DashboardPage = () => {
  const { data: sesion, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  console.log(sesion, status);
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    } else {
      if (sesion !== undefined && sesion?.user.role !== "admin") {
        router.push("/");
      }
    }
  }, [status, router, sesion?.user.role, sesion]);
  return (
    <>
      <div>Dashboard</div>
    </>
  );
};

export default DashboardPage;
