import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/navSlice'
import { Search_api } from '../Utils/Constent';
import { cacheResults } from '../Utils/searchSlice';

const Header = () => {
  const [searchquery,setSearchquery] = useState("")
  const [suggestsearch,setSuggestsearch] = useState([])
  const [showSuggestion,setShowsuggestion] = useState(false)
  const searchcache = useSelector((store) => store.search)
  useEffect(()=>{
const timer = setTimeout(() => {
  if (searchcache[searchquery]) {
    setSuggestsearch(searchcache[searchquery])
  }else{
    getSearchquery();
  }
}, 200);
return () =>{
  clearTimeout(timer)
}
  },[searchquery])
  const getSearchquery=async()=>{
    console.log("search",searchquery)
const data = await fetch(Search_api+searchquery)
const json = await data.json()
//console.log(json[0])
dispatch(
  cacheResults({
    [searchquery]:json[1]
  })
)
setSuggestsearch(json[1])
  }
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
  dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
     <div className="flex col-span-1">
        <img onClick={()=>toggleMenuHandler()}
        className="h-8 cursor-pointer"
       
  alt='hamburger' 
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
  />   </div>
       
      <div className="flex col-span-1">
        <img className="h-8 mx-2 cursor-pointer"
        alt="youtubelogo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </div>
 <div className="col-span-10">
<input type='text'
value={searchquery}
placeholder='Search'
onChange={(e)=>setSearchquery(e.target.value)}
onFocus={()=>setShowsuggestion(true)}
onBlur={()=>setShowsuggestion(false)}
className="px-5 w-2/3 border border-gray-400 p-2 rounded-l-full" /> 
<button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍 </button>
   {showSuggestion && (
  <div className='fixed bg-white py-2 px-2 w-[37rem] shadow-md rounded-lg'>
  <ul>
   {suggestsearch.map((suggest) => (
          <li key={suggest} className= "py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {suggest}</li>
    ))}  
    </ul> </div> )} 
    <span className='m-2 px-5 py-2 rounded-full border border-gray-400 bg-gray-100'>🎙</span>
</div>   
  <div className="flex items-center gap-4">
    <button className="px-5 py-2 bg-gray-100 border border-gray-400 rounded-full hover:bg-gray-200">
      ➕ Create
    </button>
    <button className="text-xl cursor-pointer hover:text-gray-600">
      🔔
    </button>
    <img 
      className="h-8 w-8 rounded-full border border-gray-400" 
      alt="User Profile" 
      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
    />
  </div>
        </div>
  )
}

export default Header