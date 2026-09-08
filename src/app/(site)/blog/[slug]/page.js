import React from 'react'
import { notFound } from 'next/navigation'
import BlogDetailClient from './BlogDetailClient'

async function getBlog(slug) {
  const response = await fetch(
    `https://www.jollywood.co.in/blog/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    {
      next: {
        revalidate: 3600,
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch blog: ${response.status}`)
  }

  const posts = await response.json()
  return posts[0] || null
}

async function getRecentBlogs() {
  const response = await fetch(
    "https://www.jollywood.co.in/blog/wp-json/wp/v2/posts?per_page=6&_embed",
    {
      next: {
        revalidate: 3600,
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.status}`)
  }

  return response.json()
}

export default async function page({ params }) {
  const { slug } = await params

  const post = await getBlog(slug)

  if (!post) {
    notFound()
  }

  const recentBlogsRaw = await getRecentBlogs()
  const recentBlogs = recentBlogsRaw
    .filter((blog) => blog.slug !== slug)
    .slice(0, 5)

  return (
   <>
   <BlogDetailClient post={post} recentBlogs={recentBlogs} />
   </>
  )
}
