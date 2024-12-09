import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo = {
        name: data.name,
        email: data.email,
        message: data.message
    }
    try {
      await axios.post("https://getform.io/f/ajjjqdga", userInfo)
      toast.success("Your message has been sent");
    } catch (errors) {
        console.log(errors)
        toast.error("Something went wrong")
    }
  }

  return (
    <>
    <div name="Contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
        <h1 className='text-xl md:text-3xl font-semibold mb-5'>Contact Me</h1>
        <span>Please fill out the form below to contact me.</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/ajjjqdga" method="POST" 
            className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold'>Send Your Message</h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>FullName</label>
                    <input {...register("name", { required: true })} className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                    type="text" id="name" name="name" placeholder="Enter Your Fullname" />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Email Address</label>
                    <input {...register("email", { required: true })} className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                    type="text" id="name" name="email" placeholder="Enter Your Email Address" />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Message</label>
                    <textarea {...register("message", { required: true })} className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                    type="text" id="name" name="message" placeholder="write your message here" />
                    {errors.message && <span>This field is required</span>}
                </div>
                <button type="submit" className='bg-green-800 text-white rounded-xl px-3 py-2'>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact