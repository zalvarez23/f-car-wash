import { Card } from "@nextui-org/react";

export const HomeCards = () => {
  const cards = [
    {
      title: "Washing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus nemo non fuga, quasi ducimus suscipit consequuntur fugit, ratione debitis molestias!",
    },
    {
      title: "Repairing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus nemo non fuga, quasi ducimus suscipit consequuntur fugit, ratione debitis molestias!",
    },
    {
      title: "Cleaning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus nemo non fuga, quasi ducimus suscipit consequuntur fugit, ratione debitis molestias!",
    },
    {
      title: "Polishing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus nemo non fuga, quasi ducimus suscipit consequuntur fugit, ratione debitis molestias!",
    },
  ];

  return (
    <div className="gap-8 grid grid-cols-2 px-5">
      {cards.map((card) => (
        <Card
          className="justify-center items-center h-40"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <p className="text-sm text-primary tracking-wider">{card.title}</p>
        </Card>
      ))}
    </div>
  );
};
