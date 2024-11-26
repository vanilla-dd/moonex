const About = () => {
  return (
    <div
      id="about"
      className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10"
    >
      <p className="font-neuemachina text-4xl font-extrabold">
        Why
        <span className="text-[#F9D423]"> MoonEx </span>?
      </p>

      <div className="rounded-lg bg-[#F7F9FF05] p-2 text-white shadow-lg shadow-white/5 lg:p-6 lg:px-12">
        <div className="grid grid-cols-3 items-center border-b border-gray-700 pb-4 text-center">
          <p className="font-neuemachina text-base font-semibold text-yellow-400 lg:text-2xl">
            Comparison
          </p>
          <div className="flex items-center justify-center gap-2">
            <img
              src="/assets/logo/moonex-moon.svg"
              alt=""
              className="hidden md:block md:w-8 lg:w-12"
            />
            <img src="/assets/logo/moonex-text.svg" alt="" />
          </div>
          <img
            src="/assets/logo/uniswap-logo.png"
            alt="Uniswap logo"
            className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48"
          />
        </div>

        <div className="divide-y divide-gray-700">
          {[
            { label: "1. Point no one", moonex: "✅", uniswap: "❌" },
            { label: "2. Point no two this", moonex: "✅", uniswap: "❌" },
            { label: "3. Point no three this", moonex: "✅", uniswap: "❌" },
            { label: "4. Point no four this", moonex: "✅", uniswap: "❌" },
            { label: "5. Point no five this", moonex: "✅", uniswap: "❌" },
          ].map((point, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center py-4 text-center"
            >
              <p className="justify-items-start place-self-start self-start justify-self-start font-neuemachina text-xs text-[#F0F0F0B2] lg:px-8 lg:text-lg">
                {point.label}
              </p>
              <p className="text-lg text-green-500">{point.moonex}</p>
              <p className="text-lg text-red-500">{point.uniswap}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
