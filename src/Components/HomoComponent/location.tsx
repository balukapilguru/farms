import Image from "next/image";
import loc1 from "../../../public/assets/loc-1.png";
import loc from "../../../public/assets/loc.png";

const Location = () => {
  return (
    <section className="mt-10 ">
      <div>
        <h1 className="text-green uppercase text-3xl font-bold text-center">
          Location
        </h1>
        <p className="text-[#BC9D3D] text-center lg:text-lg ">
          Strategically located in Narayankhed, the high-growth corridor
        </p>
      </div>
      <div className="lg:flex mt-10 gap-5 mx-5">
        <div className="lg:w-1/2 md:flex md:justify-center ">
          <Image src={loc1} alt="loc" />
        </div>
        <div className="lg:w-1/2 md:flex md:justify-center md:mt-10 lg:mt-0 sm:mt-10">
          <Image
            src={loc}
            alt="loc"
            className="border border-green rounded-2xl"
          />
        </div>
      </div>

      <div className="bg-[url('/assets/moneyplant.png')] bg-cover  mt-10  bg-center ">
        <div className=" px-10 py-10 flex flex-col lg:items-start md:items-start justify-end h-[100%] sm:items-center">
          <h1 className="lg:text-4xl text-white font-bold uppercase sm:text-2xl md:text-2xl  ">
            Start your financial <br /> growth today!
          </h1>
          <button className="text-white font-bold text-xl bg-[#7ABF4E] px-4 py-3 rounded-full mt-5">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Location;
