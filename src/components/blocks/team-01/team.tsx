import { Badge } from "@/components/ui/badge";
import { Globe, Linkedin } from "lucide-react";
import { motion } from "motion/react";

type Team = {
  name: string;
  role: string;
  image: string;
  socials: {
    website: string;
    linkedin: string;
  };
}[];

const teamData: Team = [
  {
    name: "Logan Dang",
    role: "Frontend Developer",
    image: "https://images.shadcnspace.com/assets/team/team-img-01.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ana Belić",
    role: "Social Media Specialist",
    image: "https://images.shadcnspace.com/assets/team/team-img-02.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Brian Hanley",
    role: "Backend Developer",
    image: "https://images.shadcnspace.com/assets/team/team-img-03.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Darko Stanković",
    role: "UI/UX Designer",
    image: "https://images.shadcnspace.com/assets/team/team-img-04.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
];
const Team = () => {
  return (
    <section id="team">
      <div className="py-8 sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-4 sm:px-6 md:gap-16 lg:px-16">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="mx-auto flex max-w-xl flex-col items-center justify-center gap-4 text-center"
          >
            <Badge variant="outline" className="h-auto px-3 py-1 text-sm">
              Team
            </Badge>
            <h2 className="text-foreground text-3xl font-medium md:text-5xl">
              Meet the creative minds behind our success
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamData?.map((value, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="group flex flex-col items-center justify-center gap-6"
                >
                  <img
                    className="h-full w-full transition-all duration-300 group-hover:grayscale"
                    src={value.image}
                    alt="team-img"
                  />
                  <div className="flex w-full flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h3 className="text-muted-foreground text-2xl font-medium">
                        {value.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-normal">
                        {value.role}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={value.socials.website}
                        className="hover:bg-accent/80 rounded-full p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe size={16} />
                      </a>
                      <a
                        href={value.socials.linkedin}
                        className="hover:bg-accent/80 rounded-full p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
