import React from "react";

export default function Hobbies(){

    return(

        <div id="hobbies" class="bg-[#B2B2B2] h-auto my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="border-4 w-25  border-dashed px-4 py-2">Hobbies</h3>
        </div>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Reading</summary>
          <p><b>The gods are not to blame</b></p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Sporting</summary>
          <p>Football</p>
          <p>Athletics</p>
          <p>Volleyball</p>
          <p>Tennis</p>
          <p>Cricket</p>
          
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Singing</summary>
          <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
            pavilions, award-winning fireworks and seasonal special events.</p>
        </details>
        </div>
    )
}