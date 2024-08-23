import { Card, CardHeader } from "@nextui-org/react";
import { HeaderComponent } from "../../shared/components/header-component";
import { HomeCards } from "./components/home-cards";

export const HomePage = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <header className="space-y-8">
        <HeaderComponent />
      </header>
      <main>Main</main>
      <footer>footer</footer>
    </div>
  );
};
