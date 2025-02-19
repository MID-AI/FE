"use client";

import { usePathname } from "next/navigation";
import HomeIcon from "@/assets/icon/home.svg";
import CreateIcon from "@/assets/icon/create.svg";
import EditIcon from "@/assets/icon/edit.svg";
import HistoryIcon from "@/assets/icon/history.svg";
import Logo from "@/assets/logo.svg";
import LogoSm from "@/assets/logo_sm.svg";
import SidebarItem from "./sidebar-item";
import SidebarItemIcon from "./sidebar-item-icon";
import SidebarUser from "./sidebar-user";
import PAGE_ROUTES from "@/constants/page-routes";

export const menuItems = [
  { icon: HomeIcon, label: "홈", href: "/" },
  { icon: CreateIcon, label: "생성하기", href: `${PAGE_ROUTES.IMAGE_CREATE}` },
  { icon: EditIcon, label: "편집하기", href: "/edit" },
  { icon: HistoryIcon, label: "히스토리", href: `${PAGE_ROUTES.HISTORY}` },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <div className="fixed z-50 hidden h-screen w-140 flex-col justify-between bg-default px-8 pb-24 pt-21 lg:flex">
        <div className="flex flex-col items-center justify-center gap-38">
          <Logo className="h-51" />
          <div className="flex w-full flex-col gap-12">
            {menuItems.map((item) => (
              <SidebarItem key={item.label} item={item} pathname={pathname} />
            ))}
          </div>
        </div>
        <SidebarUser />
      </div>

      {/* Tablet sidebar */}
      <div className="fixed z-50 flex h-screen w-64 flex-col items-center justify-between bg-default py-8 pb-32 pt-21 lg:hidden">
        <div className="flex flex-col items-center gap-38">
          <LogoSm className="h-51" />
          <div className="flex flex-col gap-12">
            {menuItems.map((item) => (
              <SidebarItemIcon
                key={item.label}
                item={item}
                pathname={pathname}
              />
            ))}
          </div>
        </div>
        <SidebarUser icon />
      </div>

      {/* Mobile footer menu */}
      {/* <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-[#EDEDED] bg-background md:hidden">
        <nav className="flex h-16 items-center justify-around">
          {[...menuItems].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center space-y-1 text-muted-foreground hover:text-primary",
                pathname === item.href && "text-primary",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
          <SidebarUser mobile />
        </nav>
      </div> */}
    </>
  );
}
