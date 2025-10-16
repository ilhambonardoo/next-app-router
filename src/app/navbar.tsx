"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
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
          </ul>
        </div>
        <div>
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="bg-white px-4 py-1 rounded-2xl cursor-pointer"
          >
            <span className="font-semibold">Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
