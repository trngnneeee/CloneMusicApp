import { FaPlay } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const SongItem2 = (props: { item: any }) => {
    const { item } = props;
    return (
        <>
            <div className="mb-[12px]">
                <div className="flex justify-between items-center bg-[#212121] p-[10px] rounded-[15px]">
                    <div className="flex items-center gap-[12px] ml-[23px]">
                        <button className="text-white">
                            <FaPlay />
                        </button>
                        <img
                            src={item.img}
                            className="w-[76px] h-auto"
                        />
                        <div className="text-white font-[600] text-[16px">{item.title}</div>
                    </div>
                    <div className="text-white font-[400] text-[14px]">{item.singer}</div>
                    <div className="flex gap-[18px] mr-[23px]">
                        <div className="font-[400] text-[14px] text-white">{item.time}</div>
                        <button className="text-[#00ADEF]">
                            <FaHeart/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}