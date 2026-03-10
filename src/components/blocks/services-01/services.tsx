import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import {
  AppWindowMac,
  ArrowUpRight,
  BarChart3,
  Image,
  SwatchBook,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ServiceData = {
  service_icon: LucideIcon;
  service_title: string;
  service_bg_color: string;
  service_text_color: string;
};

const serviceData: ServiceData[] = [
  {
    service_icon: SwatchBook,
    service_title: "Brand Strategy",
    service_bg_color: "bg-blue-500/10",
    service_text_color: "text-blue-500",
  },
  {
    service_icon: WandSparkles,
    service_title: "UX/UI Design",
    service_bg_color: "bg-orange-400/10",
    service_text_color: "text-orange-400",
  },
  {
    service_icon: BarChart3,
    service_title: "Analytics & Reporting",
    service_bg_color: "bg-teal-400/10",
    service_text_color: "text-teal-400",
  },
  {
    service_icon: Image,
    service_title: "Digital Marketing",
    service_bg_color: "bg-sky-400/10",
    service_text_color: "text-sky-400",
  },
  {
    service_icon: AppWindowMac,
    service_title: "Web Development",
    service_bg_color: "bg-red-500/10",
    service_text_color: "text-red-500",
  },
];

const Services = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="py-8 sm:py-16 lg:py-20" id="services01">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
        <div className="flex w-full flex-col items-center justify-center gap-8 sm:gap-16">
          {/*Headings*/}
          <div className="animate-in fade-in slide-in-from-top-10 fill-mode-both flex flex-col items-center justify-center gap-4 delay-200 duration-1000 ease-in-out">
            {/*Badge*/}
            <Badge
              variant={"outline"}
              className="h-7 px-3 py-1 text-sm font-normal"
            >
              Services
            </Badge>
            <div className="mx-auto max-w-3xs text-center sm:max-w-lg">
              <h2 className="text-foreground text-3xl font-medium sm:text-5xl">
                Where innovation meets aesthetics
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 sm:gap-12">
            {/*Services*/}
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {serviceData.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <Card className={cn("p-8 ring-0", service.service_bg_color)}>
                    <CardContent className="flex flex-col items-center justify-between gap-12 p-0 sm:gap-16">
                      <service.service_icon
                        size={32}
                        className={cn(service.service_text_color)}
                      />
                      <p
                        className={cn(
                          "max-w-36 text-2xl font-medium",
                          service.service_text_color,
                        )}
                      >
                        {service.service_title}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/*CTA*/}
            <div className="animate-in fade-in slide-in-from-bottom-10 fill-mode-both flex w-full flex-col items-center justify-between gap-12 rounded-2xl border bg-gray-950 p-8 delay-200 duration-1000 ease-in-out lg:flex-row">
              <div className="text-center md:text-start">
                <p className="text-2xl font-medium text-white">
                  See our Work in Action.
                </p>
                <p className="text-2xl font-medium text-white">
                  Start Your Creative Journey with Us!
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <Button className="group flex h-12 w-fit cursor-pointer items-center gap-4 rounded-full bg-white p-1 ps-5 text-sm font-medium text-black hover:bg-white/90 hover:text-black dark:hover:text-black">
                  <a href="#" className="flex items-center gap-4">
                    <span>Let’s Collaborate</span>
                    <div className="rounded-full bg-black p-3 text-white transition-transform duration-300 ease-in-out group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                </Button>
                <Button className="group flex h-12 w-fit cursor-pointer items-center gap-4 rounded-full border border-white/50 bg-gray-950 p-1 ps-5 text-sm font-medium text-white hover:bg-gray-950/90 hover:text-white dark:hover:text-white">
                  <a href="#" className="flex items-center gap-4">
                    <span>View Portfolio</span>
                    <div className="rounded-full bg-white p-3 text-black transition-transform duration-300 ease-in-out group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
