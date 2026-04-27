// @flow strict
import Image from "next/image";

import StatusCard from "./statuscard";
import GithubCard from "./githubcard";

function Stats() {
  return (
    <div id="stats" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      
      {/* Background */}
      <Image
        src="/section.svg"
        alt="stats"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Top gradient line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>

          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Dev Activity
          </span>

          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT → Status */}
          <div className="flex justify-center">
            <StatusCard />
          </div>

          {/* RIGHT → GitHub */}
          <div className="flex justify-center">
            <GithubCard />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;
