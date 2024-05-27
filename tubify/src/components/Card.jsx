

const Card = ({videos}) => {
    console.log(videos)
    return (
        <div className="bg-yellow-400 grid grid-cols-3 gap-x-3 gap-y-3">
            {/* <div className="bg-slate-400 h-[440px]">
                <div className="h-[220px] bg-cover bg-center" style={{ backgroundImage: `url(${videos.image})` }}>
                </div>
                <h1>{videos.title}</h1>
            </div> */}
        </div>

    )
}

export default Card
