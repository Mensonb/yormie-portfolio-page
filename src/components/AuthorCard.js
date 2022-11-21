import React, {useState} from "react";

export default function AuthorCard({isActive, setIsActive}) {

function handleActive(e){
e.preventDefault();
setIsActive({
  active: true,
  name:e.target.id
})
}

  // definding our useState: after copying to app.js, delete this line of code

  // const [isActive, setIsActive] =useState({
  //   active: true,
  //   name: "education"
  // })

  return (

      <div id="intro" class="bg-[#3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
        <div id="avatar" class="flex justify-center py-2">
          <img class="w-40" src="https://api.multiavatar.com/Star.svg " alt="JB image" />
        </div>
        <div id="content" class="prose lg:prose-xl px-2">
          <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Yormie Menson B</h1>
          <small class="text-center block text-md text-gray-800">Writer, Teacher &amp; Software Engineer</small>
          <p class="text-justify text-lg text-gray-800">“Hi, I am Yormie, a student of Wuxi University, China. I'm seeking a role which allows me to
continue learning and perfecting my skills as I provide high-quality work, and encourages me to
flourish as a Information Technology technician..</p>

            <div className="p-6 max-w-full mx-auto">
            <ul className="flex justify-center items-center gap-4">

              <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "education" && 'bg-[#FF8F56]'} `}>
                <a href="" id="education" onClick={handleActive} className="font-roboto font-bold text-xl">Education</a>
              </li>

              <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "work" && 'bg-[#FF8F56]'} `}>
                <a href="#work" id="work" onClick={handleActive} className="font-roboto font-bold text-xl " >Work</a>
              </li>

              <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "hobbies" && 'bg-[#FF8F56]'} `}>
                <a href="#hobbies" id="hobbies" onClick={handleActive} className="font-roboto font-bold text-xl ">Hobbies</a>
              </li>
            </ul>
          </div> 
        </div>
      </div>
  )
}