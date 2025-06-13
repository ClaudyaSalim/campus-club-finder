import { Link } from "react-router";

function NotFound(){
    return <div className={`w-full h-[calc(100vh-88px)] p-8 flex flex-col items-center justify-center gap-10 bg-[url(/campus-cover.jpg)] bg-cover`}>
        <div className="p-8 w-fit md:w-1/2 h-fit flex flex-col items-center justify-center gap-10 bg-white/40 backdrop-blur-md">
            <h1 className="w-fit text-center font-bold text-5xl">Oops!</h1>
            <p className="opacity-70 text-center">The page you're looking for is not found.</p>
            <button className="w-fit p-4 bg-black text-white font-bold"><Link to= "/">Back to Home</Link></button>
        </div>
    </div>
}

export default NotFound;