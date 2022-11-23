// import { getDoc } from "firebase/firestore/lite";
// import React, { useEffect, useState } from "react";
// import { FirebaseDB } from "../db/firebase";


// export default function PostAuthorCards({authorid}){
// const [author, setAuthor]= useState({})
// useEffect(()=>{
//     return async()=>{
//         const ref=doc(FirebaseDB, "users", authorid);
//         const docSnap=await getDoc(ref);
//         if(docSnap.exists){
// const author=docSnap.data;

// console.log({author})
//         }else{
//             console.log("No such document");
//         }
//     }
// }

// )

//     return(
//         <>
//          <div class="flex-shrink-0">
//                           <a href="#">
//                             <span class="sr-only">{`${author.firstnam} ${author.lastname}`}</span>
//                             <img
//                               class="h-10 w-10 rounded-full"
//                               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                               alt=""
//                             />
//                           </a>
//                         </div>
//                         <div class="ml-3">
//                           <p class="text-sm font-medium text-gray-900">
//                             <a href="#" class="hover:underline">
//                               Roel Aufderehar
//                             </a>
//                           </p>
//                           <div class="flex space-x-1 text-sm text-gray-500">
//                             <time datetime="2020-03-16">Mar 16, 2020</time>
//                             <span aria-hidden="true">&middot;</span>
//                             <span>6 min read</span>
//                           </div>
//                         </div>
//         </>
//     )
// }