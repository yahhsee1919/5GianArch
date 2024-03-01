function AboutHeritage() {
  return (
    <div className="flex w-full justify-between py-32 px-4 mx-auto max-w-lg lg:max-w-[71rem] ">
      <div className="flex flex-col items-start justify-center px-8 space-y-12 text-left md:px-0">
        <div className="w-24 border-b-2 mb-16 border-veryDarkBlue lg:hidden"></div>
        <h1 className="text-5xl font-extrabold max-w-[60%] md:text-6xl md:max-w-[80%]">
          Out Heritage
        </h1>
        <div className="flex flex-col space-y-6 text-sm md:text-md lg:max-w-sm lg:text-lg">
          <p>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country
          </p>
          <p>
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p>
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
      </div>
      <div>
        <img
          src="/public/about/desktop/image-heritage.jpg"
          alt=""
          className="hidden lg:block"
        />
      </div>
    </div>
  );
}

export default AboutHeritage;
