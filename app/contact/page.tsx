"use client";
import React, { useState } from "react";
import GridGlobe from "@/components/ui/GridGlobe";
import { BsGeoAlt } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsMailboxFlag } from "react-icons/bs";
import ShimmerButton from "@/components/ui/ShimmerButton";

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(formData);
      console.log(JSON.stringify(formData));
      console.log(response);

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("Error sending email.");
    }
  };
  return (
    <div className="max-w-7xl w-full">
      <section className="w-full py-20 min-h-screen pt-36">
        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80] mb-5">
          I am already excited
        </p>
        <h1 className="heading">
          Let&apos;s <span className="text-purple">Connect</span>
        </h1>

        <div className="flex flex-col lg:flex-row bg-white bg-opacity-10 my-6 text-card-foreground rounded-xl overflow-hidden">
          <div className="w-full lg:w-1/2 bg-cover bg-center">
            <GridGlobe UsedAt="Contact" />
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-4">Hello, there. </h2>
            <p className="mb-6">
              Want to build a web-app, collaborate on a project, or just say hi?
            </p>
            <div className="flex items-center gap-4 mb-4">
              <BsGeoAlt className="w-4 h-4" />
              <span>Chennai, India</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <BsWhatsapp className="w-4 h-4" />
              <span>+91 78711 94171</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <BsMailboxFlag className="w-4 h-4" />
              <span>contactme@prasannar.com</span>
            </div>
            <h3 className="text-lg font-semibold mt-8 mb-2">
              What would you like to talk about?
            </h3>
            <div className="flex space-x-2 mb-6">
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedOption === "Web Apps"
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary text-primary"
                }`}
                onClick={() => handleSelectOption("Web Apps")}
              >
                Web Apps
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedOption === "Design Collab"
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary text-primary"
                }`}
                onClick={() => handleSelectOption("Design Collab")}
              >
                Design Collab
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedOption === "Opportunity"
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary text-primary"
                }`}
                onClick={() => handleSelectOption("Opportunity")}
              >
                Opportunity
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedOption === "Other"
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary text-primary"
                }`}
                onClick={() => handleSelectOption("Other")}
              >
                Other
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded-lg bg-input text-foreground bg-[#020617]"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg bg-input text-foreground bg-[#020617]"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border rounded-lg bg-input text-foreground"
                  placeholder="Phone Number"
                />
              </div> */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-3 py-2 border rounded-lg bg-input text-foreground bg-[#020617]"
                  placeholder="Type Here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hidden"
              >
                {status ? status : "Submit"}
              </button>
              <ShimmerButton
                title={status ? status : "Submit"}
                buttonType="submit"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
