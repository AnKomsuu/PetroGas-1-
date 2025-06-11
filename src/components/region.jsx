import RegionImg from "../assets/region.png";
export function Region() {
  return (
    <>
      <h2 className="leading-[120%] font-medium text-dark-gray text-5xl ml-10 mb-10 mt-20 tracking-[-3px]">
        География поставок Petrogas
      </h2>
      <img className="w-full" src={RegionImg} alt="" />
    </>
  );
}
