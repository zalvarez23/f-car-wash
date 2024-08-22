import { Button } from "@nextui-org/react";

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
  );
};
