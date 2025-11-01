"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <nav className="flex justify-between bg-gray-500 py-2 px-5">
      <h1 className="text-white text-2xl font-semibold">Navbar</h1>
      <div className="flex justify-center items-center gap-7">
        <div>
          <ul className="flex pt-1">
            <Link href={"/"}>
              <li
                className={`mr-3 ${
                  pathname === "/" ? "text-gray-950" : "text-white"
                } font-semibold cursor-pointer`}
              >
                Home
              </li>
            </Link>
            <Link href={"/about"}>
              <li
                className={`mr-3 ${
                  pathname === "/about" ? "text-gray-950" : "text-white"
                } font-semibold cursor-pointer`}
              >
                About
              </li>
            </Link>
            <Link href={"/about/profile"}>
              <li
                className={`mr-3 ${
                  pathname === "/about/profile" ? "text-gray-950" : "text-white"
                } font-semibold cursor-pointer`}
              >
                Profile
              </li>
            </Link>
            <Link href={"/product"}>
              <li
                className={`mr-3 ${
                  pathname === "/product" ? "text-gray-950" : "text-white"
                } font-semibold cursor-pointer`}
              >
                Product
              </li>
            </Link>
          </ul>
        </div>
        <div>
          {status === "authenticated" ? (
            <>
              <div className="flex items-center justify-center gap-5">
                <h1 className="font-extrabold text-zinc-300">Hi</h1>
                <h4 className="font-bold text-zinc-300">
                  {session?.user?.fullname}
                </h4>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="bg-white px-4 py-1 rounded-2xl cursor-pointer"
                >
                  <span className="font-semibold">Logout</span>
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => {
                signIn();
              }}
              className="bg-white px-4 py-1 rounded-2xl cursor-pointer"
            >
              <span className="font-semibold">Login</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
