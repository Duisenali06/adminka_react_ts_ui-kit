import logo from "../images/Subtract.svg";

export function Logo() {
  return (
    <>
      <div className="flex justify-center items-center gap-x-4 pt-12 pb-9 text-white">
        <img src={logo} alt="" />
        <h2 className="text-2xl" >Base</h2>
      </div>
    </>
  );
}
