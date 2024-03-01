import Buttons from "./Buttons";

function HomeToAbout() {
  return (
    <div className="flex  relative items-center justify-center mx-auto">
      <div className="relative">
        <img
          className="block md:hidden"
          src="home/mobile/image-small-team.jpg"
          alt=""
        />
        <img
          className="hidden md:block lg:hidden"
          src="home/tablet/image-small-team.jpg"
          alt=""
        />
        <img
          className="hidden lg:block"
          src="home/desktop/image-small-team.jpg"
          alt=""
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 z-0 bg-gradient-to-b from-transparent to-gray-800"></div>
      </div>
      <div className="absolute top-12 ">
        <div className="flex flex-col relative items-start z-10  justify-center space-y-6  py-24  text-white">
          <div className="flex-flex-col space-y-4">
            <h1 className="text-6xl font-bold max-w-xs md:text-7xl md:tracking-wider lg:max-w-lg">
              Small team, big ideas
            </h1>
          </div>
          <div className="text-lg font-bold">
            <Buttons data="/about">About Us</Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeToAbout;
