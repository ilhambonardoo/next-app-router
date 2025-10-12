import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-500 py-2 px-5">
      <h1 className="text-white text-2xl font-semibold">Navbar</h1>
      <ul className="flex pt-1">
        <Link href={"/"}>
          <li className="mr-3 text-white font-semibold cursor-pointer">Home</li>
        </Link>
        <Link href={"/about"}>
          <li className="mr-3 text-white font-semibold cursor-pointer">
            About
          </li>
        </Link>
        <Link href={"/about/profile"}>
          <li className="mr-3 text-white font-semibold cursor-pointer">
            Profile
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
