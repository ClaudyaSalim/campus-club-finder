import { Link } from "react-router";

function NotFound(){
    return <div className={`w-full h-[calc(100vh-88px)] p-8 flex flex-col items-center justify-center gap-10 bg-[url(campus-cover.jpg)] bg-cover`}>
        <h1>Oops! The page you're looking for is not found.</h1>
        <button className="w-fit p-4 bg-black text-white"><Link to= "/">Back to Home</Link></button>
    </div>
}

export default NotFound;