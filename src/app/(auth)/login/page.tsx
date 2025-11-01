"use client";
import { FaLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
const LoginPage = () => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: "/dashboard",
      });
      if (!res?.error) {
        e.target.reset();
        push("/dashboard");
        setIsLoading(false);
      } else {
        if (res.status == 401) {
          setError("Email or password is incorrect");
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log("Login failed:", error);
    }

    // fetch("/api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: e.currentTarget.email.value,
    //     password: e.currentTarget.password.value,
    //   }),
    // });
  };
  return (
    <div className="flex min-h-full items-center flex-col justify-center px-6 py-12 lg:px-8 ">
      {error !== "" && (
        <>
          <div className="text-red-300 font-bold">{error}</div>
        </>
      )}
      <div className="border-white relative">
        <Link href={"/"}>
          <button className="size-8  absolute right-126 bottom-8 cursor-pointer">
            <FaLeftLong size={28} className="text-white" />
          </button>
        </Link>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl leading-9 font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          method="POST"
          className="space-y-6"
          onSubmit={(e) => handleLogin(e)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm leading-6 font-medium text-gray-100"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm leading-6 font-medium text-gray-100"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-500 focus:outline-none"
            >
              {isLoading ? "Loading" : "Sign In"}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-transparent px-2 text-gray-300">or</span>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-300">
            Don{"'"}t have an account yet?{" "}
            <Link
              href="/register"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
