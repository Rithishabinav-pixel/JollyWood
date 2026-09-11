import React from 'react'
import BlogClient from './BlogClient';
import { publicFetchOptions } from '@/lib/cacheConfig';

async function getBlogs() {
  const response = await fetch(
    "https://www.jollywood.co.in/blog/wp-json/wp/v2/posts?per_page=100&_embed",
    publicFetchOptions()
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.status}`)
  }

  return response.json()
}


export default async function BlogPage() {

   const blogs = await getBlogs()
  return (
    <>
    <BlogClient blogs={blogs} />
    </>
  )
}
