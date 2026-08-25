import React, { useRef, useState } from "react";
import Button from "../Components/Button";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-scroll";
import emailjs from "@emailjs/browser";
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fahadabdullah2338@gmail.com",
    href: "mailto:fahadabdullah2338@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 371 4099749",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gujranwala Punjab, Pakistan",
    href: "#",
  },
];

const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const Name = useRef("");
  const Email = useRef("");
  const Message = useRef("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  async function handleSubmit(name, email, message) {
    if (name === "") {
      setIsError(true);
      setError("Please Enter Your Name");
      setTimeout(() => {
        setIsError(false);
      }, 3000);
      return;
    } else if (email === "") {
      setIsError(true);
      setError("Please Enter Your Email");
      setTimeout(() => {
        setIsError(false);
      }, 3000);
      return;
    } else if (isEmail(email) === false) {
      setIsError(true);
      setError("Enter Valid Email");
      setTimeout(() => {
        setIsError(false);
      }, 3000);
      return;
    } else if (message === "") {
      setIsError(true);
      setError("Please Enter Your Message");
      setTimeout(() => {
        setIsError(false);
      }, 3000);
      return;
    } else {
      setLoading(true);
      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
          throw new Error(
            "EmailJS configuration is missing. Please check your environment variables.",
          );
        }

        await emailjs.send(
          serviceId,
          templateId,
          {
            name: name,
            email: email,
            message: message,
          },
          publicKey,
        );

        setSubmit(true);
        Name.current.value = "";
        Email.current.value = "";
        Message.current.value = "";
      } catch (err) {
        console.log(err);
        setIsError(true);
        setError(err?.message || "Something went wrong");
      } finally {
        setLoading(false);
        setTimeout(() => {
          setSubmit(false);
        }, 3000);
      }
    }
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div
        className="absolute bottom-1/2 right-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 "
      />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="flex items-center justify-center pt-6">
          <div className="mx-auto mb-16 max-w-4xl px-2 text-center relative">
            <span
              className="text-secondary-foreground text-2xl
      font-medium tracking-wider uppercase animate-fade-in"
            >
              Get In Touch
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold
      mt-4 mb-6 animate-fade-in animation-delay-100
      text-secondary-foreground"
            >
              Let's connect and{" "}
              <span className="font-serif italic font-normal text-white">
                grow together.
              </span>
            </h2>

            <p
              className="text-muted-foreground
  animate-fade-in animation-delay-200 text-sm md:text-xl"
            >
              Whether you'd like to connect, share feedback, or discuss an
              opportunity, I'd be happy to hear from you.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-center justify-items-center">
          <form
            onSubmit={handleSubmitForm}
            className="w-full max-w-lg mx-auto p-6 glass-strong rounded-2xl outline-none relative shrink-0 space-y-3 ring-1 ring-secondary/10 animate-fade-in animation-delay-100"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="">Name</label>
              <input
                onInput={() => {
                  setIsError(false);
                }}
                ref={Name}
                required
                type="text"
                placeholder="Your Name..."
                className="glass outline-none ring ring-muted focus:ring-1  focus:ring-primary/40 rounded-xl p-1 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                onInput={() => {
                  setIsError(false);
                }}
                ref={Email}
                required
                type="text"
                placeholder="your@gmail.com"
                className="glass outline-none ring ring-muted focus:ring-1  focus:ring-primary/40 rounded-xl px-2 py-1 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Message</label>
              <textarea
                onInput={() => {
                  setIsError(false);
                }}
                ref={Message}
                required
                name=""
                id=""
                placeholder="Your Message..."
                className="glass outline-none ring ring-muted focus:ring-1  focus:ring-primary/40 rounded-xl p-1 "
                rows={5}
              ></textarea>
            </div>

            <div
              className=""
              onClick={() => {
                handleSubmit(
                  Name.current.value,
                  Email.current.value,
                  Message.current.value,
                );
              }}
            >
              <Button
                className=" flex justify-center items-center gap-2 w-full mt-5"
                type="submit"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 " />
                  </>
                )}
              </Button>
            </div>
            {isError && (
              <div className="w-full h-fit p-6 bg-red-500/20 rounded-2xl flex items-center gap-2">
                <AlertCircle className="w-5 h-5 " /> {error}
              </div>
            )}
            {submit && (
              <div className="w-full h-fit p-6 bg-green-500/20 rounded-2xl  flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Message Send Successfully
              </div>
            )}
          </form>

          <div className="flex w-full max-w-lg mx-auto flex-col gap-4">
            <div
              className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />
            <div className="glass rounded-2xl flex flex-col gap-4 p-6  relative animate-fade-in  animation-delay-200">
              <h1 className="text-foreground text-xl font-semibold">
                Contact Info
              </h1>

              {/* contact inflo details  */}
              <div className=" flex flex-col gap-3">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="p-4 bg-primary/10 inline-block rounded-2xl text-primary">
                      <item.icon />
                    </div>
                    <div className="flex flex-col gap-0.2">
                      <p className="text-foreground">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Currently Availabe Details */}
            <div className="p-4 glass rounded-2xl  ring-1 ring-secondary flex flex-col gap-2 animate-fade-in  animation-delay-300">
              <h1 className="flex gap-2 items-center ">
                {" "}
                <span className="h-3 w-3 bg-green-500 inline-block animate-pulse rounded-full"></span>
                Currently Available
              </h1>
              <p className="text-muted-foreground text-md">
                {" "}
                I'm currently open to frontend development opportunities,
                including internships and junior React/Frontend Developer roles.
                I'm looking for an opportunity where I can contribute my skills,
                gain real-world experience, and grow as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
