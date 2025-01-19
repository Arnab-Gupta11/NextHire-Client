import Link from "next/link";
import Logo from "../Logo";
import { ThemeToggler } from "@/components/theme/ThemeToggler";
import { NavMenuOption } from "@/constants/navbar.constant";
import NavSidebar from "./NavSidebar";
import ProfileAvatar from "./ProfileAvatar";
import NavItem from "./NavItem";

const Navbar = () => {
  const menuItems = NavMenuOption();
  return (
    <div className="w-full fixed top-0  bg-transparent border backdrop-blur-3xl">
      <div className="max-w-screen-xl px-3 xsm:px-5 py-3.5 mx-auto flex justify-between items-center border">
        <div>
          <div className="hidden xs:flex">
            <Logo width={200} />
          </div>
          <div className="xs:hidden flex">
            <Logo width={120} />
          </div>
        </div>
        <div className="flex gap-7 items-center">
          <div className="hidden lg:flex gap-8 items-center font-medium ">
            {menuItems.map((menuItem) =>
              menuItem.show ? (
                <Link key={menuItem.label} href={menuItem.path} className=" py-2 text-base font-medium">
                  <NavItem label={menuItem.label} active={true} />
                </Link>
              ) : null
            )}
          </div>
          <div className="flex gap-3 sm:gap-6 items-center">
            <ProfileAvatar />
            <ThemeToggler />
            <NavSidebar menuItems={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
