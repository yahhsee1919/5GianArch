import { data } from "./utils/constants";
import { BreakPoints } from "./utils/BreakPoints";

const newData = data.slice(0, 3);

function PortfolioFeatures() {
  const windowSize = BreakPoints();
  const smScreen = windowSize.width >= 0;
  const mdScreen = windowSize.width >= 768;
  const lgScreen = windowSize.width >= 1020;

  return (
    <div className="mx-auto pb-10">
      <div className="flex flex-col items-center justify-center mx-auto w-full py-24 space-y-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4">
          {data.map((curr, i) => {
            return (
              <div className="relative overflow-hidden group" key={curr.key}>
                <div className="absolute top-0 bottom-0 right-0 left-0 z-10 bg-gradient-to-b from-transparent to-gray-800 "></div>

                <img
                  src={
                    lgScreen
                      ? curr.desktopImage
                      : mdScreen
                      ? curr.tabletImage
                      : smScreen
                      ? curr.mobileImage
                      : ""
                  }
                  alt=""
                  className="group-hover:scale-125 duration-500"
                />
                <div className="absolute bottom-[10%] z-20 left-[10%] text-white">
                  <p className=" text-xl font-bold md:text-2xl lg:text-lg">
                    {curr.name}
                  </p>
                  <p className="text-xs font-light text-gray-400   md:text-lg lg:text-sm">
                    {curr.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PortfolioFeatures;
