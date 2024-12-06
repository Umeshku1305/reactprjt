


import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full p-4 bg-zinc-100 flex items-center justify-between'>
        <h3 className='bg-red-200 px-3 py-2 '>Sheryians Coding School Students</h3>
        <div className='px-3 py-1 bg-orange-400 flex gap-3 rounded-md '>
            <h3>Banned</h3>
            <h1>{data.filter(item=> item.added).length}</h1>
        </div>
    </div>
  )
}

export default Navbar
