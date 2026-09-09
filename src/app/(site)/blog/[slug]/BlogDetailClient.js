
import React from "react"
import Link from "next/link"
import Image from "next/image"
import style from "./BlogDetail.module.css"
import Button from "../../components/ui/Button"

export default function BlogDetailClient({ post, recentBlogs = [] }) {
  const content = post?.content?.rendered || ""

  const featuredMedia =
    post?._embedded?.["wp:featuredmedia"]?.[0]

  const largeImage =
    featuredMedia?.media_details?.sizes?.large || featuredMedia



  return (
    <>
      <section className={`common_section ${style.blog_section}`}>

        <div className={style.blogTitle}>
        </div>

        <div className={`container ${style.container}`}>

          <div className={style.blogContent}>

            <h1>
              {post?.title?.rendered || ""}
            </h1>

            {largeImage?.source_url && (
              <Image
                className={style.featureImg}
                src={largeImage.source_url}
                height={largeImage.height || 600}
                width={largeImage.width || 1000}
                alt={
                  featuredMedia?.alt_text ||
                  post?.title?.rendered ||
                  ""
                }
              />
            )}

            <div
              className={style.content}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />

          </div>

          <aside id={style.sidebar}>

<h2 className="white">Recent Posts</h2>

            {recentBlogs.map((blog) => {
              const featuredImage =
                blog?._embedded?.["wp:featuredmedia"]?.[0]
                  ?.media_details?.sizes?.large ||   blog?._embedded?.["wp:featuredmedia"]?.[0]

              return (
                <div
                  className={style.recentBlog}
                  key={blog.id}
                >

                  {featuredImage?.source_url && (
                    <Image className={style.featureImage}
                      src={featuredImage.source_url}
                      width={featuredImage.width || 1024}
                      height={featuredImage.height || 576}
                      alt={
                        blog?.title?.rendered || ""
                      }
                    />
                  )}

                  <h3 className="white">
                    {blog?.title?.rendered || ""}
                  </h3>

                  <Button
                    className="link white"
                    text="Read more"
                    href={`/blog/${blog.slug}`}
                    ariaLabel={`Read more about ${blog?.title?.rendered || ""}`}
                  />

                </div>
              )
            })}

          </aside>

        </div>
      </section>
    </>
  )
}

