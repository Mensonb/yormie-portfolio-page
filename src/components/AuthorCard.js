import React, {useState} from "react";

export default function AuthorCard() {
  // definding our useState
  const [isActive, setIsActive] =useState({
    active: true,
    name: "education"
  })

  return (

      <div id="intro" class="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
        <div id="avatar" class="flex justify-center py-2">
          <img class="w-40" src="https://api.multiavatar.com/MBY.svg " alt="JB image" />
        </div>
        <div id="content" class="prose lg:prose-xl px-2">
          <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Yormie Menson B</h1>
          <small class="text-center block text-md text-gray-800">Writer, Teacher &amp; Software Engineer</small>
          <p class="text-justify text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis vero voluptates vitae rerum eos non laboriosam deleniti voluptatibus ipsum blanditiis
            expedita architecto tempore necessitatibus quisquam vel ipsam corporis, nemo repudiandae. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Modi asperiores, amet omnis inventore aliquid nam. Autem
            obcaecati ut ipsa rem temporibus nostrum, quibusdam optio, itaque culpa ad impedit aperiam quasi.</p>

            <div className="p-6 max-w-full mx-auto">
            <ul className="flex justify-center items-center gap-4">

              <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "education" && 'bg-[#FF8F56]'} `}>
                <a href="" id="education" className="font-roboto font-bold text-xl text-[#E7EFF3]">Education</a>
              </li>

              <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "work" && 'bg-[#FF8F56]'} `}>
                <a href="" id="work " className="font-roboto  text-xl " >Work</a>
              </li>

              <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "hobbies" && 'bg-[#FF8F56]'} `}>
                <a href="" id="hobbies" className="font-roboto  text-xl ">Hobbies</a>
              </li>

            </ul>
          </div> 
        </div>
      </div>
  )
}