import React from "react";

function card({image, name, artist, added , handleClick , index}) {
  return (
    <div className="w-60 px-3 py-2 bg-zinc-300 p-4 relative rounded-md pb-6 m-4 flex">
      <div className="w-20 h-20 bg-red-400  overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div>
        <h1 className="font-semibold text-sm p-1">{name}</h1>
        <h3 className="text-sm">{artist}</h3>
      </div>
      <button onClick={()=>handleClick(index)} className={`${added===false ? "bg-teal-600" :"bg-orange-700"} px-1 -translate-x-[30%] whitespace-nowrap translate-y-4  rounded-full text-white py-1 px-2 text-sm  bottom-0 absolute left-1/2`}>{added===false ? "Added" : "Banned"}</button>
    </div>
  );
}

export default card;
