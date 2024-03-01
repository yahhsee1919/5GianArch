import { leaders } from "./utils/constants";

console.log(leaders);

function AboutLeaders() {
  return (
    <div className="flex flex-col w-full justify-between space-y-16  my-26 py-44 px-8 mx-auto max-w-lg lg:max-w-[71rem] lg:flex-row lg:space-y-0">
      <h1 className="text-5xl font-extrabold max-w-[10%] text-veryDarkBlue md:text-6xl ">
        The Leaders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto lg:mx-0">
        {leaders.map((curr, i) => {
          return (
            <div key={i} className="flex flex-col space-y-4 ">
              <div className="overflow-hidden">
                <img
                  src={curr.image}
                  alt={curr.name}
                  className="hover:scale-110 duration-300"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <h1 className="text-lg font-bold text-veryDarkBlue ">
                  {curr.name}
                </h1>
                <p className="text-sm">{curr.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutLeaders;
