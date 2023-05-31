import React from "react";

const HeroSection = () => {
  const backgroundImageUrl = "https://i.ibb.co/7bt72x4/image.png";
  return (
    <div
      className="bg-cover bg-center py-52"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl text-white font-bold">
          Welcome to the Alumni Network
        </h1>
        <p className="text-white mt-4">
          Connect, collaborate, and celebrate with your fellow alumni!
        </p>
        <button className="mt-6 bg-white text-blue-500 py-2 px-4 rounded-md font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
