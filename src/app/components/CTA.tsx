"use client";

const CTA: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center order-1 md:order-none">
      <button className="h-12 w-64 p-2 bg-gradient-to-r from-[#52A8FF] via-[#0084FF] to-[#0084FF] text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition">
        Start for free
      </button>
    </div>
  );
};

export default CTA;
