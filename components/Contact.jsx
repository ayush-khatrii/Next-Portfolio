"use client";
import {
	Button,
	Container,
	Flex,
	Heading,
	TextArea,
	TextField,
} from "@radix-ui/themes";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success("Message sent successfully!", {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<Container size='4' id='contact' className='my-40'>
			<Heading align='center' mb='9' size='7'>
				Get in touch
			</Heading>
			<form ref={form} onSubmit={sendEmail}>
				<Flex justify='center' direction='column' gap='4' px='8'>
					<TextField.Root>
						<TextField.Input
							type='text'
							name='user_name'
							required
							size='3'
							placeholder='Enter your name'
						/>
					</TextField.Root>
					<TextField.Root>
						<TextField.Input
							type='email'
							name='user_email'
							required
							size='3'
							placeholder='Enter your email'
						/>
					</TextField.Root>
					<TextArea required size='3' name='message' placeholder='Messages' />
					<Button type='submit' size='3' variant='classic'>
						Send
					</Button>
					<ToastContainer />
				</Flex>
			</form>
		</Container>
	);
};

export default Contact;
