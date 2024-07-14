"use client";
const Contact = () => {
  return (
    <div className="max-w-7xl w-full">
      <section className="w-full py-20 min-h-screen pt-36">
        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80] mb-5">
          I am already excited
        </p>
        <h1 className="heading">
          Let&apos;s <span className="text-purple">Connect</span>
        </h1>

        <div className="flex flex-col md:flex-row bg-white bg-opacity-10 my-6 text-card-foreground rounded-xl overflow-hidden">
          {/* <div className="w-full md:w-1/2 bg-cover bg-center"></div> */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-4">Hello, there. </h2>
            <p className="mb-6">
              Want to build a web-app, collaborate on a project, or just say hi?
            </p>
            <div className="flex items-center mb-4">
              <img
                alt="location-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=📍"
                className="mr-2"
              />
              <span>Chennai, India</span>
            </div>
            <div className="flex items-center mb-4">
              <img
                alt="phone-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=📞"
                className="mr-2"
              />
              <span>+91 78711 94171</span>
            </div>
            <div className="flex items-center mb-4">
              <img
                alt="email-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=📧"
                className="mr-2"
              />
              <span>contactme@prasannar.com</span>
            </div>
            <h3 className="text-lg font-semibold mt-8 mb-2">
              What would you like to talk about?
            </h3>
            <div className="flex space-x-2 mb-6">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                Web Apps
              </button>
              <button className="border border-primary text-primary px-4 py-2 rounded-lg">
                Design Collab
              </button>
              <button className="border border-primary text-primary px-4 py-2 rounded-lg">
                Opportunity
              </button>
              <button className="border border-primary text-primary px-4 py-2 rounded-lg">
                Other
              </button>
            </div>
            <form>
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
                  className="w-full px-3 py-2 border rounded-lg bg-input text-foreground"
                  placeholder="Name"
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
                  className="w-full px-3 py-2 border rounded-lg bg-input text-foreground"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
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
              </div>
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
                  className="w-full px-3 py-2 border rounded-lg bg-input text-foreground"
                  placeholder="Type Here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
