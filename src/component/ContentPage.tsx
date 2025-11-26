import { myData } from "../data/data";
import { lineData } from "../data/line";
import { Cards } from "./Cards";
import { Line } from "./Line";
import MyPie from "./Pie";

export function ContentPage() {
  return (
    <>
      <Cards />
      <div className="flex">
        <div className="w-1/2 h-[400px]">
          <Line data={lineData} />
        </div>
        <div className="w-1/2 h-[400px]">
          <MyPie data={myData} />
        </div>
      </div>
    </>
  );
}
