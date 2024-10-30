import './ContentCard.css'

export default function ContentCard(props) {
    return (
        <div className="content-card p-4 pb-6 bg-white rounded-md shadow-sm md:hover:shadow-xl group">
            <div className="content-card-image mb-4 relative brightness-[0.9] group-hover:brightness-[1.05] duration-200">
                <img className="card-image rounded-md" src={props.src} alt={props.alt} />
                <p className="content-title absolute bottom-10 w-full text-center text-xl font-medium text-white line-clamp-2 uppercase">{props.title}</p>
            </div>
            <div>
                <p className="text-base md:text-base line-clamp-4">{props.children}</p>
                <p className="card-link text-base text-blue-700 font-bold pt-2">Read more...</p>
            </div>

        </div>
    )
}