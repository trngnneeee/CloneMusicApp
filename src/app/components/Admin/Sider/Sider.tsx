import Link from "next/link";
import { TbCategory } from "react-icons/tb";
import { IoMdMusicalNotes } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { GiMicrophone } from "react-icons/gi";

export const AdminSider = (props: {className?}) => {
  const pathName = usePathname();
  const { className } = props;

  const data = [
    {
      icon: <TbCategory className="translate-y-[1.5px]" />,
      link: "/admin/category/list",
      title: "Quản lý danh mục"
    },
    {
      icon: <GiMicrophone className="translate-y-[1.5px]" />,
      link: "/admin/singer/list",
      title: "Quản lý ca sĩ"
    },
    {
      icon: <IoMdMusicalNotes className="translate-y-[1.5px]" />,
      link: "/admin/song/list",
      title: "Quản lý bài hát"
    },
    {
      icon: <FaRegUser className="translate-y-[1.5px]" />,
      link: "/admin/user/list",
      title: "Quản lý người dùng"
    }
  ]

  const data2 = [
    {
      icon: <IoSettingsOutline className="translate-y-[1.5px]" />,
      link: "/admin/setting/list",
      title: "Cài đặt chung"
    },
    {
      icon: <FaRegUser className="translate-y-[1.5px]" />,
      link: "/admin/setting/profile/edit",
      title: "Thông tin cá nhân"
    }
  ]

  return (
    <>
      <div className={"bg-white w-[240px] min-h-screen border-r-[1px] border-r-[#E0E0E0] " + className}>
        <div className="border-b-[1px] border-b-[#E0E0E0] py-[10px]">
          <ul>
            {
              data.map((item, index) => (
                <li className="" key={index}>
                  <div className={`w-[80%] hover:bg-[#4880FF] text-dark hover:text-white py-[12px] px-[10px] mx-auto rounded-[10px] ${(item.link == pathName ? " bg-[#4880FF] text-white" : "")}`}>
                    <Link href={item.link} className="flex gap-[16px] w-full">
                      {item.icon}
                      <div className="text-[14px] font-[600]">{item.title}</div>
                    </Link>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="py-[10px]">
          <ul>
            {
              data2.map((item, index) => (
                <li className="" key={index}>
                  <div className={`w-[80%] hover:bg-[#4880FF] text-dark hover:text-white py-[12px] px-[10px] mx-auto rounded-[10px] ${(item.link == pathName ? " bg-[#4880FF] text-white" : "")}`}>
                    <Link href={item.link} className="flex gap-[16px] w-full">
                      {item.icon}
                      <div className="text-[14px] font-[600]">{item.title}</div>
                    </Link>
                  </div>
                </li>
              ))
            }
            <li className="">
              <div className="w-[80%] text-[#F93C65] py-[12px] px-[10px] mx-auto rounded-[10px]">
                <Link href="#" className="flex gap-[16px] w-full">
                  <FaPowerOff className="translate-y-[1.5px]" />
                  <div className="text-[14px] font-[600]">Đăng xuất</div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}