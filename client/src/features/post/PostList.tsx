import React from 'react'

const PostList = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>console.log(res));
  return (
    <div>PostList</div>
  )
}

export default PostList