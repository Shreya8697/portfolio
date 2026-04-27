"use client";

const GithubCard = () => {
  const username = "Shreya8697";

  return (
    <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 flex flex-col gap-6 w-full shadow-lg hover:shadow-xl transition-all duration-300">

      {/* Title */}
      <h2 className="text-white text-xl font-semibold text-center">
        GitHub Activity
      </h2>

      {/* Contribution Graph (BIG + DARK FIX) */}
      <div className="w-full overflow-x-auto">
        <img
          src={`https://ghchart.rshah.org/16f2b3/${username}?bg=0f172a`}
          alt="github contributions"
          className="w-full min-w-[600px] rounded-xl border border-[#1e293b] p-2 bg-[#0f172a]"
        />
      </div>

        {/* Contribution Graph (FIXED) */}
      {/* <img
        src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0b1220&color=16f2b3&line=16f2b3&point=16f2b3&area=true&hide_border=true`}
        alt="github graph"
        className="w-full rounded-xl"
      /> */}

    </div>
  );
};

export default GithubCard;
