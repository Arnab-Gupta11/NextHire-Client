import RegisterLoginPageToggle from "@/components/pages/auth/RegisterLoginPageToggle";
import { ThemeToggler } from "@/components/theme/ThemeToggler";

import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>
        <ThemeToggler />
      </div>
      <div className="grid place-items-center my-10 lg:my-20 mx-5 md:mx-0">
        <div className="max-w-[400px]">
          <RegisterLoginPageToggle />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
