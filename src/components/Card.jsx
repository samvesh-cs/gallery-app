export default function Card({img}){
    return(
        <a href={img.url}>
        <div className="h-68 w-85  ">
          <img className="h-full w-full object-cover rounded-xl transition-transform hover:scale-105 duration-300 " src={img.download_url} />
        </div>
      </a>
    )
}