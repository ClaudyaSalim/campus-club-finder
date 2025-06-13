function About(){
    return <div className="w-full h-[calc(100vh-88px)] p-8 flex flex-col items-center justify-center gap-10 bg-[url(/campus-cover.jpg)] bg-cover">
        <div className="p-8 w-3/4 h-fit flex flex-col items-center justify-center gap-10 bg-white/40 backdrop-blur-md">
            <h1 className="w-fit text-center font-bold text-5xl">What is <b className="font-black">Campus Club Finder</b>?</h1>
            <p className="text-justify opacity-70"><b>Campus Club Finder</b> is a website for active campus students looking for extracurricular activities or simply just search their interests. With this platform that we are building, students are able to explore various clubs and join them. This website was made with the popular React + Vite Framework and Tailwind CSS.</p>
        </div>
    </div>
}

export default About;