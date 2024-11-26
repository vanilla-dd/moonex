import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div id="faq" className="flex w-full items-center justify-center">
      <div className="space-y-6 divide-y rounded-lg bg-[#F7F9FF05] px-4 py-6 sm:px-8 lg:w-2/3 lg:px-16 lg:py-12">
        <p className="text-center font-neuemachina text-4xl font-extrabold text-[#F9D423]">
          FAQs
        </p>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="py-px md:py-1 lg:py-2">
              <AccordionTrigger className="text-base font-medium">
                How do I get a Referral Code?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#BAB8B8]">
                Your referral code will be available in your account dashboard.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="py-px md:py-1 lg:py-2">
              <AccordionTrigger className="text-base font-medium">
                Do I get rewarded in tokens or ETH when I refer buyers?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#BAB8B8]">
                You receive your rewards in ETH instantly once someone you refer
                makes a transaction!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="py-px md:py-1 lg:py-2">
              <AccordionTrigger className="text-base font-medium">
                How do I get a Referral Code?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#BAB8B8]">
                Your referral code will be available in your account dashboard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
