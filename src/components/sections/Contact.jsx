import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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
    // console.log({
    //   service: import.meta.env.VITE_SERVICE_ID,
    //   template: import.meta.env.VITE_TEMPLATE_ID,
    //   key: import.meta.env.VITE_PUBLIC_KEY,
    // });

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target
      )
      .then(() => {
        alert("Message sent successfully!");
        setformData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending emai :( :", error);
        alert("Message failed to send!", error.text);
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
    </section>
  );
};
