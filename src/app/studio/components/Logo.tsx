import Image from "next/image";
import React from "react";
import { LogoProps } from "sanity";

function Logo(props: LogoProps) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        src="/omelegg.png"
        alt="egghead logo"
        width={50}
        height={50}
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
