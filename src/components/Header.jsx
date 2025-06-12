import PGT from "../assets/PGT.svg";
import Fon from "../assets/headerFon.png";

export function Header() {
  return (
    <>
      <img
        className="max-w-fit absolute -z-10 h-225 2.5xl:hidden 3xl:hidden 4xl:hidden  "
        src={Fon}
        alt=""
      />
      <header className="w-360 2.5xl:w-full 2.5xl:bg-[url(./assets/headerFon.png)] 2.5xl:bg-cover 2.5xl:h-258 3xl:w-full 3xl:bg-[url(./assets/headerFon.png)] 3xl:bg-cover 3xl:h-365  4xl:w-full 4xl:bg-[url(./assets/headerFon.png)] 4xl:bg-cover 4xl:h-400">
        <div className="flex justify-between items-center mb-[33%] px-10 h-21 bg-[#EEEEEE33] 2.5xl:px-15 2.5xl:mb-[29%] 2.5xl:h-25 3xl:px-25 3xl:h-35 4xl:px-30 4xl:h-40">
          <img
            className="3xl:text-3xl 3xl:w-50 3xl:h-50 4xl:text-3xl 4xl:w-50 4xl:h-50"
            src={PGT}
            alt=""
          />
          <div className="flex font-medium text-light-gray gap-x-20 2.5xl:text-2xl 2.5xl:gap-x-20 3xl:text-3xl 3xl:gap-x-30 4xl:text-3xl 4xl:gap-x-40">
            <a href="#">О компании</a>
            <a href="#">Услуги и продукты</a>
            <a href="#">Новости</a>
            <a href="#">Контакты</a>
          </div>
          <svg
            className="cursor-pointer 3xl:w-20 3xl:h-20 4xl:w-20 4xl:h-20"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9577 39.202C30.5858 39.202 39.2016 30.5862 39.2016 19.9581C39.2016 9.33005 30.5858 0.714285 19.9577 0.714285C9.32964 0.714285 0.713867 9.33005 0.713867 19.9581C0.713867 30.5862 9.32964 39.202 19.9577 39.202Z"
              stroke="white"
              stroke-width="1.42857"
            />
            <path
              d="M10.9824 16.9643H28.9447"
              stroke="white"
              stroke-width="1.42857"
              stroke-linecap="round"
            />
            <path
              d="M10.9824 22.9513H28.9447"
              stroke="white"
              stroke-width="1.42857"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="px-10 flex justify-between 2.5xl:px-15 3xl:px-25 4xl:px-30">
          <h1 className="text-[66px] text-pure-white font-medium w-210 leading-17 tracking-[-1.33px] 2.5xl:text-7xl 2.5xl:w-230 2.5xl:leading-20 2.5xl:tracking-normal 3xl:text-8xl 3xl:w-317 3xl:leading-27 3xl:tracking-normal 4xl:text-[100px] 4xl:w-330 4xl:leading-30 4xl:tracking-normal">
            Мы экспортируем нефтепродукты туда,
            <br /> где другие только обещают.
          </h1>
          <div>
            <p className="w-108 text-pure-white tracking-[-0.36px] 2.5xl:tracking-normal 2.5xl:w-135 2.5xl:text-xl 2.5xl:leading-7 3xl:tracking-normal 3xl:w-160 3xl:text-2xl 3xl:leading-10 4xl:tracking-normal 4xl:w-195 4xl:text-3xl 4xl:leading-12">
              Petrogas Trading — надёжный экспорт нефтепродуктов. Мы гарантируем
              бесперебойные поставки и индивидуальный подход к каждому клиенту.
              Свяжитесь с нами, чтобы получить расчёт стоимости и обсудить
              детали.
              <p className="mt-13 border w-47 p-3 rounded-3xl cursor-pointer 2.5xl:w-60 2.5xl:rounded-[40px] 2.5xl:px-4 3xl:w-70 3xl:rounded-[40px] 3xl:px-6 4xl:w-85 4xl:rounded-[40px] 4xl:px-6">
                Оставить заявку
                <svg
                  className="inline ml-4 2.5xl:w-5 2.5xl:h-5 3xl:w-6 3xl:h-6 4xl:w-9 4xl:h-9"
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
        <hr className="text-[#FFFFFF4D] mt-8 w-360 2.5xl:w-0 3xl:w-0 4xl:w-0" />
        <div className="flex justify-between text-lg text-pure-white mt-5 px-10 2.5xl:px-15 2.5xl:text-2xl 2.5xl:border-t 2.5xl:items-center 2.5xl:mt-8 2.5xl:h-20 3xl:px-30 3xl:text-3xl 3xl:border-t 3xl:items-center 3xl:mt-[70px] 3xl:h-30 4xl:px-30 4xl:text-3xl 4xl:border-t 4xl:items-center 4xl:mt-[70px] 4xl:h-30">
          <p>20 лет опыта. 1 млн тонн в год. Поставки без задержек.</p>
          <div className="flex gap-x-10 4xl:gap-x-45">
            <p>petrogaztreiding@gmail.com</p>
            <p>Petrogas ©2025</p>
          </div>
        </div>
      </header>
    </>
  );
}
