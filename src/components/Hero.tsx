import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <div className="absolute left-[200px] top-[200px] -z-10 h-[500px] w-[1173px] rotate-[14deg] rounded-[50%] border border-[#484848] before:absolute before:inset-0 before:rounded-[50%] before:border before:border-[#484848]/[0.3] before:content-['']" />
      <div className="absolute -left-[90px] top-[70px] -z-10 h-[748px] w-[1724px] rotate-[14deg] rounded-[50%] border border-[#484848] before:absolute before:inset-0 before:rounded-[50%] before:border before:border-[#484848]/[0.3] before:content-['']" />
      <div className="absolute -left-[406px] -top-[100px] -z-10 h-[1032px] w-[2378px] rotate-[14deg] rounded-[50%] border border-[#484848] before:absolute before:inset-0 before:rounded-[50%] before:border before:border-[#484848]/[0.3] before:content-['']" />
      <div className="absolute right-28 top-1/2 -z-10 aspect-square w-72 -translate-y-1/2 rounded-full border-[0.5px] bg-gradient-to-br from-[#FFF6D7] to-[#E4B40D]"></div>
      <img
        src="/assets/stars/star.svg"
        alt=""
        className="absolute left-48 top-1/4 -z-10"
      />
      <img
        src="/assets/stars/star.svg"
        alt=""
        className="absolute bottom-10 right-52 -z-10"
      />
      <img
        src="/assets/stars/star-small.svg"
        alt=""
        className="absolute right-48 top-[20%] -z-10"
      />
      <div className="space-y-6">
        <div className="font-neuemachina">
          <h1 className="font-extrabold lg:text-7xl">
            Trusted Multi-Chain
            <br />
            <span className="text-[#F9D423]">DEX </span>
            Platfrom
          </h1>
          <p className="text-[#9e9e9e] md:text-xl">
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
