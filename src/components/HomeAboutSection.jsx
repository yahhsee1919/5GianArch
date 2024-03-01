function HomeAboutSection({ lgScreen }) {
  return (
    <div className="relative my-26 py-44 mx-auto max-w-lg">
      <div className="flex flex-col items-start justify-center  px-8 space-y-12 text-left md:px-0">
        <div className="w-24 border-b-2 mb-16 border-veryDarkBlue lg:hidden"></div>
        <h1 className="text-5xl font-extrabold max-w-[60%] md:text-6xl md:max-w-[80%]">
          Welcome to Arch Studio
        </h1>
        <div className="flex flex-col space-y-6 text-sm  md:text-md lg:max-w-sm lg:text-lg">
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
      </div>

      <>
        <div
          className={
            lgScreen ? "absolute top-[20%] -right-[58%] z-0" : "hidden"
          }
        >
          <img src="/home/desktop/image-welcome.jpg" alt="" />
        </div>
        <div
          className={lgScreen ? "absolute top-0  -right-[22%] z-10" : "hidden"}
        >
          <h1 className="font-extrabold text-veryLightGrey text-[14rem]">
            Welcome
          </h1>
        </div>
      </>
    </div>
  );
}

export default HomeAboutSection;
