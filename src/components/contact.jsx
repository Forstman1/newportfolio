import { Icons } from "./icons";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    const formData = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_9fsfgvb", // Replace with your EmailJS Service ID
        "template_fll9v0d", // Replace with your EmailJS Template ID
        formData,
        "eRwYJ-R8cajzBF7uZ" // Replace with your EmailJS User ID
      )
      .then((response) => {
        console.log("Email sent:", response);
        // alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // alert("Failed to send message.");
      });
  };
  return (
    <div
      id="contact"
      className="w-[90%] md:w-[80%] lg:w-[550px]  flex flex-col justify-between gap-2 p-[50px] px-0  items-center h-full"
    >
      <Icons.tools className="w-[48px] h-[48px] " />
      <p className="text-[14px] text-[#525252] ">CONTACT</p>
      <p className="text-[48px] text-white">Get In Touch</p>
      <form onSubmit={handleSubmit} className="w-full flex gap-5 flex-wrap">
        <div className="flex gap-2 w-full">
          <input
            className="w-full h-[50px] bg-quaternary opacity-100 border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0  focus:outline-none rounded-[10px] text-white text-[14px] px-[20px] py-[10px] "
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="w-full h-[50px] bg-quaternary opacity-100  border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0  focus:outline-none rounded-[10px] text-white text-[14px] px-[20px] py-[10px] "
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <input
          className="h-[160px] items-start justify-start text-start  w-full  bg-quaternary opacity-100 border-[2px]  border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0   rounded-[10px] text-white text-[14px] px-[20px] "
          placeholder="Message"
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          type="submit"
          className="w-full h-[50px] bg-tertiary text-white rounded-[10px]"
        >
          Send
        </button>
      </form>
    </div>
  );
}
