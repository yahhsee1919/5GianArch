import { BreakPoints } from "./utils/BreakPoints";

function ContactMap() {
  const windowSize = BreakPoints();
  const smScreen = windowSize.width >= 0;
  const mdScreen = windowSize.width >= 768;
  const lgScreen = windowSize.width >= 1020;
  return (
    <div className=" pt-2 pb-24 px-2  mx-auto md:max-w-2xl  lg:max-w-4xl   overflow-hidden  ">
      <img
        src={
          lgScreen
            ? "contact/desktop/image-map.png"
            : mdScreen
            ? "contact/tablet/image-map.png"
            : smScreen
            ? "contact/mobile/image-map.png"
            : ""
        }
        alt=""
        className="scale-90 md:scale-100 w-full"
      />
    </div>
  );
}

export default ContactMap;
