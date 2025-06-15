import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Product5 from "../assets/product5.png";
import Product6 from "../assets/product6.png";
import Product7 from "../assets/product7.png";
import Product8 from "../assets/product8.png";
import ProductBtn from "../assets/productBtn.svg";

export function Products() {
  const filterButtonsData = [
    { id: 1, text: "Тип продукта" },
    { id: 2, text: "Происхождение" },
    { id: 3, text: "Способ поставки" },
    { id: 4, text: "Объём поставки" },
    { id: 5, text: "Тип ГОСТа / маркировка" },
  ];

  const productsText = {
    typeBold1: "Тип:",
    typeText1: "М-100",
    typeBold2: "Происхождение:",
    typeText2: "Россия / Узбекистан / Кыргызстан",
    typeBold3: "Поставка:",
    typeText3: "от 50 тонн, авто и жд транспортировка",
  };

  const products = [
    {
      id: 1,
      image: Product1,
      title: "Bitumen (Битум дорожный)",
    },
    {
      id: 2,
      image: Product2,
      title: "Mazut M-100",
      titleSmall: "(Мазут топочный)",
    },
    {
      id: 3,
      image: Product3,
      title: "Diesel Fuel ",
      titleSmall: "(Дизельное топливо)",
    },
    {
      id: 4,
      image: Product4,
      title: "Crude Oil ",
      titleSmall: "(Нефть сырая)",
    },
    {
      id: 5,
      image: Product5,
      title: "LPG ",
      titleSmall: "(Сжиженный газ — пропан/бутан)",
    },
    {
      id: 6,
      image: Product6,
      title: "Jet Fuel ",
      titleSmall: "(Реактивное топливо ТС-1)",
    },
    {
      id: 7,
      image: Product7,
      title: "Technical Sulfur ",
      titleSmall: "(Сера техническая)",
    },
    {
      id: 8,
      image: Product8,
      title: "Petroleum Residue",
      titleSmall: "(Гудрон)",
    },
  ];

  return (
    <>
      <section className="px-10 mb-25">
        <h2 className="leading-[120%] font-medium mb-6 text-5xl text-dark-gray tracking-[-3px]">
          Услуги и Продукты
        </h2>
        <div className="flex gap-x-3 items-center mb-10">
          {filterButtonsData.map((filter) => (
            <div
              key={filter.id}
              className="flex gap-x-4 items-center border border-[#0F004733] px-3 py-2 rounded-4xl"
            >
              <p>{filter.text}</p>

              <img className="cursor-pointer" src={ProductBtn} alt="" />
            </div>
          ))}

          <p className="ml-20 text-[#0F0F0F80] text-[18px]">
            Показано {products.length} of 32 результата
          </p>
        </div>
        <div className="flex gap-x-8 gap-y-3 flex-wrap">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-2 h-112 border border-[#0F004733] rounded-[5px]"
            >
              <img
                className="rounded-lg"
                src={product.image}
                alt={product.title}
              />
              <p className="text-black-gray w-79 text-lg font-medium my-4 uppercase">
                {product.title}{" "}
                <span className="text-base">
                  {product.id === 8 && <br />}
                  {product.titleSmall}
                </span>
              </p>
              <p className="text-gray-black text-xs">
                <span className="font-medium">{productsText.typeBold1}</span>{" "}
                {productsText.typeText1}
              </p>
              <p className="text-gray-black text-xs">
                <span className="font-medium">{productsText.typeBold2}</span>{" "}
                {productsText.typeText2}
              </p>
              <p className="text-gray-black text-xs">
                <span className="font-medium">{productsText.typeBold3}</span>{" "}
                {productsText.typeText3}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
