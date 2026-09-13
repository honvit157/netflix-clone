function Navbar(){
    return(
        <nav className="bg-black flex justify-between px-8 py-4  ">
            <div >
                <h1 className="text-red-600 font-bold text-4xl ">NETFLIX</h1>
            </div>
            <div className="text-white space-x-6 font-bold text-1.5xl ">
                <span className="cursor-pointer hover:text-red-400">Home</span>
                <span className="cursor-pointer hover:text-red-400">Search</span>
            </div>
        </nav>
    )
}
export default Navbar