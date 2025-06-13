import { Link } from "react-router";

function NotFound(){
    return <div className={`w-full h-[calc(100vh-88px)] p-8 flex flex-col items-center justify-center gap-10 bg-[url(campus-cover.jpg)] bg-cover`}>
        <div className="p-8 w-1/2 h-1/2 flex flex-col items-center justify-center gap-10 bg-white/30 backdrop-blur-sm">
            <h1 className="text-center">Oops! The page you're looking for is not found.</h1>
            <button className="w-fit p-4 bg-black text-white"><Link to= "/">Back to Home</Link></button>
        </div>
    </div>
}

export default NotFound;