import { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);

  const bottoAnimation = {
    initial: { y: "5%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };

  return (
    <section>
      <div className="py-8 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-16">
          <div
            ref={ref}
            className="border-border relative flex min-h-96 items-center justify-center overflow-hidden rounded-3xl border px-6 before:absolute before:top-24 before:-z-10 before:h-4/5 before:w-full before:rounded-full before:bg-linear-to-r before:from-sky-100 before:from-15% before:via-white before:via-55% before:to-amber-100 before:to-90% before:blur-3xl dark:before:-z-10 dark:before:rounded-full dark:before:from-sky-400/10 dark:before:from-40% dark:before:via-black dark:before:via-55% dark:before:to-amber-300/10 dark:before:to-60%"
          >
            <motion.div
              {...bottoAnimation}
              className="mx-auto flex flex-col items-center gap-6"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="text-3xl font-medium md:text-5xl">
                  Innovative solutions for bold brands
                </h2>
                <p className="mx-auto max-w-2xl">
                  Looking to elevate your brand? We craft immersive experiences
                  that captivate, engage, and make your business unforgettable
                  in every interaction.
                </p>
              </div>
              <Button className="group hover:bg-primary/80 relative h-12 w-fit cursor-pointer overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6">
                <span className="relative z-10 transition-all duration-500">
                  Let's craft together
                </span>
                <div className="bg-background text-foreground absolute right-1 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
