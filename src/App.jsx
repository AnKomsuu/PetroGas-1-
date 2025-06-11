import { Header } from "./components/Header";
import { InfoCompany } from "./components/infoCompany";
import { Price } from "./components/price";
import { Products } from "./components/products";
import { Pgtvideo } from "./components/pgtvideo";
import { Region } from "./components/region";
import { News } from "./components/news";
import { Question } from "./components/question";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <div>
      <Header />
      <InfoCompany />
      <Price />
      <Products />
      <Pgtvideo />
      <Region />
      <News />
      <Question />
      <Footer />
    </div>
  );
};

export default App;
