import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
];

const Logo = () => (
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
);

const MobileNav = () => {
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
            <Logo />
            <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
              <X />
            </button>
          </div>
          {/* Menu Links */}
          <nav className="mt-4 flex flex-col gap-4 px-6 pb-12 pt-6 text-lg font-semibold">
            {navLinks.map((link, index) => (
              <div key={link.href} className="space-y-2">
                <a
                  href={link.href}
                  className="flex justify-between"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                  <ChevronRight />
                </a>
                {index < navLinks.length - 1 && (
                  <div className="h-px bg-gray-100/50" />
                )}
              </div>
            ))}
          </nav>

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

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-2">
      <Logo />
      <div className="hidden items-center font-extrabold md:flex md:gap-8 md:text-sm lg:gap-14 lg:text-base xl:gap-24 xl:text-lg">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 sm:gap-6">
        <Button className="rounded-[999vw] bg-gradient-to-r from-[#E4B40D] to-[#FFE68F] text-xs font-extrabold text-[#111111] outline-1 outline-offset-2 focus-visible:outline-white md:px-6 md:py-5">
          Connect Wallet
        </Button>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
