import QuestionImg from "../assets/questionImg.png";

export function Question() {
  return (
    <>
      <section className="px-10 my-30 flex justify-between items-center">
        <div className="w-142.25 flex flex-col gap-y-4">
          <h2 className="font-semibold text-[44px]">
            Мы готовы ответить на ваши вопросы
          </h2>
          <input
            className="font-medium text-xl text-verydark-gray border-b w-full p-3"
            placeholder="Имя"
            type="text"
          />
          <input
            className="font-medium text-xl text-verydark-gray border-b w-full p-3"
            placeholder="Телефон"
            type="tel"
            pattern="\+?[0-9]{10,15}"
          />
          <textarea
            className="w-full h-29.5 resize-none font-medium text-xl text-verydark-gray border-b p-3"
            placeholder="Ваше сообщение"
          ></textarea>
          <p className="font-medium my-4 text-verydark-gray">
            Я согласен с Политикой конфиденциальности
          </p>
          <button className="bg-black w-38.25 h-10.75 text-pure-white font-medium rounded-3xl cursor-pointer">
            Отправить
          </button>
        </div>
        <img src={QuestionImg} alt="" />
      </section>
    </>
  );
}
