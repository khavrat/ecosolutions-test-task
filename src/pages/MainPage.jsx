import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";

export const MainPage = (toggleMenu) => {

  return (
    <>
      <Header />
      <main>
        <Main/>
      </main>
    </>
  );
};

