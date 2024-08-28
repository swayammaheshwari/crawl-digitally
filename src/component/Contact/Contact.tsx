import React, { useState, ChangeEvent, FormEvent } from "react";
import { Stack } from "@mui/material";
import styles from "./assets/style.module.css";
import Button from "@mui/material/Button";

interface FormData {
  name: string;
  contact: string;
  industry?: string;
  message: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
  industry?: string;
  message?: string;
}

const Contact: React.FC = () => {
  // State to manage form inputs and errors
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    industry: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Function to handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation function
  const validate = (): boolean => {
    let tempErrors: FormErrors = {};
    let isValid = true;

    // Validate name
    if (!formData.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    // Validate contact (either mobile or email)
    const numberRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.contact) {
      tempErrors.contact = "Mobile number or email is required";
      isValid = false;
    } else if (!numberRegex.test(formData.contact) && !emailRegex.test(formData.contact)) {
      tempErrors.contact = "Enter a valid mobile number or email address";
      isValid = false;
    }

    // Validate message
    if (!formData.message) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Function to handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // If validation passes, display success message
      setSuccessMessage("Your message has been sent successfully!");
      setErrors({});
      setFormData({
        name: "",
        contact: "",
        industry: "",
        message: "",
      });
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <>
      <div className={styles.contact}>
        <hr />
        <h3>Contact Us</h3>
        <hr />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <input
            type="text"
            name="contact"
            placeholder="Enter a Valid Mobile No. or Email"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <p className={styles.error}>{errors.contact}</p>}

          <input
            type="text"
            name="industry"
            placeholder="Industry (Optional)"
            value={formData.industry}
            onChange={handleChange}
          />

          <input
            type="text"
            name="message"
            className={styles.last_input}
            placeholder="Enter your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}

          <Stack className={styles.button}>
            <Button variant="contained" type="submit">
              Send
            </Button>
          </Stack>
        </div>
      </form>
      {successMessage && (
        <p className={styles.success}>{successMessage}</p>
      )}
    </>
  );
};

export default Contact;
