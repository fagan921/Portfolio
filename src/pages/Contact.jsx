import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "" ? "This field is required" : "",
    }));
    if (name === "email" && value && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <input type="text" name="name" placeholder="Name" onBlur={handleBlur} />
        {errors.name && <p>{errors.name}</p>}

        <input type="email" name="email" placeholder="Email" onBlur={handleBlur} />
        {errors.email && <p>{errors.email}</p>}

        <textarea name="message" placeholder="Your message" onBlur={handleBlur}></textarea>
        {errors.message && <p>{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;