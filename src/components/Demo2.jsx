import React, { useCallback, useMemo, useState } from 'react'
import { findPrime, square } from '../Utils/helper'

const Demo2 = () => {
    const [number,setNumber] = useState(0)
    const [toogle,setToogle] = useState(false)
    const prime = useMemo (()=>findPrime(number),[number])
   // const squar = square(number)
    const squar = useCallback(square(number),[number])
  return (
<div
      className={
        "m-4 p-2 w-90 h-90 border border-black " +
        (toogle && "bg-gray-900 text-white")
      }
    >        
    <h1 className='font-bold text-xl'>Demo</h1>
        <button 
        className='bg-blue-700 rounded-md' 
        onClick={()=>setToogle(!toogle)}>Toggle</button>
        <div>
        <input type='number'
        className={'px-2 m-2 border border-slate-950'+(toogle && "border-slate-200")}
        value={number} 
        onChange={(e)=>setNumber(e.target.value)}/>
        </div>
        <span className='flex font-bold'>prime:{prime}</span>
        <span className='font-bold'>square={squar}</span>
    </div>
  )
}

export default Demo2