import Image from "next/image";
import Navigation from "./components/navigation";
import "./styles/main.scss"
import Highlights from "./components/highlights";
import Rental from "./components/rental";

export default function Home() {
  return (
    <>
      <header>
        <Navigation/>
      </header>

      <main>
        <Highlights/>
        <Rental/>
      </main>

      <footer>

      </footer>
    </>
  );
}
