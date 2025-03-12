import React from 'react'
import Button from '../Utils/Button'

const List = ["All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines"]
const ButtonList = () => {
  return (
    <div className="flex space-x-2 p-2">
      {List.map((category, index) => (
        <Button key={index} className="px-4 py-2 bg-gray-200 rounded-md" name={category} />
      ))}
    </div>
  )
}

export default ButtonList