import Card from "./Card"

let cards = [
    {
        image: '/alien.jpg',
        title: 'heading title',
        date: 'date'
    },
    {
        image: '/alien.jpg',
        title: 'heading title',
        date: 'date'
    },
    {
        image: '/alien.jpg',
        title: 'heading title',
        date: 'date'
    },
    {
        image: '/alien.jpg',
        title: 'heading title',
        date: 'date'
    },
    {
        image: '/alien.jpg',
        title: 'heading title',
        date: 'date'
    },
    {
        image: '/alien.jpg',
        title: 'heading title',
        date: 'date'
    },
    {
        image: '/alien.jpg',
        title: 'heading title',
        date: 'date'
    },
    {
        image: '/alien.jpg',
        title: 'heading title',
        date: 'date'
    },
    {
        image: '/alien.jpg',
        title: 'heading title',
        date: 'date'
    },
    {
        image: '/alien.jpg',
        title: 'heading title',
        date: 'date'
    }
]

const VideoDetails = () => {
    return (
        <div className="bg-green-600 flex-1 px-4 py-4">
            <h1 className="text-xl">New<span className="text-red-500">Videos</span></h1>
            <div className="bg-yellow-400 grid grid-cols-3 gap-x-3 gap-y-3">
                {
                    cards.map((video)=>(
                        <Card key={video.title} video={video}/>
                    ))
                }
            </div>
        </div>
    )
}

export default VideoDetails
