// import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import menu from "../assets/icon/menu-2-line.svg";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export function SheetSideww() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="grid  gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <img
            src={menu}
            alt="menu icon"
            className="md:size-[30px] xl:hidden"
          />
        </SheetTrigger>
        <SheetContent side={"right"} className="flex flex-col">
          <SidebarProvider>
            <SidebarMenu>
              <div className="mt-[50px] ">
                <SidebarMenuItem>
                  <Link
                    to={"/who-we-are"}
                    className={clsx(" text-[16px] font-[500] leading-[24px]", {
                      "text-[#555555]": pathname != "/who-we-are",
                      " text-[#1DBF73]": pathname == "/who-we-are",
                    })}
                  >
                    <SidebarMenuButton className="hover:text-[#1DBF73]">
                      Who we are
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <Link
                    to={"/service"}
                    className={clsx(" text-[16px] font-[500] leading-[24px]", {
                      "text-[#555555]": pathname != "/service",
                      " text-[#1DBF73]": pathname == "/service",
                    })}
                  >
                    <SidebarMenuButton className="hover:text-[#1DBF73]">
                      Service
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <Link
                    to={"/our-work"}
                    className={clsx(" text-[16px] font-[500] leading-[24px]", {
                      "text-[#555555]": pathname != "/our-work",
                      " text-[#1DBF73]": pathname == "/our-work",
                    })}
                  >
                    <SidebarMenuButton className="hover:text-[#1DBF73]">
                      Our work
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <Link
                    to={"/about-us"}
                    className={clsx(" text-[16px] font-[500] leading-[24px]", {
                      "text-[#555555]": pathname != "/about-us",
                      " text-[#1DBF73]": pathname == "/about-us",
                    })}
                  >
                    <SidebarMenuButton className="hover:text-[#1DBF73]">
                      About us
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <Link
                    to={"/contact-us"}
                    className={clsx(" text-[16px] font-[500] leading-[24px]", {
                      "text-[#555555]": pathname != "/contact-us",
                      " text-[#1DBF73]": pathname == "/contact-us",
                    })}
                  >
                    <SidebarMenuButton className="hover:text-[#1DBF73]">
                      Contact us
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </div>
            </SidebarMenu>
          </SidebarProvider>
          hello
        </SheetContent>
      </Sheet>
    </div>
  );
}
