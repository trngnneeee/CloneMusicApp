"use client"

import { usePathname } from "next/navigation";
import { AdminSider } from "../Admin/Sider/Sider";
import { Sider } from "../Sider/Sider"
import { Overlay } from "../Overlay/Overlay";
import { Suspense } from "react";
import { Search } from "../Search/Search";
import { SearchMobile } from "../Search/SearchMobile";
import { Play } from "../Play/Play";
import { Header } from "../Admin/Header/Header";

export const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  const isAdmin = pathName.startsWith("/admin");
  const isAdminAccount = pathName.startsWith("/admin/account");

  if (isAdmin) {
    if (isAdminAccount) {
      return (
        <>
          <>
            <body className="admin">
              {children}
            </body>
          </>
        </>
      );
    }
    else {
      return (
        <>
          <body className="admin bg-[#F5F6FA] relative">
            <Header />
            <div className="flex">
              <AdminSider className={"hidden xl:block sticky"}/>
              <main className="flex-1 p-[30px] overflow-y-auto">{children}</main>
            </div>
          </body>

        </>
      );
    }
  }
  else {
    return (
      <>
        <body className="bg-[#292929] relative client">
          <div className="hidden sider">
            <Sider />
          </div>
          <Overlay />
          <div className="container mx-auto">
            <div className="flex item-start">
              <div className={"hidden md:block w-[280px]"}>
                <Sider />
              </div>
              <div className="w-[550px] lg:flex-1 ml-[10px] xl:ml-[20px] relative">
                <Suspense>
                  <Search />
                </Suspense>
                <SearchMobile />
                <main className="mt-[20px] md:mt-[30px]">
                  {children}
                </main>
                <div className="mb-[200px] sm:mb-[150px] mt-[75px] text-center mr-[30px] lg:mr-0">
                  <div className="text-[15px] sm:text-[20px] md:text-[24px] text-[#727272b3] font-[500]">🎵 MusicApp - Powered by trngnneee</div>
                  <div className="text-[11px] sm:text-[13px] lg:text-[15px] text-[#727272b3] flex justify-center">
                    <div>
                      <div className="flex gap-[3px]">
                        <div className="font-bold">🌐 Instagram: </div>
                        <div>@trngn.neee</div>
                      </div>
                      <div className="flex gap-[3px]">
                        <div className="font-bold">🌐 Email: </div>
                        <div>dtn06052005@gmail.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Play />
        </body>
      </>
    );
  }
}