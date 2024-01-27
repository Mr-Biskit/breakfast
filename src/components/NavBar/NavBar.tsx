import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu, ShoppingCart } from "lucide-react";
import SideSheet from "./SideSheet";
import LinkButton from "../LinkButton/LinkButton";

function NavBar() {
  return (
    <header className=" sticky top-0 z-50 flex items-center justify-between space-x-2 border-b border-[#4E260B] bg-eggWhite px-10 py-5">
      <SideSheet />
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/images/omelegg.png"
            alt="egghead logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="itmes-center flex justify-evenly space-x-2">
        <ShoppingCart size={24} color="#4E260B" />
      </div>
    </header>
  );
}

export default NavBar;
