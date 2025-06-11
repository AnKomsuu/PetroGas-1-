import PGT from "../assets/PGT.svg";

export function Pgtvideo() {
  return (
    <>
      <section className="bg-[url(assets/videoFon.png)] bg-cover h-191.25">
        <div className="px-10 py-20">
          <img src={PGT} alt="" />
          <svg
            className="mx-[48%] mt-[230px] cursor-pointer"
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33 0C50.9493 0 65.5 14.5507 65.5 32.5C65.5 50.4493 50.9493 65 33 65C15.0507 65 0.5 50.4493 0.5 32.5C0.5 14.5507 15.0507 0 33 0ZM25.4424 42.3262L43.8652 32.5L25.4424 22.6748V42.3262Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
