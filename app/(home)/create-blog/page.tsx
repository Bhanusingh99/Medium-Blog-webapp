"use client"
import { useState } from "react";


const CreateBlog = () => {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [content,setContent] = useState("");
  const [tag,setTags] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Dev', 'ui-ux', 'Startup', 'Tech'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option:any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return(
    <div className="bg-gray-900  pt-20 pb-5 px-8">
        <h1 className="text-[2.25rem] text-white font-semibold ">Create A Blog</h1>
        <div>
          <p className="text-white text-[1.05rem] mt-5 mb-1">Title</p>
          <input placeholder="Enter your title here" className="w-full 
          py-2 px-2 text-white outline-none border bg-transparent"/>
        </div>

        <div>
          <p className="text-white text-[1.05rem] mt-7 mb-1">Description</p>
          <input placeholder="Enter your title here" className="w-full 
          py-2 px-2 text-white outline-none border bg-transparent "/>
        </div>

        <div>
          <p className="text-white text-[1.05rem] mt-7 mb-1">Content</p>
          <textarea placeholder="Enter your title here" className="w-full 
          py-2 px-2 text-white outline-none border bg-transparent h-24"/>
        </div>

      <div className="dropdown mt-[1.35rem]">
        <h1 className="text-white mb-2">Tags</h1>
      <div className="dropdown-box text-white border py-2 px-2" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : 'Select an option'}
      </div>

      {isOpen && (
        <div className="dropdown-options text-white ">
          {options.map((option) => (
            <div key={option} onClick={() => handleOptionClick(option)} className="border px-2 py-2 mt-1">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>

    <button className="my-8 bg-purple-500 text-white py-2 px-8 rounded-xl">Submit</button>
    </div>
  )
}

export default CreateBlog;