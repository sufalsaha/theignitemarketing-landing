import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
// import clsx from "clsx";

export function SheetSideww() {
  //   const location = useLocation();
  //   const pathname = location.pathname;

  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <img
            src={"sharpMenu"}
            alt="menu icon"
            className="md:size-[30px] xl:hidden"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="flex flex-col">
          <SidebarMenuItem className="">
            <Link
              to={"/"}
              //   className={clsx("text-[16px] font-[500] leading-[24px]", {
              //     "text-[#555555]": pathname != "/",
              //     " text-[#1DBF73]": pathname == "/",
              //   })}
            >
              <SidebarMenuButton className="hover:text-[#1DBF73]">
                Home
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SheetContent>
      </Sheet>
    </div>
  );
}
