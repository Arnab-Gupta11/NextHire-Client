"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import darkLogo from "../../../../public/darkLogo.png";
import lightLogo from "../../../../public/lightLogo.png";
import React, { useEffect, useState } from "react";

const Logo = ({ width }: { width: number }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  console.log(theme);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      {mounted && theme === "dark" ? (
        <Image src={darkLogo} alt={"Logo"} width={width} className="h-auto" priority />
      ) : (
        <Image src={lightLogo} alt={"Logo"} width={width} className="h-auto" priority />
      )}
    </div>
  );
};

export default Logo;
