import { HeaderComponent } from "../../shared/components/header-component";

export const HomePage = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <header>
        <HeaderComponent />
      </header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
};
