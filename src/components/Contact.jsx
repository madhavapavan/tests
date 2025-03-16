import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct the mailto URL with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    const mailtoLink = `mailto:madhavavukkum@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Reset form after a short delay (simulating submission)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    }, 1000); // Delay to allow the email client to open
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mx-auto"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-2xl mx-auto mt-12">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="card"
          >
            <div className="input-group">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder=" "
                required
                className="interactive"
              />
              <motion.label
                initial={{ y: 0 }}
                animate={formState.name ? { y: -28, scale: 0.8 } : { y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                htmlFor="name"
              >
                Your Name
              </motion.label>
            </div>

            <div className="input-group">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder=" "
                required
                className="interactive"
              />
              <motion.label
                initial={{ y: 0 }}
                animate={formState.email ? { y: -28, scale: 0.8 } : { y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                htmlFor="email"
              >
                Your Email
              </motion.label>
            </div>

            <div className="input-group">
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="5"
                placeholder=" "
                required
                className="interactive"
              />
              <motion.label
                initial={{ y: 0 }}
                animate={formState.message ? { y: -28, scale: 0.8 } : { y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                htmlFor="message"
              >
                Your Message
              </motion.label>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn btn-primary w-full mt-4 interactive"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Opening Email...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8"
          >
            <a
              href="mailto:madhavavukkum@gmail.com"
              className="flex items-center text-secondary hover:text-accent transition-colors duration-300 interactive"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              madhavavukkum@gmail.com
            </a>

            <a
              href="https://github.com/madhavapavan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-secondary hover:text-accent transition-colors duration-300 interactive"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/madhavavukkum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-secondary hover:text-accent transition-colors duration-300 interactive"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;