import { cn } from "@/lib/utils";

const YellowBloom = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        className,
        `absolute hidden aspect-video rounded-full bg-[#EDD955]/80 blur-[100px] md:block`
      )}
    >
      <img src="/assets/texture.png" alt="" />
    </div>
  );
};

export default YellowBloom;
