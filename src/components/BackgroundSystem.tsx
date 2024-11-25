const BackgroundSystem = () => {
  return (
    <div className="pointer-events-none absolute -z-10 min-h-dvh w-full overflow-hidden">
      <div className="absolute left-[200px] top-[200px] h-[500px] w-[1173px] rotate-[14deg] rounded-[50%] border border-[#484848] before:absolute before:inset-0 before:rounded-[50%] before:border before:border-[#484848]/[0.3] before:content-['']" />
      <div className="absolute -left-[90px] top-[70px] h-[748px] w-[1724px] rotate-[14deg] rounded-[50%] border border-[#484848] before:absolute before:inset-0 before:rounded-[50%] before:border before:border-[#484848]/[0.3] before:content-['']" />
      <div className="absolute -left-[406px] -top-[100px] h-[1032px] w-[2378px] rotate-[14deg] rounded-[50%] border border-[#484848] before:absolute before:inset-0 before:rounded-[50%] before:border before:border-[#484848]/[0.3] before:content-['']" />
      <div className="absolute bottom-10 right-10 aspect-square w-32 rounded-full border-[0.5px] bg-gradient-to-br from-[#FFF6D7] to-[#E4B40D] sm:w-40 lg:right-28 lg:top-1/2 lg:w-auto lg:-translate-y-1/2">
        <img
          src="/assets/texture.png"
          alt=""
          className="aspect-square w-full rounded-full opacity-5"
        />
      </div>
      <img
        src="/assets/stars/star.svg"
        alt=""
        className="absolute left-[10%] top-[10%] w-8 animate-pulse sm:w-10 lg:top-1/4"
      />
      <img
        src="/assets/stars/star.svg"
        alt=""
        className="absolute left-2/3 top-1/4 w-10 animate-pulse sm:w-12 lg:left-auto lg:right-[15%] lg:top-[15%]"
      />
      <img
        src="/assets/stars/star-small.svg"
        alt=""
        className="absolute bottom-1/4 left-1/4 w-8 animate-pulse sm:w-10 lg:bottom-[10%] lg:left-auto lg:right-[15%]"
      />
    </div>
  );
};

export default BackgroundSystem;
