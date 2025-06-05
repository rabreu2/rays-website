import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs.sendForm(
            "service_2atzytq", //service id
            "template_lkmd2g8", //template id,
            form.current,
            "_wqJhJEFA7NPd_5ud"
        ).then(
            () => {
                setSent(true);
                setError(false);
                form.current?.reset();
            },
            () => {
                setSent(false);
                setError(true);
            }
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="space-y-4 text-white">
            <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="bg-[#0a0a0a] border border-gray-300 text-sm p-2 w-full rounded-md focus:outline-none focus:border-[#56c495] focus:ring-1 focus:ring-[#56c495] transition-colors duration-500 ease-in-out"
            />
            <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="bg-[#0a0a0a] border border-gray-300 text-sm p-2 w-full rounded-md focus:outline-none focus:border-[#56c495] focus:ring-1 focus:ring-[#56c495] transition-colors duration-500 ease-in-out"
            />
            <textarea
                name="message"
                placeholder="Message"
                required
                className="bg-[#0a0a0a] border border-gray-300 text-sm p-2 w-full h-32 rounded-md focus:outline-none focus:border-[#56c495] focus:ring-1 focus:ring-[#56c495] transition-colors duration-500 ease-in-out"
            />
            <button
                type="submit"
                className="text-[#56c495] bg-[#0a0a0a] border border-gray-300 rounded-md px-4 py-2 rounded hover:bg-[#56c495] hover:text-[#0a0a0a] hover:border-[#56c495] transition-colors duration-500 ease-in-out"
            >
                Submit
            </button>

            {sent && <p className="text-[#56c495]">Message sent successfully!</p>}
            {error && <p className="text-red-500">Failed to send. Please try again.</p>}
        </form>
    )
}

export default ContactForm;