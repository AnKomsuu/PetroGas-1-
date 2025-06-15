import News1 from "../assets/news1.png";
import News2 from "../assets/news2.png";
import News3 from "../assets/news3.png";
import News4 from "../assets/news4.png";
import News5 from "../assets/news5.png";
import NewsBtn from "../assets/newsBtn.svg";

export function News() {
  return (
    <>
      <section className="px-10">
        <h2 className="leading-[120%] font-medium text-dark-gray text-5xl mt-40 mb-10">
          Актуальные новости Petrogas
        </h2>
        <div className="flex flex-wrap justify-between gap-y-5">
          <div className="border p-2 border-[#0F004733] rounded-2xl w-82 flex flex-wrap h-84">
            <img className="h-41.75" src={News1} alt="" />
            <p className="text-black-gray text-lg font-medium w-77 mt-3 mb-5">
              Petrogas заключил стратегическое партнёрство в сфере поставок
              битума
            </p>
            <div className="flex justify-between w-77">
              <p>6 Jan 2025</p>
              <p>
                Read more <img src={NewsBtn} alt="" />
              </p>
            </div>
          </div>
          <div className="border p-2 border-[#0F004733] rounded-2xl w-82 flex flex-wrap h-84">
            <img className="h-41.75" src={News2} alt="" />
            <p className="text-black-gray text-lg font-medium w-75 mt-3 mb-5">
              Рост экспорта мазута в 2024 году: новые направления и объёмы
            </p>
            <div className="flex justify-between w-77">
              <p>6 Jan 2025</p>
              <p>
                Read more <img src={NewsBtn} alt="" />
              </p>
            </div>
          </div>
          <div className="w-82 h-84"></div>
          <div className="border p-2 border-[#0F004733] rounded-2xl w-82 flex flex-wrap h-84">
            <img className="h-41.75" src={News3} alt="" />
            <p className="text-black-gray text-lg font-medium w-75 mt-3 mb-5">
              Petrogas расширяет географию поставок в СНГ и за его пределами
            </p>
            <div className="flex justify-between w-77">
              <p>6 Jan 2025</p>
              <p>
                Read more <img src={NewsBtn} alt="" />
              </p>
            </div>
          </div>
          <div className="w-82 h-84"></div>
          <div className="border p-2 border-[#0F004733] rounded-2xl w-82 flex flex-wrap h-84">
            <img className="h-41.75" src={News4} alt="" />
            <p className="text-black-gray text-lg font-medium w-73 mt-3 mb-5">
              Объёмы хранения нефтепродуктов выросли на 35% в первом квартале
            </p>
            <div className="flex justify-between w-77">
              <p>6 Jan 2025</p>
              <p>
                Read more <img src={NewsBtn} alt="" />
              </p>
            </div>
          </div>
          <div className="border p-2 border-[#0F004733] rounded-2xl w-82 flex flex-wrap h-84">
            <img className="h-41.75" src={News5} alt="" />
            <p className="text-black-gray text-lg font-medium w-75 mt-3 mb-5">
              Контроль качества топлива: как Petrogas проверяет каждую партию
            </p>
            <div className="flex justify-between w-77">
              <p>6 Jan 2025</p>
              <p>
                Read more <img src={NewsBtn} alt="" />
              </p>
            </div>
          </div>
          <div className="w-82 h-84 border p-2 border-[#0F004733] flex flex-col justify-center items-center gap-y-3 rounded-2xl">
            <p className="text-black-gray font-medium">
              Смотреть все новости Petrogas
            </p>
            <p>
              <img src={NewsBtn} alt="" />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
