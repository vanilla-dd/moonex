const Footer = () => {
  return (
    <div className="bg-[#051422] px-2 py-10 text-white">
      <div className="flex flex-wrap items-center justify-around space-y-6">
        <a href="/">
          <img src="/assets/logo/moonex-logo.png" alt="" className="w-32" />
        </a>
        <div className="flex flex-col gap-2 font-extrabold md:flex-row lg:gap-16">
          <a href="#about" className="hover:text-[#F9D423]">
            About Us
          </a>
          <a href="/roadmap" className="hover:text-[#F9D423]">
            Roadmap
          </a>
          <a href="#faq" className="hover:text-[#F9D423]">
            FAQs
          </a>
          <a href="/contact" className="hover:text-[#F9D423]">
            Contact Us
          </a>
        </div>
        <div className="space-y-2 text-center md:space-y-4 lg:space-y-6">
          <p className="text-xl font-extrabold">
            Contact
            <span className="text-[#F9D423]"> Us</span>
          </p>
          <div className="flex items-center gap-8">
            <a href="#">
              <img src="/assets/company/telegram.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/company/reddit.svg" alt="" />
            </a>
            <a href="#">
              <img src="/assets/company/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
