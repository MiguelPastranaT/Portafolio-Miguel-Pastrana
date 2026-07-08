import emailjs from "@emailjs/browser";

export interface ContactData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const sendEmail = async (data: ContactData) => {
    return emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
};