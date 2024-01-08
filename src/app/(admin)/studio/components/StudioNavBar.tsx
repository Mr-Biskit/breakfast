import Link from "next/link";
import { Undo2 } from "lucide-react";
import { LayoutProps } from "sanity";

function StudioNavBar(props: LayoutProps) {
  return (
    <div className="bg-[#0e1315]">
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-eggRed">
          <Undo2 size={24} className="mr-2 text-eggRed" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavBar;
