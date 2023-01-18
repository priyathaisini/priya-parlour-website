import React from 'react'
import BlogCenter from '../pages/blogCenter'
import BlogMain from '../pages/blogMain'
import Footers from '../pages/footers'
import Navbar from '../pages/navbar'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <BlogMain/>
      <BlogCenter/>
      <Footers/>
    </div>
  )
}

export default Blog
