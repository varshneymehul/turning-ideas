import Image from "next/image";
import React from "react";

const BlogPage = ({ title, subheading, blogpost, img }) => {
  return (
    <main className="pt-[20vh]">
      <h1>{title}</h1>
      <h2>{subheading}</h2>
      <Image src={img} alt="blog" width={1000} height={600} />
      <p>{blogpost}</p>
    </main>
  );
};

export default BlogPage;
