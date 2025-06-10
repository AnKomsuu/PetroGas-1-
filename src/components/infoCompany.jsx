import Factory from "../assets/factory.png";
import FactoryWorkers from "../assets/factoryWorkers.png";
export function InfoCompany() {
  return (
    <>
      <section className="px-10 mb-5">
        <div className="py-20 flex justify-between">
          <div className="w-135 flex flex-col justify-around">
            <h2 className="leading-[120%] font-medium text-5xl text-dark-gray tracking-[-3px]">
              О компании Petrogas Trading
            </h2>
            <p className="text-[20px] leading-[120%] tracking-[-2%] text-dark-gray">
              Petrogas Trading — поставщик нефтепродуктов с 20-летним опытом.
              Работаем напрямую с заводами России, Узбекистана и Кыргызстана.
              Входим в TOP-5 налогоплательщиков отрасли КР. Не работаем с
              Газпромом. Все поставки — прозрачны, с документами и гарантией.
            </p>
            <button className="text-pure-white bg-dark-gray cursor-pointer w-53.75 h-12 rounded-[100px]">
              Запросить расчёт
            </button>
          </div>
          <img src={Factory} alt="" />
          <img className="h-82 mt-50" src={FactoryWorkers} alt="" />
        </div>
        <div className="flex justify-between mb-10">
          <h2 className="leading-[120%] text-dark-gray font-medium text-5xl tracking-[-3px] w-130">
            Что мы делаем для наших клиентов
          </h2>
          <p className="text-[18px] tracking-[-0.36px] w-105 text-dark-gray">
            Petrogas — это поставки под ключ. <br /> Ни посредников, ни
            задержек. Только нефть, логистика и контроль — как вы ожидали.
          </p>
        </div>
        <hr className="text-[#CCCCCC]" />
        <div className="flex justify-between pb-5 text-verydark-gray">
          <p>01</p>
          <p>Экспорт нефтепродуктов</p>
          <p className="w-125">
            Битум, дизель, мазут, нефтяной кокс. Поставляем продукцию по ГОСТам
            напрямую с заводов. Экспортируем в Казахстан, Грузию, Узбекистан и
            другие регионы СНГ.
          </p>
        </div>
        <hr className="text-[#CCCCCC]" />
        <div className="flex justify-between pb-5 text-verydark-gray">
          <p>02</p>
          <p className="w-50">Транспортировка и логистика</p>
          <p className="w-125">
            Железнодорожные и автоперевозки. Организуем доставку от 50 тонн по
            зафиксированному графику. Контролируем маршрут, объёмы и выгрузку.
            Гарантируем соблюдение условий на каждом этапе.
          </p>
        </div>
        <hr className="text-[#CCCCCC]" />
        <div className="flex justify-between pb-5 text-verydark-gray">
          <p>03</p>
          <p className="w-50">Документы и сопровождение</p>
          <p className="w-125">
            Контрактное и юридическое оформление Мы берём на себя оформление
            всех сопроводительных документов: контракты, инвойсы, акты,
            сертификаты. Обеспечиваем прозрачность сделки и защиту сторон.
          </p>
        </div>
        <hr className="text-[#CCCCCC]" />
        <div className="flex justify-between pb-5 text-verydark-gray">
          <p>04</p>
          <p>Персональные условия</p>
          <p className="w-125">
            Гибкие подходы под каждого клиента Согласуем цену, график, формат
            поставки, способ оплаты и приоритетные объёмы. Не работаем по
            шаблонам — подстраиваемся под реальные бизнес-задачи.
          </p>
        </div>
      </section>
    </>
  );
}
