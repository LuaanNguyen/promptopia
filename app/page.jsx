// import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md: hiddne"></br>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is a platform where users can share useful and creative AI
        prompts for the world to discover
      </p>

      <Feed />
    </section>
  );
};

export default Home;
