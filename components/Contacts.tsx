'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaTelegram } from 'react-icons/fa';

export default function Contacts() {
  const form = useRef(null);
  const [done, setDone] = useState(false);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uzrsqfu', 'template_ct2goqa', form.current!, 'Oq34YLTxk_3IpCbJo')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <h2 className="uppercase text-center text-3xl font-bold tracking-widest text-[#5d31b6] mt-4 dark:text-violet-400">
        Get in Touch
        <hr className="w-10 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
      </h2>
      <div id="contact" className="w-full">
        <div className="max-w-[1000px] m-auto md:px-8 lg:px-8 py-12">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-2 w-full h-full p-4 shadow-xl shadow-gray-400 dark:shadow-sm dark:shadow-gray-200 rounded-xl">
              <div className="lg:p-4 h-full">
                <div>
                  <Image src="/assets/contact.svg" alt="contact" width={400} height={300} />
                </div>
                <div>
                  <p className="py-4 text-violet-800 text-2xl tracking-wide text-center font-semibold dark:text-violet-400">
                    Frontend Developer
                  </p>
                  <p className="py-2 text-gray-600 text-xl dark:text-gray-500">
                    Let&#39;s build something interesting together.
                  </p>
                  <p className="py-2 text-gray-600 text-xl dark:text-gray-500">
                    Contact me and let&#39;s talk.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between py-4">
                    <Link
                      href="https://www.linkedin.com/in/cholpon-damirbekova-a879b022b/"
                      target="_blank"
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-sm dark:shadow-gray-200 p-3 cursor-pointer hover:bg-[#5d31b6] hover:text-white hover:scale-105 ease-in duration-300"
                    >
                      <FaLinkedinIn size={20} />
                    </Link>
                    <Link
                      href="https://github.com/Cholpon-dd"
                      target="_blank"
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-sm dark:shadow-gray-200 p-3 cursor-pointer hover:bg-[#5d31b6] hover:text-white hover:scale-105 ease-in duration-300"
                    >
                      <FaGithub size={20} />
                    </Link>
                    <Link
                      href="https://t.me/cholpon_dd"
                      target="_blank"
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-sm dark:shadow-gray-200 p-3 cursor-pointer hover:bg-[#5d31b6] hover:text-white hover:scale-105 ease-in duration-150"
                    >
                      <FaTelegram size={20} />
                    </Link>
                    <Link
                      href="https://cholpon.damirbekova@gmail.com"
                      target="_blank"
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-sm dark:shadow-gray-200 p-3 cursor-pointer hover:bg-[#5d31b6] hover:text-white hover:scale-105 ease-in duration-300"
                    >
                      <AiOutlineMail size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:shadow-sm dark:shadow-gray-200">
              <div className="p-4">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid md:grid-cols-2 gap-4 py-2">
                    <div className="flex flex-col ">
                      <label className="uppercase text-sm py-2 text-violet-800">Name</label>
                      <input
                        className="border-2 rounded-lg p-2 flex border-violet-400 focus:outline-none focus:border-violet-800"
                        type="text"
                        placeholder="Name"
                        name="user_name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2 text-violet-800">Subject</label>
                      <input
                        className="border-2 rounded-lg p-2 flex border-violet-400 focus:outline-none focus:border-violet-800"
                        type="text"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-violet-800">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-violet-400 focus:outline-none focus:border-violet-800"
                      type="email"
                      placeholder="Your email"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-violet-800">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-violet-400 focus:outline-none focus:border-violet-800"
                      rows={4}
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-bold capitalize text-2xl bg-[#5d31b6] text-white rounded-lg mt-4">
                    Send message
                  </button>
                  {done && (
                    <p className="text-center text-bold text-xl ">Thank you for your message</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
