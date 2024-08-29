"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Image from "next/image";
import icon1 from "../../../public/assets/Icon1.png";
import icon2 from "../../../public/assets/Icon2.png";
import icon3 from "../../../public/assets/Icon3.png";
import icon4 from "../../../public/assets/Icon4.png";
import icon5 from "../../../public/assets/Icon5.png";
import mrugayan from "../../../public/assets/mrugayan.png";
import resorts from "../../../public/assets/resort.jpg";
import farmland from "../../../public/assets/farmland.jpg";
import weekend from "../../../public/assets/Weekend-Homes.jpg";
import family from "../../../public/assets/family.jpg";
import whyChoose from "../../../public/assets/why-choose.png";
import kapil from "../../../public/assets/Kapil-group.png";
import loc1 from "../../../public/assets/loc-1.png";
import loc from "../../../public/assets/loc.png";
import map from "../../../public/assets/Route.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// In your component file

const data = [
  {
    path: "/assets/Gallery/01.jpg",
  },
  {
    path: "/assets/Gallery/02.jpg",
  },
  {
    path: "/assets/Gallery/03.jpg",
  },
  {
    path: "/assets/Gallery/04.jpg",
  },
  {
    path: "/assets/Gallery/05.jpg",
  },
  {
    path: "/assets/Gallery/06.jpg",
  },
  {
    path: "/assets/Gallery/07.jpg",
  },
  {
    path: "/assets/Gallery/08.jpg",
  },
  {
    path: "/assets/Gallery/06.jpg",
  },
  {
    path: "/assets/Gallery/07.jpg",
  },
  {
    path: "/assets/Gallery/08.jpg",
  },
  {
    path: "/assets/Gallery/08.jpg",
  },
];

interface FormData {
  name: string;
  phonenumber: string;
  email: string;
}
const NewComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phonenumber: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

  
    console.log('Form data submitted:', formData);

    try {
      
      const response = await axios.post('https://api.kapilfarms.in/contactform', formData);
      
      console.log('Form submitted successfully:', response.data);
      setFormData({
        name: '',
        phonenumber: '',
        email: '',
      });
    } catch (err) {
      // Handle error
      setError('Failed to submit form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };
    
  return (
    <div>
    <section className="bg-[url('/assets/Home-banner2.jpg')] bg-cover   lg:flex  lg:h-screen bg-center">
    <div className="lg:w-2/3 lg:px-12 flex items-start">
      <h1 className="  text-white   px-10 lg:text-4xl xl:text-4xl   tracking-wider md:text-3xl sm:text-2xl py-10 ">
        Escape the city with your kids,
        <br />
        <span className="text-[#bc9d3d]">find home away from home at Mruganayani!</span>
      </h1>
    </div>
    <div className="lg:w-1/3 flex lg:items-start md:justify-center  relative sm:justify-center bg-[#000] ">
      <div className=" ">
        <div className="px-8 py-8">
          <p className="text-center text-[#bc9d3d] text-3xl py-10 sm:text-2xl">
            Invest in Farmlands:
            <br /> Watch your wealth grow <br />
            with your children !
          </p>
          <p className="text-center font-bold">now is a great time !</p>
          <p className="text-white text-center font-bold text-3xl mt-5 ">
            contact us now !
          </p>
        </div>

        <form onSubmit={handleSubmit}  className="mt-1 flex flex-col items-center p-8">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white border-b   p-2  focus:outline-none w-full mt-2"
            placeholder="Full Name"
          />
          <input
            type="text"
            name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
            className="bg-white border-b   p-2   focus:outline-none w-full mt-8"
            placeholder="Contact Number"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white border-b   p-2   focus:outline-none w-full mt-8"
            placeholder="E-mail ID"
          />
          <button className="bg-[#267139] text-white p-3 mt-8 lg:text-3xl rounded-xl">
            Submit
          </button>
          
        </form>
      </div>
    </div>
  </section>
  <section className="mt-5   mx-5">
      <h1 className="text-center text-4xl font-bold tracking-wide sm:text-xl">
        Why You Should Consider Farmland at Mruganayani
      </h1>
      <div className="lg:flex justify-around relative">
        <div className="h-5 w-full bg-[#dee0df] absolute top-24 sm:hidden md:hidden"></div>
        <div className="flex flex-col items-center text-center z-10">
          <Image src={icon1} alt="icon" width={200} height={200} />
          <h1 className="text-xl">
            100%
            <br />
            Clear Title1
          </h1>
        </div>
        <div className="flex flex-col items-center text-center z-10">
          <Image src={icon2} alt="icon" width={200} height={200} />
          <h1 className="text-xl">
            Patta
            <br />
            Passbook
          </h1>
        </div>
        <div className="flex flex-col items-center text-center z-10">
          <Image src={icon3} alt="icon" width={200} height={200} />
          <h1 className="text-xl">
            Free from
            <br />
            Encroachment
          </h1>
        </div>
        <div className="flex flex-col items-center text-center z-10">
          <Image src={icon4} alt="icon" width={200} height={200} />
          <h1 className="text-xl">
            TS Rythu
            <br />
            Bharosa
          </h1>
        </div>
        <div className="flex flex-col items-center text-center z-10">
          <Image src={icon5} alt="icon" width={200} height={200} />
          <h1 className="text-xl">
            50kg of Farm
            <br />
            Produce Annually
          </h1>
        </div>
      </div>
    </section>
    <section
        className="relative bg-cover bg-center lg:h-screen flex items-center lg:px-10 py-10 mt-10"
        style={{ backgroundImage: "url('/assets/mango-tree.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#113c22] opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <Image src={mrugayan} alt="pic" className="w-60" />
          <h1 className="lg:text-4xl text-[#e3bb3d] sm:text-xl md:text-xl sm:text-center">
            Kapil farms-one of its kind farmland investment
          </h1>
          <div className="w-full lg:flex justify-evenly lg:m-10 md:m-5 sm:m-5 gap-10 px-5">
            <div className="flex flex-col items-center">
              <Image src={resorts} alt="resort" className="w-[400px] border-white border-2 rounded-xl" />
              <h1 className="text-white font-bold text-2xl mt-5">RESORTS</h1>
            </div>
            <div className="flex flex-col items-center">
              <Image src={weekend} alt="resort" className="w-[400px]  border-white border-2 rounded-xl" />
              <h1 className="text-white font-bold text-2xl mt-5">VACATION HOMES</h1>
            </div>
            <div className="flex flex-col items-center">
              <Image src={farmland} alt="resort" className="w-[400px]  border-white border-2 rounded-xl" />
              <h1 className="text-white font-bold text-2xl mt-5">FARMLAND</h1>
            </div>
          </div>
        </div>
      </section>
      <div className=" lg:flex items-center">
        <div
          className=" lg:w-1/2 relative bg-cover bg-center lg:h-screen flex items-center lg:px-10 py-10 "
          style={{ backgroundImage: "url('/assets/resort.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#0b0e0ceb] opacity-60 "></div>
          <div className="my-10 relative z-10 px-5">
            <h1 className="text-[#e3bb3d] lg:text-3xl font-bold sm:text-center lg:text-justify sm:text-xl md:text-xl">
              Invest in Mruganayani and  reap rewards that are more 
              valuable than money!
            </h1>
            <h1 className="text-white lg:text-xl mt-5 text-justify">
              Give your kids a break from the concrete jungle and the relentless
              pace of city life. Let them enjoy the chirping of birds and the
              gentle breeze in their hair instead of the honking horns and city
              noise. Introduce them to Mruganayani and watch them bask in the
              purity of nature!
            </h1>
            <h1 className="text-white lg:text-2xl mt-5 text-justify">
              Here, the crunch of city life fades away, and the gentle rustle of
              leaves and fluttering of butterflies become your new companions.
            </h1>
            <div className="flex justify-center">
            <button className="mt-5 text-white font-3xl bg-green px-10 py-5 rounded-full ">
              BOOK NOW
            </button>
            </div>
         
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-screen">
          <Image src={family} alt="family" className="lg:h-screen" />
        </div>
      </div>
      <div
        className=" relative bg-cover bg-center  flex flex-col items-center mt-10 "
        style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      >
        <h1 className="lg:text-4xl text-dark font-bold">
          Why Choose Mruganayani by Kapil Farms?
        </h1>
        <Image src={whyChoose} alt="img" />
      </div>
      <div className="lg:flex justify-center items-center ">
        <div className="lg:w-1/3">
          <Image src={kapil} alt="logo img " />
        </div>
        <div className="lg:w-2/3 px-5">
          <h1 className="text-center  text-3xl font-bold mt-3 sm:text-2xl">Who we are ?</h1>
          <p className="text-black lg:text-lg py-5 text-justify ">
            Kapil Group started its journey with chit funds in 1981 and ventured
            into real estate in 1982. Since then, it has expanded into 25
            diverse verticals and consistently broadened its horizons year after
            year, establishing itself as one of the most prestigious business
            conglomerates in India.
          </p>
          <p className="lg:text-lg  text-justify ">
            With Mruganayani, Kapil Group presents the opportunity to be closer
            to nature. These expansive acres offer a serene escape from the
            everyday urban rush. Our property provides a unique blend of farming
            and vacationing—whether you want to foster farming or spend a few
            days amid the charm of nature with your kids, Mruganayani is your
            ideal location. Experience the luxury of nature in a way only
            Mruganayani can offer. Be Rooted, Be Mruganayani!
          </p>
        </div>
      </div>
      <div className=" bg-[ #e2f1cc] px-5">
      <Swiper
       
        grid={{
          rows: 2,
        }}
        navigation={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation, Thumbs]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 50,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.path} className="mt-5 ">
            <Image src={item.path} alt="img" width={300} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <section className="mt-10 ">
      <div className=" relative   flex flex-col items-center mt-10 ">
        <h1 className="lg:text-4xl text-dark font-bold text-center">
        Strategically located in Narayankhed, the high-growth corridor        </h1>
        <Image src={map} alt="img" />
      </div>
    
      <div className="lg:flex mt-10 gap-5 mx-5">
        <div className="lg:w-1/2 md:flex md:justify-center ">
          <Image src={loc1} alt="loc" />
        </div>
        <div className="lg:w-1/2 md:flex md:justify-center md:mt-10 lg:mt-0 sm:mt-10">
          <Image
            src={loc}
            alt="loc"
            className="border border-green "
          />
        </div>
      </div>
    </section>
  </div>
  )
}

export default NewComponent
