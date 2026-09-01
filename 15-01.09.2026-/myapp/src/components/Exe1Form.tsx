import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Exe1Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleMessageChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setMessage(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // ולידציה בסיסית
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("יש למלא את כל השדות");
      return;
    }

    const formData: ContactFormData = {
      name,
      email,
      message,
    };

    console.log("Contact Form Data:");
    console.log(formData);

    // ניקוי הטופס לאחר השליחה
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />

          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />

          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>

        <br />

        <div>
          <label>Message:</label>
          <br />

          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
          />
        </div>

        <br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

