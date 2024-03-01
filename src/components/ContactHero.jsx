import { BreakPoints } from "./utils/BreakPoints";

function ContactHero() {
  const windowSize = BreakPoints();
  const smScreen = windowSize.width >= 0;
  const mdScreen = windowSize.width >= 768;
  const lgScreen = windowSize.width >= 1020;
  return (
    <div className="w-full relative lg:max-w-[71rem] mx-auto overflowX-hidden mb-44">
      <img
        src={
          lgScreen
            ? "contact/desktop/image-hero.jpg"
            : mdScreen
            ? "contact/tablet/image-hero.jpg"
            : smScreen
            ? "contact/mobile/image-hero.jpg"
            : ""
        }
        alt=""
        className="mx-auto relative lg:w-[45rem] lg:mx-0 "
      />
      <div className="absolute top-24 left-0 z-0 flex flex-col  justify-center py-8 px-4 space-y-6 bg-white max-w-[20rem] md:max-w-[38rem] md:left-[38%] md:top-[45%] md:py-24 md:px-12 lg:py-44 lg:px-24 lg:max-w-[40rem] lg:space-y-12 lg:left-[43%]">
        <h1 className="text-3xl font-bold md:max-w-[20rem] md:text-5xl lg:text-7xl lg:max-w-[30rem]">
          Tell us about your project
        </h1>
        <p className="max-w-[20rem] md:text-lg lg:text-2xl lg:max-w-[30rem]">
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </p>
      </div>
      <div className="absolute top-[33%] left-[40%] z-10 lg:top-[30%] lg:left-[40%]">
        <h1 className="hidden md:block text-[8rem] font-extrabold text-white lg:text-[12rem]">
          Contact
        </h1>
      </div>
    </div>
  );
}
export default ContactHero;
