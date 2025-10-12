const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="fixed right-0 top-12 z-10 h-screen w-52 bg-gray-400 p-5 rounded-l-2xl">
        <ul className="text-white">
          <li className="mb-3 font-semibold cursor-pointer">Home</li>
          <li className="mb-3 font-semibold cursor-pointer">About</li>
          <li className="mb-3 font-semibold cursor-pointer">Profile</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
