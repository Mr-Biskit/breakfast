import React from "react";
import Link from "next/link";

type LinkButtonProps = { name: string; href?: string };

function LinkButton({ name, href }: LinkButtonProps) {
  const commonClass =
    "before:ease-cutom-expo relative inline-block before:absolute before:bottom-0 before:right-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-500 hover:before:left-0 hover:before:right-auto hover:before:w-full cursor-pointer text-white";

  if (href) {
    return (
      <Link href={href} className={commonClass}>
        {name}
      </Link>
    );
  }

  return <div className={commonClass}>{name}</div>;
}

export default LinkButton;
