import { HeaderComponent } from "../../shared/components/header-component";
import { SubTitleComponent } from "../sub-title/SubTitle";

export const HomePage = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <header className="space-y-8">
        <HeaderComponent />
        <SubTitleComponent />
      </header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
};
