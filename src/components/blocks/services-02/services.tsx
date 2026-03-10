import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface ServiceItem {
  heading: string;
  descp: string;
  image: string;
}

export interface ServicesProps {
  data?: ServiceItem[];
}

export const servicesData: ServiceItem[] = [
  {
    heading: "Brand Strategy",
    descp:
      "We craft unique brand stories and visual identities that resonate with your audience and build long-lasting trust and recognition.",
    image: "https://images.shadcnspace.com/assets/services/services-1.png",
  },
  {
    heading: "Web development",
    descp:
      "Build stunning, user-friendly websites that not only look great but also perform seamlessly across all devices.",
    image: "https://images.shadcnspace.com/assets/services/services-2.png",
  },
  {
    heading: "Content creation",
    descp:
      "We create engaging, high-quality content that resonates with your audience and helps you connect with them on a deeper level.",
    image: "https://images.shadcnspace.com/assets/services/services-3.png",
  },
  {
    heading: "Motion graphics",
    descp:
      "We create engaging, high-quality motion graphics that capture the essence of your brand and help you connect with your audience on a deeper level.",
    image: "https://images.shadcnspace.com/assets/services/services-4.png",
  },
];

function Services({ data = servicesData }: ServicesProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="services02">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-16 md:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8 sm:gap-16">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="animate-in fade-in slide-in-from-left-10 fill-mode-both flex flex-col gap-4 delay-200 duration-1000 ease-in-out">
              <Badge
                variant="outline"
                className="outline-border h-auto border-0 px-3 py-1 text-sm font-normal outline"
              >
                Services
              </Badge>
              <h2 className="text-foreground text-3xl font-semibold sm:text-5xl">
                What we do
              </h2>
              <p className="text-muted-foreground max-w-2xl text-base sm:text-lg">
                A glimpse into our creativity—exploring innovative designs,
                successful collaborations, and transformative digital
                experiences.
              </p>
            </div>
            <Button
              className={
                "group bg-primary hover:bg-primary/80 animate-in fade-in slide-in-from-right-10 fill-mode-both flex h-auto w-fit items-center justify-between gap-2 rounded-full border-0 p-1 ps-5 font-medium text-white delay-200 duration-1000 ease-in-out lg:gap-3"
              }
            >
              <a
                href="#"
                className="text-primary-foreground flex items-center gap-3 text-sm font-medium"
              >
                Let's Collaborate
                <div className="bg-background rounded-full p-2 transition-transform duration-300 ease-in-out group-hover:rotate-45">
                  <Icon
                    className="text-foreground"
                    icon="lucide:arrow-up-right"
                    width={16}
                    height={16}
                  />
                </div>
              </a>
            </Button>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-10 fill-mode-both relative grid grid-cols-12 gap-6 delay-200 duration-1000 ease-in-out">
            <div className="col-span-12 flex w-full items-center justify-center lg:col-span-4">
              <div className={`z-10 h-80 transition-all duration-300`}>
                {data?.[activeIndex]?.image && (
                  <img
                    src={data[activeIndex].image}
                    alt="Service Image"
                    width={400}
                    height={250}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>
            <div className="lg:col-span-1" />
            <div className="col-span-12 flex w-full flex-col gap-16 lg:col-span-7">
              <div>
                {data?.map((value, index) => (
                  <div
                    key={index}
                    onMouseEnter={(e) => handleMouseEnter(index)}
                    className="group border-border relative flex cursor-pointer flex-col items-start justify-between gap-1 border-t py-6 xl:flex-row xl:items-center xl:gap-10 xl:py-10"
                  >
                    <h3
                      className={cn(
                        "text-foreground w-full max-w-2xs py-1 text-2xl font-semibold group-hover:text-teal-400 md:text-3xl",
                        activeIndex === index ? "text-teal-400" : "",
                      )}
                    >
                      {value.heading}
                    </h3>
                    {activeIndex === index && (
                      <p className="text-muted-foreground flex-1 text-base transition-all duration-300">
                        {value.descp}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
