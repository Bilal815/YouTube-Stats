import React from 'react'

function Tags(props) {
  var tags = props.tags.map((tag, i)=>{
    return <li>{tag}</li>
  })
  return(
    <div className="w-1/2 px-2 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Tags</div>
        <div className="text-gray-700 text-base">{tags}</div>
      </div>
    </div>
  )
}

export default Tags;