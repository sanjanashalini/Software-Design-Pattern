import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";

export  function BoxRevealDemo() {
  return (
    <div className="h-full w-full max-w-[32rem] flex flex-col items-center justify-center overflow-hidden pt-4">
      <BoxReveal boxColor={"#ee57e4"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Magic UI<span className="#ee57e4">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#ee57e4"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          UI library for{" "}
          <span className="#ee57e4">Design Engineers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#ee57e4"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#ee57e4]"> React</span>,
            <span className="font-semibold text-[#ee57e4]"> Typescript</span>,
            <span className="font-semibold text-[#ee57e4]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#ee57e4]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#ee57e4"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#ee57e4]">Explore</Button>
      </BoxReveal>
    </div>
  );
}
