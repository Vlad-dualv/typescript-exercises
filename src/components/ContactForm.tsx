import { useState } from "react";

interface Form {
    name: string;
    email: string;
    message: string;
}

export default function ContactForm() {

    const [form, setForm] = useState<Form>({name: "", email: "", message: ""})

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        console.log(`Name: ${form.name} Email: ${form.email} Message: ${form.message}`)
        setForm({name: "", email: "", message: ""})
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = e.target
        setForm(prev => ({
            ...prev, [name]: value
        }))
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name
                <input id="name" name="name" type="text" value={form.name} placeholder="Cristiano Ronaldo" onChange={(e) => handleInputChange(e)}/>
            </label>
            <label htmlFor="email">Email
                <input id="email" name="email" type="email" value={form.email} placeholder="cris@gmail.com" onChange={(e) => handleInputChange(e)}/>
            </label>
            <label htmlFor="message">Message
                <input id="message" name="message" type="text" value={form.message} placeholder="Leave a message..." onChange={(e) => handleInputChange(e)}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
}