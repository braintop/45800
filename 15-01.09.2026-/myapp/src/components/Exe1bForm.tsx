import { useState } from "react";

interface ContactFormData {
  firstname: string;
  email: string;
  message: string;
}

export default function Exe1bForm() {
  const [form, setForm] = useState<ContactFormData>({
    firstname: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      form.firstname.trim() === "" ||
      form.email.trim() === "" ||
      form.message.trim() === ""
    ) {
      alert("יש למלא את כל השדות");
      return;
    }

    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.firstname}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
      />

      <button type="submit">Send</button>
    </form>
  );
}

