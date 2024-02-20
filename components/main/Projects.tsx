import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="roadmap"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        ROADMAP
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/mainIconsdark.png"
          title="PHASE - 1"
          line1="Launch"
          line2="Dexscanner and Dextools Update"
          line3="CoinGecko/Coinmarketcap Listings"
          line4="690+ Holders"
        />

        <ProjectCard
          src="/mainIconsdark.png"
          title="PHASE - 2"
          line1="Partnerships"
          line2="Guerilla Marketing"
          line3="Exclusive holder content/community hang outs"
          line4="CEX Listings"
        />
        {/* <ProjectCard
          src="/mainIconsdark.png"
          title="PHASE - 3"
          line1="Lorem ipsum dolor sit amet"
          line1="Lorem ipsum dolor sit amet"
          line1="Lorem ipsum dolor sit amet"
          line1="Lorem ipsum dolor sit amet"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
