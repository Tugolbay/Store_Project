import { StoreAdress } from "./component/main/storeAdress/StoreAdress";
import { HeaderCart } from "./component/main/headerCart/HeaderCart";
import { NewsPage } from "./component/main/news/NewsPage";
import Header from "./component/header/Header";
import { DiscountProduct } from "./component/main/discountProduct/DiscountProduct";
import { Сategories } from "./component/main/categories/Сategories";
import { SaleCart } from "./component/main/saleCart/SaleCart";
import { Footer } from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderCart />
      <Сategories />
      <SaleCart />
      <NewsPage />
      <DiscountProduct />
      <StoreAdress />
      <Footer />
    </div>
  );
}

export default App;
