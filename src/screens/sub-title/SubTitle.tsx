import { Button } from "@nextui-org/react";

export const SubTitleComponent = () => {
  return (
    <div className="grid grid-cols-12">
      <section className="col-span-7">
        <p className="text-left text-7xl font-bold">Keep Your Car</p>
        <p className="text-left text-7xl font-bold">Clean And Shiny</p>
      </section>
      <section className="col-span-5 space-y-8">
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          accusamus nemo non fuga, quasi ducimus suscipit consequuntur fugit,
          ratione debitis molestias!
        </p>
        <Button className="float-left" color="primary">
          Get Started
        </Button>
      </section>
    </div>
  );
};
