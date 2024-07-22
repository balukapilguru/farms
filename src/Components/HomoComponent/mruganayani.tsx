import Image from "next/image";
import mrugayan from "../.././../public/assets/mrugayan.png";
import icon1 from "../../../public/assets/m-ICON/Frame 16.png";
import icon2 from "../../../public/assets/m-ICON/Frame 17.png";
import icon3 from "../../../public/assets/m-ICON/Frame 18.png";
import icon4 from "../../../public/assets/m-ICON/Frame 19.png";
import icon5 from "../../../public/assets/m-ICON/Frame 20.png";

const Mruganayani = () => {
  return (
    <section className="mt-10 lg:rounded-full md:px-5 sm:rounded-lg md:rounded-lg shadow-2xl mx-w-75 md:p-10 mx-5">
      <div className=" lg:py-8 lg:flex items-center  ">
        <div className="lg:w-1/3 flex md:justify-center sm:justify-center">
        <Image src={mrugayan} alt="mrugayan" className="w-[300px]"  />


        </div>
        <div className="lg:w-2/3">
          <h1 className="text-green lg:text-4xl font-bold text-center md:text-2xl sm:text-xl">
            Whats Sets <span className="text-[#7ABF4E]">Mruganayani</span> Apart?
          </h1>
          <p className="text-center text-[#BC9D3D] mt-3">
            Unparalleled access to farmland investments with
          </p>
          <div className="flex flex-wrap justify-around mt-8 gap-[20px]">
            <div className="flex flex-col items-center">
              <Image src={icon1} alt="icon1" />
              <p className="text-black text-sm mt-3">100% Clear Time</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={icon2} alt="icon1" />
              <p className="text-black text-sm mt-3">Patta Passbook</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={icon3} alt="icon1" />
              <p className="text-black text-sm mt-3">Encroachment-Free</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={icon4} alt="icon1" />
              <p className="text-black text-sm mt-3">TS Rythu Bharosa</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={icon5} alt="icon1" />
              <p className="text-black text-sm mt-3">
                50 kg Farm Produce Annually
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mruganayani;
