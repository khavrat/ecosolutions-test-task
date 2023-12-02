import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { About } from "../components/about/About";
import { Electricity } from "../components/electricity/Electricity";
import {Faq} from "../components/fag/Faq"
import { Footer } from "../components/footer/Footer";

export const MainPage = (toggleMenu) => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Electricity />
        <Faq/>
      </main>
      <Footer/>
    </>
  );
};
