
import { getPosts } from "@/libs/data";
import React from "react";

// FETCH DATA WITH AN API
// const getData = async () => {
//     const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});
  
//     if (!res.ok) {
//       throw new Error("Something went wrong");
//     }
  
//     return res.json();
//   };

const page = async () => {

    const posts = await getPosts();
    console.log("post from database", posts)
  return (
    <section class="py-20">
        
      <h1 class="mb-12 text-center font-sans text-5xl font-bold">
        Recent Posts
      </h1>
      <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">

      {posts?.map((post)=>( 
          
       
        <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
          <a href="#" class="block h-full w-full">
            <img
              class="max-h-40 w-full object-cover"
              alt="featured image"
              src={post.img}
            />
            <div class="w-full bg-white p-4">
              <p class="text-md font-medium text-indigo-500">Nature</p>
              <p class="mb-2 text-xl font-medium text-gray-800">
              {post.title}

              </p>
              <p class="text-md font-light text-gray-400">
              {post.desc}
               
              </p>
              <div class="justify-starts  mt-4 flex flex-wrap items-center">
                <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #js
                </div>
                <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #icefactory
                </div>
              </div>
            </div>
          </a>
        </article>

))}
      </div>
    </section>
  );
};

export default page;
