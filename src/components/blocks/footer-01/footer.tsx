import Logo from "@/assets/logo/logo";
import { Separator } from "@/components/ui/separator";
import { Dribbble, Instagram, Linkedin, Twitter } from "lucide-react";

type FooterData = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

const footerSections: FooterData[] = [
  {
    title: "Sitemap",
    links: [
      {
        title: "Contact us",
        href: "#",
      },
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Work",
        href: "#",
      },
      {
        title: "Services",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
    ],
  },
  {
    title: "Other Pages",
    links: [
      {
        title: "Error 404",
        href: "#",
      },
      {
        title: "Terms & Conditions",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 xl:px-0">
            <div className="col-span-full lg:col-span-4">
              <div className="animate-in fade-in slide-in-from-bottom-10 fill-mode-both flex flex-col gap-6 delay-100 duration-1000 ease-in-out">
                {/* Logo */}
                <a href="/">
                  <Logo />
                </a>
                <p className="text-muted-foreground text-base font-normal">
                  Empowering businesses with innovative solutions. Let's create
                  something amazing together.
                </p>

                {/*Social links*/}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Dribbble size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-1 hidden lg:block"></div>

            {footerSections.map(({ title, links }, index) => (
              <div key={index} className="col-span-2">
                <div className="animate-in fade-in slide-in-from-bottom-10 fill-mode-both flex flex-col gap-4 delay-100 duration-1000 ease-in-out">
                  <p className="text-foreground text-base font-medium">
                    {title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {links.map(({ title, href }) => (
                      <li key={title}>
                        <a
                          href={href}
                          className="text-muted-foreground hover:text-foreground text-base font-normal hover:underline"
                        >
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-span-3">
              <div className="animate-in fade-in slide-in-from-bottom-10 fill-mode-both flex flex-col gap-4 delay-100 duration-1000 ease-in-out">
                <p className="text-foreground text-base font-medium">
                  Contact Details
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <p className="text-muted-foreground text-base font-normal">
                      Kathmandu, Nepal
                    </p>
                  </li>
                  <li>
                    <a
                      href="mailto:contact@example.com"
                      className="text-muted-foreground hover:text-foreground text-base font-normal"
                    >
                      hello@syntax.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+01051923556"
                      className="text-muted-foreground hover:text-foreground text-base font-normal"
                    >
                      0105 192 3556
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-10 fill-mode-both text-center text-sm font-normal delay-100 duration-1000 ease-in-out">
            ©2026 Syntax. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
