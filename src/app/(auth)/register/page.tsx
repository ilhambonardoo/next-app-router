"use client";

import Link from "next/link";
import { FaLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    const password = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;

    if (confirmPassword !== password) {
      setError("Passwords do not match!");
      setIsLoading(true);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: e.target.name.value,
          email: e.target.email.value,
          password,
          confirmPassword,
        }),
      });

      if (res.status === 200) {
        e.target.reset();
        push("/login");
      } else {
        const data = await res.json().catch(() => null);
        setError((data && data.message) || "Email already exists!");
        console.log(res, data);
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(true);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div>
        {error ? (
          <p className="text-center text-red-500 font-semibold text-2xl">
            {error}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="border-white relative">
          <Link href={"/login"}>
            <button className="size-8  absolute right-126 bottom-8 cursor-pointer">
              <FaLeftLong size={28} className="text-white" />
            </button>
          </Link>
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Create a new account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={(e) => {
            handleOnSubmit(e);
          }}
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-100"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-100"
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
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-100"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium leading-6 text-gray-100"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                autoComplete="new-password"
                className="block w-full rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-500 focus:outline-none"
            >
              Sign up
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
            Do you already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
