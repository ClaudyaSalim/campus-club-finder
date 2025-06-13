import { NavLink } from "react-router";

function Navbar(){

    const linkClass = (isActive) => isActive? `font-bold`:`font-normal hover:font-bold`; 

    return <nav className="w-full p-8 sticky top flex flex-row justify-center gap-20 shadow-md">
        <NavLink to="/" className={({isActive}) => linkClass(isActive)} end>Home</NavLink>
        <NavLink to="/clubs" className={({isActive}) => linkClass(isActive)}>Clubs</NavLink>
        <NavLink to="/about" className={({isActive}) => linkClass(isActive)}>About</NavLink>
    </nav>
}

export default Navbar;