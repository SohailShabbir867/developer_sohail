import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";
import { Send, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { FadeUp, FadeLeft, FadeRight } from "../animations/MotionWrappers";
import { SOCIAL_LINKS, SITE_DATA } from "../data/constants";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();
    if (!name) errors.name = "Name is required";
    else if (name.length < 2)
      errors.name = "Name must be at least 2 characters";
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
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      document.getElementById(Object.keys(errors)[0])?.focus();
      return;
    }
    setIsLoading(true);
    setNotification(null);
    setFormErrors({});

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    try {
      // Dynamically import emailjs only when needed
      const emailjs = (await import("@emailjs/browser")).default;

      // 1. Send the contact message to you
      await emailjs.send(
        "service_inmdbyl",
        "template_0971xd1",
        { name, email, message },
        "_zkdCZCAzlxxbJYoC",
      );

      // 2. Send auto-reply to the sender
      try {
        await emailjs.send(
          "service_inmdbyl",
          "template_ddy5wxg",
          { name, email, message },
          "_zkdCZCAzlxxbJYoC",
        );
      } catch (autoReplyError) {
        console.warn(
          "Auto-reply failed (message was still sent):",
          autoReplyError,
        );
      }

      setNotification({
        type: "success",
        message: "Message sent successfully! ✅",
      });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setNotification({
        type: "error",
        message: `Failed to send: ${error?.text || error?.message || "Unknown error. Check console."}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name } = e.target;
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sohailshabbir2005@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+92 329 1729925",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Rahim Yar Khan, Pakistan",
    },
  ];

  const socials = [
    {
      icon: <FaGithub size={20} />,
      href: SOCIAL_LINKS.github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: SOCIAL_LINKS.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaFacebook size={20} />,
      href: SOCIAL_LINKS.facebook,
      label: "Facebook",
    },
    {
      icon: <FaInstagram size={20} />,
      href: SOCIAL_LINKS.instagram,
      label: "Instagram",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: SOCIAL_LINKS.email,
      label: "Email",
    },
    {
      icon: <FaTiktok size={20} />,
      href: SOCIAL_LINKS.tiktok,
      label: "TikTok",
    },
  ];

  const inputClasses = (field) =>
    `w-full px-4 py-3.5 text-sm rounded-xl bg-dark border transition-all duration-300 text-white placeholder-gray-500 ${
      formErrors[field]
        ? "border-red-500"
        : "border-dark-200 focus:border-accent"
    }`;

  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-dark-100">
      <div className="container max-w-6xl px-6 mx-auto lg:px-8">
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl gradient-text">
              Hire Me
            </h2>
            <p className="text-gray-400">
              Let&apos;s work together on your next project
            </p>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-accent" />
          </div>
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <FadeLeft className="space-y-8 lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      {item.label}
                    </p>
                    <p className="text-sm text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Icons */}
            <div>
              <p className="mb-4 text-sm font-medium text-gray-400">
                Follow me
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border rounded-lg border-dark-200 hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/10"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </FadeLeft>

          {/* Contact Form */}
          <FadeRight className="lg:col-span-3">
            <form
              ref={form}
              onSubmit={sendForm}
              className="p-6 space-y-5 border rounded-2xl bg-dark border-dark-200 lg:p-8"
            >
              {notification && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 text-sm font-medium text-center rounded-xl ${
                    notification.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {notification.message}
                </motion.div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className={inputClasses("name")}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.name && (
                    <span className="mt-1 text-xs text-red-400">
                      {formErrors.name}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className={inputClasses("email")}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.email && (
                    <span className="mt-1 text-xs text-red-400">
                      {formErrors.email}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className={inputClasses("message")}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.message && (
                  <span className="mt-1 text-xs text-red-400">
                    {formErrors.message}
                  </span>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-2 py-3.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent/30"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
