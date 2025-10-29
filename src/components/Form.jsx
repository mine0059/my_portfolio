import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstname.trim())
      tempErrors.firstname = "First name is required";
    if (!formData.lastname.trim())
      tempErrors.lastname = "Last name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim())
      tempErrors.message = "Message cannot be empty";
    return tempErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      emailjs
        .send(
          "service_tiz2bi6",
          "template_gd959i7",
          formData,
          "lPcm1bhCAOLD0-vF8"
        )
        .then(() => {
          setSuccessMsg("Message sent successfully!");
          setFormData({ firstname: "", lastname: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setSuccessMsg("Something went wrong. Try again.");
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <div className="pt-20 md:pt-0 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:gap-6 overflow-hidden"
      >
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="Enter First Name"
          className="p-2 rounded"
        />
        {errors.firstname && (
          <p className="text-red-500 text-sm">{errors.firstname}</p>
        )}

        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Enter Last Name"
          className="p-2 rounded"
        />
        {errors.lastname && (
          <p className="text-red-500 text-sm">{errors.lastname}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Message"
          className="p-2 rounded"
          rows="5"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#D3E97A] text-[#0A0A0A] font-manrope font-bold px-10 py-5 rounded-[6.25rem] w-fit cursor-pointer mt-3 md:mt-0 hover:bg-[#AFCF55]"
        >
          {isSubmitting ? "Sending..." : "SUBMIT"}
        </button>

        {successMsg && <p className="text-green-600 mt-3">{successMsg}</p>}
      </form>
    </div>
  );
};

export default Form;
