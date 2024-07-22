import footer from "../../public/assets/footer.png";
import Image from "next/image";
import footerlogo from "../../public/assets/logo/white.png";
import Link from "next/link";
import fb from "./../../public/assets/icons/fb.png";
import insta from "./../../public/assets/icons/insta.png";
import ln from "./../../public/assets/icons/ln.png";
import Qr from "./../../public/assets/QRcode.png";
const Footer = () => {
  return (
    <footer className=" text-zinc-400 ">
      <Image src={footer} alt="footerimg" />
      <section className="bg-[#0C352C]  px-10 py-5">
        <div className="lg:flex ">
          <div className="lg:w-1/2 sm:flex sm:flex-col sm:items-center lg:block md:block">
            <Image src={footerlogo} alt="logo" />
            <p className="text-white  mt-3 sm:text-center lg:text-justify md:text-left"> 
              Kapil Farms presents an exceptional opportunity to experience<br/>
              tranquility away from the fast-paced urban environment.
            </p>
          </div>
          <div className="lg:w-1/2 flex  flex-col md:items-start sm:items-center sm:mt-5 lg:items-end">
            <button className="bg-white text-green px-2 py-2 font-bold rounded-full">
              Subscribe Now
            </button>
            <p className="text-white mt-2 sm:text-center">
              Don’t miss our future updates. Subscribe right away.
            </p>
            <ul className="flex gap-5 mt-2">
              <li>
                <Link href="#">
                  <Image src={fb} alt="fb" className="w-10" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={insta} alt="insta" className="w-10"/>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={ln} alt="ln" className="w-10"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:flex mt-5">
          <div className="md:w-2/3 sm:flex sm:flex-col sm:items-center lg:block">
            <Image src={Qr} alt="qr" className="w-40" />
            <p className="text-white text-md mt-2">For more info scan here<br/> Number - 9705311222</p>
          </div>
          <div className="lg:w-2/3 flex flex-col justify-end py-5 sm:hidden md:flex lg:flex">
            <h1 className="text-3xl font-bold text-[#7ABF4E] tracking-wide lg:text-right ">
              QUICK LINKS
            </h1>
            <ul className="flex justify-between mt-2 ">
              <li>
                <Link href="#" className="text-white uppercase text-sm">
                  who are we
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase text-sm">
                  HIGHLIGHTS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase text-sm">
                  Farmland
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase text-sm">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase text-sm">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
