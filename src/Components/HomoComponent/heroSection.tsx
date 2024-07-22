import Image from "next/image";
import gif from "../../../public/assets/form_bg.gif";
const HeroSection = () => {
  return (
    <section className="relative h-auto  bg-cover bg-center rounded-3xl lg:flex align-items-center mx-5 bg-[url('/assets/LP-image.png')]">
      <div className="lg:w-1/2 lg:px-12 flex items-end sm:justify-center md:justify-center sm:w-full ">
        <h1 className="  text-white font-bold  px-5 lg:text-2xl xl:text-3xl text:5xl uppercase tracking-wider md:text-3xl sm:text-xl py-8">
          Venture into the land <br />
          of limitless possibilities!
        </h1>
      </div>
      <div className="lg:w-1/2 flex lg:justify-end md:items-end  relative  lg:m-10 sm:justify-center">
        <div className="bg-lightgolden  rounded-2xl max-w-[400px] sm:my-5">
          <div className="px-8 py-8">
            <p className="text-center">
              If you are looking to buy farmland in Hyderabad,
            </p>
            <p className="text-center font-bold">now is a great time !</p>
            <p className="uppercase text-center font-bold text-lg mt-5">
              contact us
            </p>
          </div>

          <form action="" className="mt-1 flex flex-col items-center px-8">
            <input
              type="text"
              className="bg-lightgolden border-b   py-1  focus:outline-none w-full mt-2"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="bg-lightgolden border-b   py-1  focus:outline-none w-full mt-8"
              placeholder="Contact Number"
            />
            <input
              type="text"
              className="bg-lightgolden border-b   py-1  focus:outline-none w-full mt-8"
              placeholder="E-mail ID"
            />
            <button className="bg-darkgreen text-white w-full py-1 mt-8">
              Submit
            </button>
          </form>
          <Image src={gif} alt="gif" className="w-full   rounded-2xl mt-8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
