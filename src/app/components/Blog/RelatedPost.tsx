import { Post } from "common-types";
import React from "react";
import Image from "next/image";
import urlFor from "lib/urlFor";
import Link from "next/link";

type Props = {
  posts: Post[];
  dict: any;
};

function RelatedPost({ posts, dict }: Props) {
  return (
    <>
      <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9">
        <h4 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
          {dict.oneBlog.relatedBlog}
        </h4>
        {posts.slice(0, 5).map((post) => (
          <div key={post._id}>
            <div className="flex xl:flex-nowrap flex-wrap gap-4 2xl:gap-6 mb-7.5">
              <div className="relative max-w-30 w-30 h-18">
                <Link
                  href={`/${dict.lang}/blog/${post.slug.current}`}
                  className="block relative aspect-[368/239]"
                >
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.author.name}
                      fill
                    />
                  ) : (
                    "No image"
                  )}
                </Link>
              </div>
              <div>
                <h5 className="font-medium text-md text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-300">
                  <Link href={`/${dict.lang}/blog/${post.slug.current}`}>
                    {" "}
                    {post.title.slice(0, 40)}
                  </Link>
                </h5>
                <p className="text-sm mt-2">
                  {post.description
                    ? `${post.description.slice(0, 100)}...`
                    : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RelatedPost;
