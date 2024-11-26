import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "How do I get a Referral Code?",
      answer: "Your referral code will be available in your account dashboard.",
    },
    {
      id: "item-2",
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      id: "item-3",
      question: "What are the limits for referral rewards?",
      answer:
        "There are no limits! Earn as much as you can by referring buyers.",
    },
  ];

  return (
    <div id="faq" className="flex w-full items-center justify-center">
      <div className="space-y-6 divide-y rounded-lg bg-[#F7F9FF05] px-4 py-6 sm:px-8 lg:w-2/3 lg:px-16 lg:py-12">
        <p className="text-center font-neuemachina text-4xl font-extrabold text-[#F9D423]">
          FAQs
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="py-px md:py-1 lg:py-2"
            >
              <AccordionTrigger className="text-lg font-medium text-[#ffffff] hover:text-[#F9D423] focus:outline-none">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#BAB8B8]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
