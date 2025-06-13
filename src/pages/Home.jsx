import { Link } from "react-router";

function Home(){
    return <div className={`w-full h-[calc(100vh-88px)] p-8 flex flex-col items-center justify-center bg-[url(/campus-cover.jpg)] bg-cover`}>
        <div className="p-8 w-fit h-fit flex flex-col items-center justify-center gap-10 bg-white/40 backdrop-blur-md md:w-1/2">
            <h1 className="w-fit text-center font-bold text-5xl">Welcome to the <b className="font-black">Campus Club Finder!</b></h1>
            <p className="w-fit text-center opacity-70">Explore a wide variety of clubs. Don't miss out the fun!</p>
            <button className="w-fit p-4 bg-black text-white font-bold"><Link to="/clubs">Check it out!</Link></button>
        </div>
    </div>
}

export default Home;