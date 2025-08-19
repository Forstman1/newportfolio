import { Icons } from "./icons";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    console.log(name, email, message);
    const formData = {
      from_name: name,
      user_email: email,
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
        setIsSubmitting(false);
        // Clear form after successful submission
        setName("");
        setEmail("");
        setMessage("");
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <motion.div
      ref={ref}
      id="contact"
      className="w-[90%] md:w-[80%] lg:w-[550px] flex flex-col justify-between gap-2 p-[50px] px-0 items-center h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
      >
        <Icons.tools className="w-[48px] h-[48px]" />
      </motion.div>
      
      <motion.p 
        className="text-[14px] text-[#525252]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        CONTACT
      </motion.p>
      
      <motion.p 
        className="text-[48px] text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Get In Touch
      </motion.p>
      
      <motion.form 
        onSubmit={handleSubmit} 
        className="w-full flex gap-5 flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div 
          className="flex gap-2 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.input
            className="w-full h-[50px] bg-quaternary opacity-100 border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 focus:outline-none rounded-[10px] text-white text-[14px] px-[20px] py-[10px] transition-all duration-300 focus:border-tertiary focus:scale-[1.02]"
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            whileFocus={{ scale: 1.02, borderColor: "#1DA1F2" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.input
            className="w-full h-[50px] bg-quaternary opacity-100 border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 focus:outline-none rounded-[10px] text-white text-[14px] px-[20px] py-[10px] transition-all duration-300 focus:border-tertiary focus:scale-[1.02]"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            whileFocus={{ scale: 1.02, borderColor: "#1DA1F2" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          />
        </motion.div>
        
        <motion.textarea
          className="h-[160px] items-start justify-start text-start w-full bg-quaternary opacity-100 border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 rounded-[10px] text-white text-[14px] px-[20px] py-[15px] resize-none focus:outline-none transition-all duration-300 focus:border-tertiary focus:scale-[1.02]"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          whileFocus={{ scale: 1.02, borderColor: "#1DA1F2" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        
        <motion.button
          type="submit"
          className="w-full h-[50px] bg-tertiary text-white rounded-[10px] font-medium text-[16px] transition-all duration-300 hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {isSubmitting ? (
            <motion.div
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Sending...
            </motion.div>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
