"use client"
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import gif from '../../../public/assets/form_bg.gif';

interface FormData {
  name: string;
  phonenumber: string;
  email: string;
}

const HeroSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phonenumber: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    console.log('Form data submitted:', formData);

    try {
      const response = await axios.post('https://api.kapilfarms.in/contactform', formData);
      console.log('Form submitted successfully:', response.data);
      setFormData({
        name: '',
        phonenumber: '',
        email: '',
      });
      setSuccess("Form submitted successfully");

      // Clear success message after 5 seconds


    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const message = err.response?.data?.message || 'Failed to submit form. Please try again.';
        setError(message);
      } else {
        setError('Failed to submit form. Please try again.');
      }
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
      const id = setTimeout(() => {
        setSuccess('');
        setError('')
      }, 5000);

      setTimeoutId(id);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <section className="relative h-auto bg-cover bg-center rounded-3xl lg:flex align-items-center mx-5" id="contact" style={{ backgroundImage: `url('/assets/LP-image.png')` }}>
      <div className="lg:w-1/2 lg:px-12 flex items-end sm:justify-center md:justify-center sm:w-full">
        <h1 className="text-white font-bold px-5 lg:text-2xl xl:text-3xl text-5xl uppercase tracking-wider md:text-3xl sm:text-xl py-8">
          Venture into the land <br />
          of limitless possibilities!
        </h1>
      </div>
      <div className="lg:w-1/2 flex lg:justify-end md:items-end relative lg:m-10 sm:justify-center">
        <div className="bg-lightgolden rounded-2xl max-w-[400px] sm:my-5">
          <div className="px-8 py-8">
            <p className="text-center">
              If you are looking to buy farmland in Hyderabad,
            </p>
            <p className="text-center font-bold">now is a great time!</p>
            <p className="uppercase text-center font-bold text-lg mt-5">
              contact us
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-1 flex flex-col items-center px-8">
            <input
              type="text"
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="bg-lightgolden border-b py-1 focus:outline-none w-full mt-2"
              placeholder="Full Name"
              aria-label="Full Name"
              required
            />
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              className="bg-lightgolden border-b py-1 focus:outline-none w-full mt-8"
              placeholder="Contact Number"
              aria-label="Contact Number"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-lightgolden border-b py-1 focus:outline-none w-full mt-8"
              placeholder="E-mail ID"
              aria-label="E-mail ID"
              required
            />
            <button
              type="submit"
              className="bg-darkgreen text-white w-full py-1 mt-8"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            {success && <p className=" mt-2 fw-700 fs-22" style={{color:"white", backgroundColor:"green",padding:"10px"}}>{success}</p>}
            {error && <p className="text-red-500 mt-2" style={{color:"white", backgroundColor:"red",padding:"10px"}}>{error}</p>}
          </form>
          <Image src={gif} alt="Background GIF" className="w-full rounded-2xl mt-8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
