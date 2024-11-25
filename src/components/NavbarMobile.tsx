import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const FullScreenNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
        className="md:hidden"
      >
        <Menu />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#111A47] via-[#1A2555] to-[#0A0F2E] pt-2 md:hidden">
          <div className="flex justify-between px-2 pt-2">
            <a href="/" className="flex items-center gap-1 md:gap-2 lg:gap-3">
              <img
                src="/assets/logo/moonex-moon.svg"
                alt="logo"
                className="w-11 lg:w-14"
              />
              <img
                src="/assets/logo/moonex-text.svg"
                alt="logo"
                className="w-16 lg:w-20"
              />
            </a>
            <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
              <X />
            </button>
          </div>
          {/* Menu Links */}
          <nav className="mt-4 flex flex-col gap-4 px-6 pb-12 pt-6 text-lg font-semibold">
            <div className="flex justify-between">
              <a href="/">Home</a>
              <ChevronRight />
            </div>
            <div className="h-px bg-gray-100/50"></div>
            <div className="flex justify-between">
              <a href="#about">About Us</a>
              <ChevronRight />
            </div>
            <div className="h-px bg-gray-100/50"></div>
            <div className="flex justify-between">
              <a href="/roadmap">Roadmap</a>
              <ChevronRight />
            </div>
            <div className="h-px bg-gray-100/50"></div>
            <div className="flex justify-between">
              <a href="#faq">FAQs</a>
              <ChevronRight />
            </div>
            <div className="h-px bg-gray-100/50"></div>
            <div className="flex justify-between">
              <a href="/contact">Contact Us</a>
              <ChevronRight />
            </div>
          </nav>

          {/* Additional Content */}
          {/* <div className="flex flex-col justify-end gap-6 px-6"> */}
          {/* <div>
              <div className="text-sm font-bold">Cache Exchange Fund</div>
              <div className="text-sm text-gray-500">
                Next Closing - November 27
              </div>
            </div> */}

          {/* Buttons */}
          {/* </div> */}
          <div className="px-6">
            <Button className="w-full rounded-[999vw] bg-gradient-to-r from-[#E4B40D] to-[#FFE68F] py-6 text-lg font-extrabold text-[#111111] outline-1 outline-offset-2 focus-visible:outline-white">
              Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenNav;
