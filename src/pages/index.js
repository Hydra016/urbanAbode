import Image from "next/image";
import Header from "@/components/homepage/Header";
import Offers from "@/components/Offers";
import { store } from "./store";
import { Provider } from "react-redux";

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
      </div>
    </Provider>
  );
}
