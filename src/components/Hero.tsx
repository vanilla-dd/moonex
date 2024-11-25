import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 text-balance text-center">
        <div className="space-y-2 font-neuemachina">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
            Trusted Multi-Chain
            <br />
            <span className="text-[#F9D423]">DEX </span>
            Platfrom
          </h1>
          <p className="text-sm text-[#9e9e9e] md:text-xl">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
        </div>
        <div className="flex gap-4">
          <Button className="rounded-[999vw] bg-gradient-to-r from-[#E4B40D] to-[#FFE68F] text-xs font-extrabold text-[#111111] outline-1 outline-offset-2 focus-visible:outline-white md:px-6 md:py-5">
            Connect Wallet
          </Button>
          <Button className="rounded-[999vw] border border-[#E4B40D] bg-transparent text-xs font-extrabold text-[#E4B40D] outline-1 outline-offset-2 focus-visible:outline-white md:px-6 md:py-5">
            Trade Crypto
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
