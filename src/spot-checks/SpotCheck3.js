import React, { useState, useEffect } from 'react'

export default function SpotCheck3() {
  const [post, setPost] = useState("This is my text")
  const [likes, setlikes] = useState(0)

  const likePost = () => setlikes(likes + 1)

  useEffect(() => {
    document.title = `You have ${likes} likes`
  })


  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <div>{post}</div>
        <button onClick={likePost}>Like</button>
      </div>
    </div>
  )
}