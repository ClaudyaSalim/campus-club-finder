import { Link } from "react-router";

function Home(){
    return <div className={`w-full h-[calc(100vh-88px)] p-8 flex flex-col items-center justify-center bg-[url(campus-cover.jpg)] bg-cover`}>
        <h1 className="w-fit">Welcome to the Campus Club Finder!</h1>
        <p className="w-fit">There are so many clubs to explore</p>
        <button className="w-fit p-4 bg-black text-white"><Link to="/clubs">Check it out!</Link></button>
    </div>
}

export default Home;