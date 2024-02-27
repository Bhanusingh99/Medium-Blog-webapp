"use client"
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  })
})

function CreateBlog() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Dev', 'ui-ux', 'Tech', 'Start-up'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option:any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  const editor = useRef(null);
	const [content, setContent] = useState('');

  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(selectedOption,content)  
  }


  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-[5.7rem] bg-gray-900 px-12">
      <h1 className='text-[2.5rem] text-white font-semibold'>Create A Blog</h1>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your title" {...field} className="border-white text-white"/>
              </FormControl>
              <FormDescription className="text-white">
                This is your public display name.
              </FormDescription>
              <FormMessage className="text-red-600"/>
            </FormItem>
          )}
        />

        <JoditEditor
              ref={editor}
              value={content}
              className="bg-transparent"
              config={{
                height: 400,
                // Set height in pixels within config
                // ... other config options
              }}
              //@ts-ignore
              tabIndex={10} // tabIndex of textarea
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={newContent => setContent(newContent)}
            />


      <div className="dropdown">
      <div className="dropdown-box text-white border w-full py-2 px-4" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : 'Choose Tag'}
      </div>

      {isOpen && (
        <div className="dropdown-options bg-gray-800 w-full cursor-pointer">
          {options.map((option,index) => (
            <div key={index} onClick={() => handleOptionClick(option)} className='text-white my-1 px-2 py-1 
            cursor-pointer border'>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>

        <Button type="submit" className="bg-purple-500 hover:bg-purple-600 px-6 
        rounded-xl text-white">
          Submit
        </Button>
      </form>
    </Form>
    </>
  )
}

export default CreateBlog;