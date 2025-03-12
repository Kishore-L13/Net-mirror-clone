import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {Array(8).fill("").map((_, index) => (
        <div key={index} className="w-60 h-40 bg-gray-300 animate-pulse rounded-lg"></div>
      ))}
    </div>
  )
}

export default Shimmer