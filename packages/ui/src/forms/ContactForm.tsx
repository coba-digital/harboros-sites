"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { encryptPayload } from "../utils/encryption";

import Button from "../components/buttons/Button";
import Card from "../components/cards/Card";

interface Props {
  noBackground?: boolean;
}

const ContactForm = ({ noBackground = false }: Props) => {
  // Form Fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [message, setMessage] = useState("");

  // Form Submission
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const submission = {
      firstName,
      lastName,
      email,
      title,
      industry,
      message,
    };

    try {
      const secret = process.env.NEXT_PUBLIC_CONTACT_FORM_SECRET;
      console.log("secret: ", secret);
      if (!secret) {
        throw new Error(
          "There was an error submitting the form. Please again try later."
        );
      }

      const encryptedSubmission = await encryptPayload(submission, secret);
      console.log("encryptedSubmission: ", encryptedSubmission);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(encryptedSubmission),
        }
      );

      // TODO fix error logic in this form to be more comprehensive and to catch more
      if (!response.ok) {
        throw new Error(
          "There was an error submitting the form. Please again try later."
        );
      }

      const result = await response.json();
      if (result.success) {
        // Successful form submission
        setErrorMessage(""); // Clear any existing error
        router.push("/contact/success");
        return;
      } else {
        throw new Error(
          "There was an error submitting the form. Please again try later."
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  };

  return (
    <Card noBackground={noBackground}>
      <form
        className="p-10 flex flex-col items-center gap-10 max-w-125 min-w-100"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap md:flex-nowrap gap-3 items-center">
            <input
              className="w-full"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              className="w-full"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
          <input
            className="w-full"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <div className="flex flex-wrap md:flex-nowrap gap-2 items-center">
            <input
              className="w-full"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Job Title"
              required
            />
            <input
              className="w-full"
              type="text"
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="Industry"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            className="form-control w-full"
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
        </div>

        {!isLoading ? (
          <>
            <Button
              button={{
                style: "primary",
                text: "Send Message",
                type: "submit",
              }}
            />
          </>
        ) : (
          <Button
            button={{
              color: "primary",
              disabled: true,
              style: "primary",
              text: "Sending...",
            }}
          />
        )}
        {errorMessage && <p className="text-(--red) text-sm">{errorMessage}</p>}
      </form>
    </Card>
  );
};

export default ContactForm;
