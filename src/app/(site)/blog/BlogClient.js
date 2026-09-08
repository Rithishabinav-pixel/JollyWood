
"use client"

import React from "react"
import style from "./Blog.module.css"
import Image from "next/image"
import Button from "../components/ui/Button"

export default function BlogClient({ blogs = [] }) {
  return (
    <>
      {/* Hero section */}
      <section className={`hero_section ${style.hero_section}`}>
        <div className="container">
          <h1 className="title common_heading white">
            Blogs
          </h1>
        </div>
      </section>

      {/* Blogs section */}
      <section
        className={`common_section ${style.blogs_section}`}
      >
        <div
          className={`container section_container ${style.container}`}
        >
          <div className={style.cards}>

            {blogs.length === 0 ? (
              <p className="white">
                No blogs found.
              </p>
            ) : (
              blogs.map((blog) => {
                const title = blog.title?.rendered || ""

                const description =
                  blog.excerpt?.rendered
                    ?.replace(/<[^>]*>/g, "")
                    .trim() || ""

                const image =
                  blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/assets/images/blog-placeholder.jpg"

                return (
                  <div
                    className={style.card}
                    key={blog.id}
                  >
                    <div className={style.image}>
                      <Image
                        src={image}
                        width={420}
                        height={526}
                        alt={title}
                      />
                    </div>

                    <div className={style.content}>
                      <h3 className={`${style.title} white`}>
                        {title}
                      </h3>

                      <p className="white">
                        {description}
                      </p>

                      <Button
                        href={blog.link}
                        text="Read More"
                        className="link white"
                      />
                    </div>
                  </div>
                )
              })
            )}

          </div>
        </div>
      </section>
    </>
  )
}

