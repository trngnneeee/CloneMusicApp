import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItem = (props: any) => {
    const pathname = usePathname();
    const {item, isLogin} = props;
    return (
        <>
            {(item.isLogin === undefined || item.isLogin === isLogin) && (
                <li className="mb-[30px]">
                    <Link
                        href={item.link}
                        className={`flex items-center hover:text-[#00ADEF] ${pathname === item.link ? "text-[#00ADEF]" : "text-white"
                            }`}
                    >
                        <span className="text-[16px] mr-[20px]">{item.icon}</span>
                        <span className="font-[700] text-[16px]">{item.title}</span>
                    </Link>
                </li>
            )}
        </>
    );
}