"use client";
import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import Link from "next/link";
import LinkButton from "../LinkButton/LinkButton";

const linkNames = ["Menu", "Locations", "Our Story", "FAQ"];

function SideSheet() {
  return (
    <nav className="flex items-center space-x-2">
      <Sheet>
        <SheetTrigger>
          <Menu size={24} />
        </SheetTrigger>
        <SheetContent className="bg-eggYolk px-0 py-10 lg:w-1/2" side={"left"}>
          <nav className="mt-20 flex w-full flex-col">
            {linkNames.map((linkName) => (
              <Link
                className=" mt-5 box-border flex w-full border-b-2 border-white text-left "
                href={`/${linkName.toLowerCase()}`}
                key={linkName}
              >
                <SheetClose>
                  <span className="text-heading ml-8 text-5xl uppercase tracking-tight text-white">
                    {linkName}
                  </span>
                </SheetClose>
              </Link>
            ))}
            <SheetFooter>
              <div className="text-heading flex w-full items-start justify-between text-xl uppercase tracking-tight">
                <LinkButton name="Recruitment" />
                <LinkButton name="Contact" />
                <LinkButton name="Login" />
              </div>
            </SheetFooter>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default SideSheet;
