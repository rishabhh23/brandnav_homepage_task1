"use client";

const HeroText: React.FC = () => {
  return (
    <div className="mt-5 p-5 flex items-center justify-center">
      <div className="text-center">
        <h1
          className="m-5 font-bold text-4xl sm:text-5xl"
          style={{ color: "#0D2052" }}
        >
          Weapons to grow
        </h1>
        <h1
          className="text-4xl font-bold sm:text-5xl"
          style={{ color: "#0D2052" }}
        >
          your Business
        </h1>
        <p className="mt-10 text-lg sm:text-xl" style={{ color: "#666666" }}>
          Turbocharge your business growth. <br />
          Our products help ignite sales and entrepreneurship.
        </p>
      </div>
    </div>
  );
};

export default HeroText;