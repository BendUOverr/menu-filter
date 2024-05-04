import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='flex gap-10'>
      {categories.map((category, index) => {
        return (
          <button className='hover:bg-[#c59d5f] p-2 duration-300 rounded-lg font-mono' key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories