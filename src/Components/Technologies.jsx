import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500 " />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiRedis className="text-7xl text-red-700 " />
        </div>
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500 " />
        </div> */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandFramerMotion className="text-7xl text-pink-600 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiSupabaseFill className="text-7xl text-[#3Ecf8e] " />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
