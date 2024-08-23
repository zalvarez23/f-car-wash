import { Button } from "@nextui-org/react";
import { HomeCards } from "../../screens/home/components/home-cards";

export const HeaderComponent = () => {
  const headers = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Services",
      href: "/services",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center py-4 px-6">
        <section className="text-sm">Logo</section>
        <section className="flex justify-between gap-8">
          {headers.map((header) => (
            <p
              className="semibold-text text-sm text-primary tracking-wider"
              key={header.title}
            >
              {header.title}
            </p>
          ))}
        </section>
        <section>
          <Button color="primary">About Us</Button>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <section className="col-span-6">
          <p className="text-left text-7xl font-bold text-justify sm:text-start">
            Keep Your Car Clean And Shiny
          </p>

          <p className="text-left text-xl mt-6  text-gray-500 text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            accusamus nemo non fuga, quasi ducimus suscipit consequuntur fugit,
            ratione debitis molestias!
          </p>
        </section>
        <section className="col-span-6">
          <HomeCards />
        </section>
      </div>
    </>
  );
};
