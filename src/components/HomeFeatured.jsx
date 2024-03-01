import { Link } from "react-router-dom";
import { data } from "./utils/constants";
import ButtonLg from "./ButtonLg";
import { BreakPoints } from "./utils/BreakPoints";
import Buttons from "./Buttons";

const newData = data.slice(0, 3);

function HomeFeature() {
  const windowSize = BreakPoints();
  const smScreen = windowSize.width >= 0;
  const mdScreen = windowSize.width >= 768;
  const lgScreen = windowSize.width >= 1020;

  return (
    <div className="mx-auto  pb-10">
      <div className="flex flex-col items-center justify-center mx-auto w-full py-24 space-y-12 ">
        <div className="flex w-full items-center justify-between px-8 md:max-w-[40rem] lg:max-w-[68rem] mx-auto">
          <h1 className="text-3xl font-bold  md:text-5xl">Featured</h1>
          <div className="hidden md:block text-white">
            <Buttons data="/portfolio">See All</Buttons>
          </div>
        </div>
        <div className="flex flex-col mx-auto space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4">
          {newData.map((curr, i) => {
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
                  <Link
                    to="/portfolio"
                    className="text-xs font-light text-gray-400 hover:border-b-[1px] hover:text-white hover:border-white hover:scale-150 group-duration-500 md:text-lg lg:text-sm"
                  >
                    View All Projects
                  </Link>
                </div>
                <div
                  className={
                    mdScreen
                      ? "absolute -top-6 right-2 z-30 lg:-top-2"
                      : "hidden"
                  }
                >
                  <p className="text-[12rem] font-bold text-white text-opacity-30 lg:text-[5.5rem]">
                    {i + 1}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {mdScreen ? "" : <ButtonLg>See All</ButtonLg>}
      </div>
    </div>
  );
}
export default HomeFeature;
