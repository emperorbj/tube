import SideBar from './SideBar';

import { useEffect, useState } from "react";

import { fetchFromAPI } from '../utils/fetch';

import Card from "./Card"

// let cards = [
//     {
//         image: '/alien.jpg',
//         title: 'heading title',
//         date: 'date'
//     },
//     {
//         image: '/alien.jpg',
//         title: 'heading title',
//         date: 'date'
//     },
//     {
//         image: '/alien.jpg',
//         title: 'heading title',
//         date: 'date'
//     },
//     {
//         image: '/alien.jpg',
//         title: 'heading title',
//         date: 'date'
//     },
//     {
//         image: '/alien.jpg',
//         title: 'heading title',
//         date: 'date'
//     },
//     {
//         image: '/alien.jpg',
//         title: 'heading title',
//         date: 'date'
//     },
//     {
//         image: '/alien.jpg',
//         title: 'heading title',
//         date: 'date'
//     },
//     {
//         image: '/alien.jpg',
//         title: 'heading title',
//         date: 'date'
//     },
//     {
//         image: '/alien.jpg',
//         title: 'heading title',
//         date: 'date'
//     },
//     {
//         image: '/alien.jpg',
//         title: 'heading title',
//         date: 'date'
//     }
// ]
const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);
    useEffect(() => {
        setVideos(null);
    
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
        }, [selectedCategory]);
    return (
        <div className=" w-full h-screen bg-blue-600">
            <div className='flex gap-4 mt-1'>
                    <SideBar  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    <div className="bg-green-600 flex-1 px-4 py-4">
                        <h1 className="text-xl"><span className="text-red-500">{selectedCategory} </span></h1>
                        {/* <div className="bg-yellow-400 grid grid-cols-3 gap-x-3 gap-y-3">
                        {
                            cards.map((video)=>(
                            
                            ))
                        } */}
                        <Card videos={videos}/>
                        
            
                    </div>
            </div>
        </div>
    )
}

export default Feed
