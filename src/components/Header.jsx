import PGT from "../assets/PGT.svg";
import menu from "../assets/menu-logo.svg";
import Fon from "../assets/headerFon.png";

export function Header() {
  return (
    <>
      <img className="absolute -z-10 w-full h-[900px]" src={Fon} alt="" />
      <header>
        <div className="flex justify-between items-center mb-[32%] px-10 h-24 bg-[#EEEEEE33]">
          <img src={PGT} alt="" />
          <div className="flex font-medium text-light-gray gap-x-20">
            <a href="#">О компании</a>
            <a href="#">Услуги и продукты</a>
            <a href="#">Новости</a>
            <a href="#">Контакты</a>
          </div>
          <img src={menu} alt="" />
        </div>
        <div className="px-10 flex justify-between">
          <h1 className="text-[66px] text-pure-white font-medium w-210 leading-17 tracking-[-1.33px]">
            Мы экспортируем нефтепродукты туда,
            <br /> где другие только обещают.
          </h1>
          <div>
            <p className="w-108 text-pure-white tracking-[-0.36px]">
              Petrogas Trading — надёжный экспорт нефтепродуктов. Мы гарантируем
              бесперебойные поставки и индивидуальный подход к каждому клиенту.
              Свяжитесь с нами, чтобы получить расчёт стоимости и обсудить
              детали.
              <p className="mt-13 border w-47 p-3 rounded-3xl cursor-pointer">
                Оставить заявку
                <svg
                  className="inline ml-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8201 11.6723V1.17987M14.8201 1.17987H4.32766M14.8201 1.17987L1.17993 14.8201"
                    stroke="white"
                    stroke-width="1.07033"
                  />
                </svg>
              </p>
            </p>
          </div>
        </div>
        <hr className="text-[#FFFFFF4D] mt-8 w-360 mx-auto" />
        <div className="flex justify-between text-[18px] text-pure-white mt-5 px-10">
          <p>20 лет опыта. 1 млн тонн в год. Поставки без задержек.</p>
          <div className="flex gap-x-10">
            <p>petrogaztreiding@gmail.com</p>
            <p>Petrogas ©2025</p>
          </div>
        </div>
      </header>
    </>
  );
}
