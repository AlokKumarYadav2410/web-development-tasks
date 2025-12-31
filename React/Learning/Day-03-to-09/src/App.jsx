import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';


const App = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  function getBgColor() {
    const clr1 = Math.floor(Math.random() * 256);
    const clr2 = Math.floor(Math.random() * 256);
    const clr3 = Math.floor(Math.random() * 256);

    return `rgb(${clr1}, ${clr2}, ${clr3})`
  }

  const getData = async () => {
    let response = await axios("https://jsonplaceholder.typicode.com/users");

    console.log(response.status)

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    } else {
      console.log("Data fetched successfully");
    }
    setUsers(response.data);
  }

  const getImages = async () => {
    let res = await axios("https://picsum.photos/v2/list?limit=10");
    setImages(res.data.map(image => image.download_url));
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

  const visibleImages = images.slice(currentIndex, currentIndex+visibleCount);

  function handleNext(){
    if(currentIndex+visibleCount < images.length){
      setCurrentIndex(currentIndex+1);
    }
  }

  function handlePrev(){
    if(currentIndex > 0){
      setCurrentIndex(currentIndex-1);
    }
  }

  useEffect(() => {
    getData();
    getImages();
  }, [])

  return (
    <div className='bg-gray-900 min-h-screen w-full flex flex-col gap-4 p-4'>

      <div className='flex gap-4'>
        <input
          type="text"
          placeholder='search name'
          className='p-2 text-xl border rounded-lg w-full bg-amber-50 outline-emerald-200 active:outline-emerald-600 transition-all duration-200'
          onChange={handleSearch}
          value={search}
        />

        <button onClick={getData} className='px-4 py-2 w-fit bg-emerald-400 rounded-md active:scale-95 cursor-pointer'>Search</button>
      </div>
      <div className='flex flex-wrap gap-2'>{filteredUsers.map((user) => {
        return <div key={user.id} className='border-2 border-gray-200 px-2 py-4 rounded-lg grow' style={{ background: getBgColor() }}>
          <h1 className='text-lg font-semibold text-gray-700'>{user.name}</h1>
          <h2 className='text-md font-semibold text-gray-600'>{user.website}</h2>
          <p className='text-sm text-gray-500'>{user.email}</p>
        </div>
      })}</div>


      <div className='flex w-full justify-center items-center gap-4'>
        <div onClick={handlePrev} className='px-2 sm:px-4 py-2 text-xs sm:text-sm bg-emerald-500 rounded-lg text-amber-100 active:scale-95 cursor-pointer'>Left</div>
        <div className='flex gap-4 justify-center'>
          {visibleImages.map((img, idx) => (
            <div className='w-full relative' key={idx}>
              <h2 className='absolute top-2 left-2 text-amber-200'>{img.id}</h2>
              <img src={img} alt="" className='w-full object-cover object-center rounded-xl bg-amber-300' />
            </div>
          ))}
        </div>
        <div onClick={handleNext} className='px-2 sm:px-4 py-2 text-xs sm:text-sm bg-emerald-500 rounded-lg text-amber-100 active:scale-95 cursor-pointer'>Right</div>
      </div>

    </div>
  )
}

export default App
