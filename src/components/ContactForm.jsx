import { BsArrowRight } from "react-icons/bs";

function ContactForm() {
  return (
    <div className="flex flex-col space-y-4 pb-36 px-2 py-12 max-w-xs mx-auto md:max-w-xl md:space-y-10 md:pb-60 lg:flex-row lg:max-w-4xl lg:space-y-0 lg:space-x-24">
      <h1 className=" max-w-[10rem] text-4xl font-extrabold  text-veryDarkBlue md:text-7xl md:max-w-[40rem] lg:text-5xl lg:max-w-[10rem]">
        Connect with us
      </h1>
      {/* Forms */}
      <div className="flex flex-col space-y-4 relative lg:w-full">
        {/* first form */}
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b border-black py-4 px-8 text-xl"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-b border-black py-4 px-8 text-xl"
        />
        <textarea
          type="text"
          placeholder="Message"
          className="w-full border-b border-black py-4 px-8 text-xl"
        />
        <div className="absolute -bottom-14 right-0">
          <div className="w-14 h-14 bg-veryDarkBlue flex items-center justify-center">
            <BsArrowRight fill="white" size={24} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
