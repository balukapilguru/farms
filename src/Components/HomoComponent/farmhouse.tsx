import Image from "next/image";
import farm from "../../../public/assets/farm.png";
import left from "../../../public/assets/veins-left.png";
import right from "../../../public/assets/veins-right.png";
import infograph from "../../../public/assets/infograph.png";
import tab from "../../../public/assets/mob.png";
import mob from "../../../public/assets/mob-info.png";
import mobleafleft from "../../../public/assets/mob-veins-left.png"
import mobleafright from "../../../public/assets/mob-veins-right.png"

const Farmhouse = () => {
  return (
    <>
      <section className="bg-[url('/assets/farm.png')] bg-cover  flex items-center lg:px-10 py-10 mt-10">
        <div className=" lg:flex rounded-3xl  align-items-center bg-white sm:px-2 sm:py-2  lg:px-10 lg:py-10 gap-10">
          <div className="lg:w-1/2 flex items-center  ">
            <Image src={farm} alt="farm" className="rounded-3xl " />
          </div>
          <div className="lg:w-1/2 md:mt-10  md:px-5 md:pb-5">
            <h1 className="lg:text-4xl text-green font-bold tracking-wider md:text-3xl sm:text-xl sm:mt-10 sm:text-center md:text-center lg:text-start">
              Invest in the <span className="text-[#7ABF4E]">100 acres</span> of{" "}
              <br /> pure bliss at Kapil Farms
            </h1>
            <p className="text-[#BC9D3D] lg:text-lg tracking-wide mt-2 sm:text-center md:text-center lg:text-start">
              Start investing early for a bright financial future!
            </p>

            <p className="mt-8 lg:text-lg text-[#7D7D7D] text-justify tracking-wide">
              Narayankhed, Hyderabad, is a high-growth corridor known for its
              fertile soil and strong agricultural prospects. As a stable and
              secure investment, farmland here offers significant appreciation
              potential due to increasing demand for both agricultural and
              residential development. Make the wise decision to secure high
              returns on investment with Narayankhed’s promising land
              opportunities.
            </p>
            <p className="mt-5  text-[#7D7D7D] text-justify tracking-wide lg:text-lg">
              The earlier you begin investing, the more time you have to see
              your gains grow, build wealth, and secure a financial future. If
              you re searching for the ideal investment opportunity, look no
              further—invest in Mruganayani, an expansive 50-acre oasis of
              untouched beauty. Secure your investment today and pave the way
              for a prosperous tomorrow!
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center overflow-hidden">
        <Image
          src={left}
          alt="leaf"
          className="absolute -left-10 lg:w-40  md:w-32  lg:block sm:hidden md:hidden  "
        />
        <Image
          src={mobleafleft}
          alt="leaf"
          className="absolute -left-5 lg:w-32  md:w-32  lg:hidden sm:hidden md:block  "
        />


        <Image
          src={right}
          alt="leaf"
          className="absolute -right-10 lg:w-40  lg:block md:hidden sm:hidden"
        />
         <Image
          src={mobleafright}
          alt="leaf"
          className="absolute -right-5 lg:w-32  md:w-32  lg:hidden sm:hidden md:block   "
        />
        <h1 className="text-green font-bold lg:text-4xl my-10 text-center md:text-2xl sm:text-xl">
          Why Choose Mruganayani by Kapil Farms?
        </h1>
        <Image
          src={infograph}
          alt="why"
          className=" m-5 md:w-4/5  sm:w-full lg:block md:hidden sm:hidden"
        />
        <Image
          src={tab}
          alt="why"
          className=" m-5 md:w-4/5  sm:w-full lg:hidden sm:hidden md:block"
        />
        <Image
          src={mob}
          alt="why"
          className=" m-5 md:w-4/5  sm:w-full lg:hidden sm:block md:hidden"
        />
      </section>
    </>
  );
};

export default Farmhouse;
