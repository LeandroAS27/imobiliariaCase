import Image from "next/image";
import Navigation from "./components/navigation";
import "./styles/main.scss"
import Highlights from "./components/highlights";
import Rental from "./components/rental";
import Questions from "./components/questions";
import Search from "./components/search";
import Footer from "./components/footer";
import MainSession from "./components/mainsession";

export default function Home() {
  return (
    <>
      <header>
        <MainSession/>
      </header>

      <main>
        <Highlights/>
        <Rental/>
        <Questions/>
        <Search/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}
