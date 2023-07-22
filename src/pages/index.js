import Image from "next/image";
import Header from "@/components/homepage/Header";
import Offers from "@/components/Offers";
import { store } from "../store";
import { Provider } from "react-redux";
import About from "@/components/about";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="main-container">
        <section className="screen">
          <Header />
        </section>
        <section className="screen">
          <Offers />
        </section>
        <section className="screen">
          <About />
        </section>
      </div>
    </Provider>
  );
}
