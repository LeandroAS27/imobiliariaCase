import Image from "next/image";
import Navigation from "./components/navigation";
import "./styles/main.scss"
import Highlights from "./components/highlights";

export default function Home() {
  return (
    <>
      <header>
        <Navigation/>
      </header>

      <main>
        <Highlights/>
      </main>

      <footer>

      </footer>
    </>
  );
}
