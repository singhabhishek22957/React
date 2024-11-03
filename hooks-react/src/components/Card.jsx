import React from 'react'

export default function Card({channel , someObj,image="Image not found"}) {
  // funtion arguments : {channel , someObj}
  // console.log();
  // console.log(channel);
  // console.log(someObj["username"]);
  // console.log(someObj.username);
  
  
  
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 space-y-4">
  <div className="w-full h-48 bg-gray-300 rounded-lg">
    <img alt={image} src={image } />
  </div>
  <div className="text-xl font-bold">Card Title</div>
  <div className="text-gray-700 text-base">
    This is a simple card component created with Tailwind CSS. It can be used to display information in a concise and visually appealing way.
  </div>
  <div className="text-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
  </div>
</div>
    </div>
  )
}
