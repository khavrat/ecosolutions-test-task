import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { About } from "../components/about/About";

export const MainPage = (toggleMenu) => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
      </main>
    </>
  );
};
