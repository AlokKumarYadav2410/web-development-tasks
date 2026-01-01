import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import ImageSlider from './Components/ImageSlider/ImageSlider';
import Card from './Components/Card/Card';
import SearchBar from './Components/SearchBar/SearchBar';


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

      {/* Prop Drilling */}
      <SearchBar handleSearch={handleSearch} search={search} getData={getData}  />
      
      <Card filteredUsers={filteredUsers} getBgColor={getBgColor}/>

      <ImageSlider handlePrev={handlePrev} currentIndex={currentIndex} visibleImages={visibleImages} handleNext={handleNext}/>

    </div>
  )
}

export default App
