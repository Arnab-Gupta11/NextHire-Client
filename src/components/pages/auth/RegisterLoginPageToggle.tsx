"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const RegisterLoginPageToggle = () => {
  const pathname = usePathname();
  return (
    <div className="grid w-full grid-cols-2 bg-secondary-bg-light py-1 rounded-md dark:bg-secondary-bg-dark">
      <Link href={"/account/login"}>
        <div
          className={`mx-1 rounded-md pl-2 py-0.5 ${
            pathname === "/account/login" ? "bg-primary-bg-light transition-colors duration-700 dark:bg-primary-bg-dark" : ""
          }`}
        >
          Sign In
        </div>
      </Link>
      <Link href={"/account/register"}>
        <div
          className={`mx-1 rounded-md pl-2 py-0.5 ${
            pathname === "/account/register" ? "bg-white transition-colors duration-700 dark:bg-[#030817]" : ""
          }`}
        >
          Sign Up
        </div>
      </Link>
    </div>
  );
};

export default RegisterLoginPageToggle;
