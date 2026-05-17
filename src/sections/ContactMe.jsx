import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AutohideSnackbar from '../components/SnackBar';

export default function ContactMe() {
  const form = useRef();
  const [openSnack, setOpenSnack] = useState({ message: '', open: false });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_v4kepxr',
        'template_7hguabh',
        form.current,
        '7xuzcV5S7sWZ519P6'
      )
      .then(
        () => {
          setOpenSnack({
            message: 'Message sent successfully 🚀 ',
            open: true,
          });
          form.current.reset();
        },
        () => {
          setOpenSnack({ message: 'Something went wrong!', open: true });
        }
      );
  };
  return (
    <div className="header-section" id="Contact">
      <header className="">
        <h1 className="praimary-head text-2xl mx-auto mb-10 fade-in-left ">
          Contact Me
        </h1>
      </header>
      <div className="">
        <p className="desc text-gray-300  text-center fade-in-right w-3/4 mx-auto text-sm md:text-lg">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out to me
          through any of the platforms below. Let's connect and create something
          amazing together!
        </p>
        <div className="block justify-between items-center gap-20 mt-10 md:flex">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5 mt-10 fade-in-left w-full text-center md:text-left md:w-3/4"
          >
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                required
                name="email"
                className="input outline-none bg-gray-800 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:border-blue-500 rounded-md px-5 py-2 "
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                required
                name="message"
                className="input outline-none bg-gray-800 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:border-blue-500 rounded-md px-5 py-2 h-40 resize-none "
                placeholder="Your Message"
              />
            </div>
            <div>
              <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                Send Message
              </button>
            </div>
          </form>
          <AutohideSnackbar
            openSnack={openSnack}
            onClose={() => setOpenSnack({ message: '', open: false })}
          />
          <div>
            <img
              src="images/email.png"
              alt="Contact Icon"
              className="hidden md:block w-60 animate-bounce"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
