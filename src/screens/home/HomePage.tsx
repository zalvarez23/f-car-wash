import { SideBar } from "../../shared/components/SideBar";

export const HomePage = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* <header className="space-y-8">
        <HeaderComponent />
      </header>
      <main>Main</main>
      <footer>footer</footer> */}
      <SideBar />
    </div>
  );
};
