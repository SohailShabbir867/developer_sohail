import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";
import { Send, Loader2, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { FadeUp, FadeLeft, FadeRight } from "../animations/MotionWrappers";
import { SOCIAL_LINKS, SITE_DATA } from "../data/constants";

const Contact = () => {
  const form     = useRef();
  const [isLoading, setIsLoading]     = useState(false);
  const [notification, setNotification] = useState(null);
  const [formErrors, setFormErrors]   = useState({});
  const [sent, setSent]               = useState(false);

  const validateForm = (formData) => {
    const errors = {};
    const name    = formData.get("name")?.trim();
    const email   = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();
    if (!name) errors.name = "Name is required";
    else if (name.length < 2) errors.name = "Name must be at least 2 characters";
    if (!email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Please enter a valid email";
    if (!message) errors.message = "Message is required";
    else if (message.length < 10)
      errors.message = "Message must be at least 10 characters";
    return errors;
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const errors   = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      document.getElementById(Object.keys(errors)[0])?.focus();
      return;
    }
    setIsLoading(true);
    setNotification(null);
    setFormErrors({});

    const name    = formData.get("name").trim();
    const email   = formData.get("email").trim();
    const message = formData.get("message").trim();

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send("service_inmdbyl", "template_0971xd1", { name, email, message }, "_zkdCZCAzlxxbJYoC");
      try {
        await emailjs.send("service_inmdbyl", "template_ddy5wxg", { name, email, message }, "_zkdCZCAzlxxbJYoC");
      } catch (autoReplyError) {
        console.warn("Auto-reply failed:", autoReplyError);
      }
      setSent(true);
      setNotification({ type: "success", message: "Message sent successfully! ✅" });
      form.current.reset();
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setNotification({
        type: "error",
        message: `Failed to send: ${error?.text || error?.message || "Unknown error."}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name } = e.target;
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: null }));
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />,   label: "Email",    value: "sohailshabbir2005@gmail.com" },
    { icon: <Phone className="w-5 h-5" />,  label: "Phone",    value: "+92 329 1729925" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Rahim Yar Khan, Pakistan" },
  ];

  const socials = [
    { icon: <FaGithub size={20} />,    href: "https://github.com/sohailshabbir867",             label: "GitHub" },
    { icon: <FaLinkedin size={20} />,  href: "https://www.linkedin.com/in/sohail-shabbir-546a12375/", label: "LinkedIn" },
    { icon: <FaFacebook size={20} />,  href: "https://web.facebook.com/sohail.shabbir.268226",  label: "Facebook" },
    { icon: <FaInstagram size={20} />, href: SOCIAL_LINKS.instagram,                             label: "Instagram" },
    { icon: <FaEnvelope size={20} />,  href: "mailto:sohailshabbir2005@gmail.com",               label: "Email" },
    { icon: <FaTiktok size={20} />,    href: SOCIAL_LINKS.tiktok,                                label: "TikTok" },
  ];

  const inputClasses = (field) =>
    `w-full px-4 py-3.5 text-sm rounded-xl bg-dark border transition-all duration-300 text-white placeholder-gray-600 ${
      formErrors[field]
        ? "border-red-500 shadow-[0_0_0_2px_rgba(239,68,68,0.15)]"
        : "border-dark-200 focus:border-accent"
    }`;

  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-dark-100 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl px-6 mx-auto lg:px-8">
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl gradient-text">
              Hire Me
            </h2>
            <p className="text-gray-400">Let&apos;s work together on your next project</p>
            <motion.div
              className="h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-accent via-accent-light to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <FadeLeft className="space-y-8 lg:col-span-2">
            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: "spring", stiffness: 260, damping: 22 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300 flex-shrink-0"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">{item.label}</p>
                    <p className="text-sm text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Icons */}
            <div>
              <p className="mb-4 text-sm font-medium text-gray-400">Follow me</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, type: "spring", stiffness: 300, damping: 18 }}
                    whileHover={{ scale: 1.2, rotate: 8, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-10 h-10 text-gray-400 transition-colors duration-300 border rounded-lg border-dark-200 hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/15"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeLeft>

          {/* Contact Form */}
          <FadeRight className="lg:col-span-3">
            <motion.form
              ref={form}
              onSubmit={sendForm}
              className="p-6 space-y-5 border rounded-2xl bg-dark border-dark-200 lg:p-8 relative overflow-hidden focus-glow"
              whileHover={{ borderColor: "rgba(255,102,0,0.2)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Ambient inner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/3 rounded-full blur-[60px] pointer-events-none" />

              {/* Notification */}
              <AnimatePresence>
                {notification && (
                  <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className={`p-4 text-sm font-medium text-center rounded-xl flex items-center justify-center gap-2 ${
                      notification.type === "success"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {notification.type === "success" && <CheckCircle className="w-4 h-4 flex-shrink-0" />}
                    {notification.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="input-scan">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className={inputClasses("name")}
                    onChange={handleInputChange}
                    required
                  />
                  <AnimatePresence>
                    {formErrors.name && (
                      <motion.span
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1 text-xs text-red-400 block"
                      >
                        {formErrors.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div className="input-scan">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className={inputClasses("email")}
                    onChange={handleInputChange}
                    required
                  />
                  <AnimatePresence>
                    {formErrors.email && (
                      <motion.span
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1 text-xs text-red-400 block"
                      >
                        {formErrors.email}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="input-scan">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className={inputClasses("message")}
                  onChange={handleInputChange}
                  required
                />
                <AnimatePresence>
                  {formErrors.message && (
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-xs text-red-400 block"
                    >
                      {formErrors.message}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,102,0,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="ripple-btn flex items-center justify-center w-full gap-2 py-3.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {/* Animated send state */}
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </motion.span>
                  ) : sent ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.form>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
