import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/commentSlice'
import { generateRandomName } from '../Utils/helper'
import { makeRandomMessage } from '../Utils/helper'

const LiveComment = () => {
const dispatch = useDispatch()
const [livemessage,setLivemessage] =useState("")
const chatMessage = useSelector(store=>store.chat.messages)
    useEffect(()=>{
    const i =setInterval(()=>{
        console.log("Api polling")
        dispatch(
            addMessage({
                name:generateRandomName(),
                text:makeRandomMessage(20)
    })
        )
    }, 2000);
    return ()=> clearInterval(i);
},[])
  return (
    <>
    <div className="w-full h-[460px] ml-2 p-2 
    bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">   
   <div> {
   chatMessage.map((d,index)=>(
     <Chat key={index} name={d.name} text={d.text}/>
    ))
    }
    </div>
    </div>
    <form
     className="w-full p-2 ml-2  border-slate-300"
     onSubmit={(e) => {
       e.preventDefault();
       dispatch(
        addMessage({
          name: "Kishore",
          text:livemessage,
        })
      );
      setLivemessage("");
     }
    }
    >
    <input className='px-2 w-60' 
    type='text' value={livemessage}
    placeholder='Comments'
    onChange={(e) => {
        setLivemessage(e.target.value)
    }} 
    />
    <button type='submit' className='px-4 mx-2 font-bold
     bg-blue-400 rounded-md cursor-pointer' >send</button>
    </form>
</> 
  )
}

export default LiveComment