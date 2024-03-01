function ContactContactDetails() {
  return (
    <div className="flex flex-col w-full  justify-between space-y-16 pt-24 pb-12 px-4 mx-auto md:max-w-2xl lg:max-w-5xl lg:flex-row lg:space-y-0 lg:justify-around lg:space-x-20 lg:pt-60 lg:pb-24">
      <h1 className="text-5xl font-extrabold max-w-[10%] text-veryDarkBlue md:text-6xl ">
        Contact Details
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mx-0">
        {/* contect 1 */}
        <div className="flex flex-col space-y-4 items-start justify-center md:flex-row md:justify-between md:space-y-16 lg:flex-col lg:space-y-4">
          <div className="flex flex-col space-y-4 items-start justify-center">
            <p className="text-lg  font-semibold text-gray-500">Main Office</p>
            <div className="flex flex-col space-2 text-gray-400">
              <p>Mail: archone@gmail.com</p>
              <p>Address: 1892 Chenoweth Drive TN</p>
              <p>Phone: 123-456-3451</p>
            </div>
          </div>
          <div className="flex space-x-4 px-4 py-4 hover:scale-110 duration-300">
            <p className="text-lg font-bold">View on Map</p>
            <img
              src="../../public/icons/icon-arrow.svg"
              alt=""
              className="h-6"
            />
          </div>
        </div>
        {/* contect 1 */}
        <div className="flex flex-col space-y-4 items-start justify-center md:flex-row md:justify-between md:space-y-16 lg:flex-col lg:space-y-4">
          <div className="flex flex-col space-y-4 items-start justify-center">
            <p className="text-lg  font-semibold text-gray-500">Main Office</p>
            <div className="flex flex-col space-2 text-gray-400">
              <p>Mail: archone@gmail.com</p>
              <p>Address: 1892 Chenoweth Drive TN</p>
              <p>Phone: 123-456-3451</p>
            </div>
          </div>
          <div className="flex space-x-4 px-4 py-4 hover:scale-110 duration-300">
            <p className="text-lg font-bold">View on Map</p>
            <img
              src="../../public/icons/icon-arrow.svg"
              alt=""
              className="h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContactDetails;
