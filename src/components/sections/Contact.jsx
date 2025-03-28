import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

export const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init({
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
      limitRate: {
        id: import.meta.env.VITE_SERVICE_ID,
        throttle: 10000,
      },
    });

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
        setformData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending emai :( :", error);
        toast.error("Message failed to send!", {
          position: "bottom-right",
          autoClose: 3000,
        });
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-xs md:w-md">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Input for name*/}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setformData({ ...formData, name: e.target.value })
                }
              ></input>
            </div>
            {/* Input for name*/}

            {/* Input for email*/}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setformData({ ...formData, email: e.target.value })
                }
              ></input>
            </div>
            {/* Input for email*/}

            {/* Input for message*/}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message..."
                onChange={(e) =>
                  setformData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            {/* Input for message*/}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
      <ToastContainer
        className="text-sm sm:text-base"
        toastClassName={({ type }) =>
          `${contextClass[type || "default"]} text-sm p-2 sm:text-base sm:p-3`
        }
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </section>
  );
};
