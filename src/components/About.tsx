const About = () => {
  return (
    <div className="space-y-10">
      <p className="font-neuemachina text-4xl font-extrabold">
        Why
        <span className="text-[#F9D423]"> MoonEx </span>?
      </p>

      <div className="rounded-lg bg-[#F7F9FF05] p-6 px-12 text-white shadow-lg shadow-white/5">
        <div className="grid grid-cols-3 items-center border-b border-gray-700 pb-4 text-center">
          <p className="font-neuemachina text-2xl font-semibold text-yellow-400">
            Comparison
          </p>
          <div className="flex items-center justify-center gap-2">
            <img src="/assets/logo/moonex-moon.svg" alt="" className="w-12" />
            <img src="/assets/logo/moonex-text.svg" alt="" />
          </div>
          <img
            src="/assets/logo/uniswap-logo.png"
            alt="Uniswap logo"
            className="mx-auto w-48"
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
              <p className="justify-items-start place-self-start self-start justify-self-start px-8 font-neuemachina text-lg text-[#F0F0F0B2]">
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
