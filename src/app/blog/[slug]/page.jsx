import { addPost } from "@/libs/actions";
import { getSinglePost } from "@/libs/data";
import React from "react";


// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const singleBlogPost = async ({ params }) => {

  const { slug } = params;

  const post = await getData(slug)

  // Fetching without an API
  // const post = await getSinglePost(slug);

  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
            <p class="text-center font-bold text-green-500 md:text-left">
              Who we are
            </p>
              <form action={addPost}>
                <input type="text" name="title"/>
                <input type="text" name="desc"/>
                <input type="text" name="userId"/>
                <input type="text" name="slug"/>
                <input type="text" name="img"/>
                <button>add post</button>
              </form>
            <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
             {post.title}
            </h1>

            <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
             {post.desc}
            </p>
          </div>
          <div>
            <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                src={post.img}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div class="md:col-span-2">
            <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
              About us
            </h2>

            <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              veritatis a suscipit similique cum obcaecati maxime, fugit officia
              sunt. Laudantium est repellendus, necessitatibus totam, deleniti
              distinctio aliquid assumenda dolore voluptas molestiae
              perspiciatis temporibus ex ea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleBlogPost;
