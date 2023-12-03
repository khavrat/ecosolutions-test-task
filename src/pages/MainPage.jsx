import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { About } from "../components/about/About";
import { Electricity } from "../components/electricity/Electricity";
import { Cases } from "../components/cases/Cases";
import { Faq } from "../components/fag/Faq"
import { ContactUs } from "../components/contactUs/ContactUs";
import { Footer } from "../components/footer/Footer";

export const MainPage = (toggleMenu) => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Electricity />
        <Cases/>
        <Faq />
        <ContactUs/>
      </main>
      <Footer/>
    </>
  );
};
