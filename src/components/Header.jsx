import PGT from "../assets/PGT.svg";

export function Header() {
  const headerLi = ["О компании", "Услуги и продукты", "Новости", "Контакты"];

  return (
    <header className="relative w-full h-dvh bg-[url(./assets/headerFon.png)] bg-cover bg-center flex flex-col">
      <div className="flex justify-between items-center px-10 py-2 bg-[#EEEEEE33]">
        <img className="w-auto " src={PGT} alt="Логотип Petrogas Trading" />
        <div className="flex font-medium text-light-gray gap-x-8">
          {headerLi.map((item) => (
            <a href="#">{item}</a>
          ))}
        </div>
        <svg
          className="cursor-pointer w-8 h-8"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9577 39.202C30.5858 39.202 39.2016 30.5862 39.2016 19.9581C39.2016 9.33005 30.5858 0.714285 19.9577 0.714285C9.32964 0.714285 0.713867 9.33005 0.713867 19.9581C0.713867 30.5862 9.32964 39.202 19.9577 39.202Z"
            stroke="white"
            strokeWidth="1.42857"
          />
          <path
            d="M10.9824 16.9643H28.9447"
            stroke="white"
            strokeWidth="1.42857"
            strokeLinecap="round"
          />
          <path
            d="M10.9824 22.9513H28.9447"
            stroke="white"
            strokeWidth="1.42857"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex-grow flex items-center mt-85 px-10">
        <div className="flex justify-between w-full">
          <h1 className="text-[65px] text text-pure-white font-medium w-210 leading-17 tracking-[-1.33px]">
            Мы экспортируем нефтепродукты туда,
            <br /> где другие только обещают.
          </h1>
          <div className="w-108 text-pure-white tracking-[-0.36px]">
            <p>
              Petrogas Trading — надёжный экспорт нефтепродуктов. Мы гарантируем
              бесперебойные поставки и индивидуальный подход к каждому клиенту.
              Свяжитесь с нами, чтобы получить расчёт стоимости и обсудить
              детали.
            </p>
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
                  strokeWidth="1.07033"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-lg text-pure-white mt-5 px-10 py-4 border-t border-[#FFFFFF4D]">
        <p>20 лет опыта. 1 млн тонн в год. Поставки без задержек.</p>
        <div className="flex gap-x-10 cursor-pointer">
          <p>petrogaztreiding@gmail.com</p>
          <p>Petrogas ©2025</p>
        </div>
      </div>
    </header>
  );
}
