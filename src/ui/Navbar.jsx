import {useState} from "react"

function Navbar(){
     const [searchQuery,setSearchQuery]=useState("");
     const handleSearch=(e)=>{
        e.preventDefault();
       

     }
    return(
       
        <nav className="bg-black flex justify-between px-8 py-4  ">
            <div >
                <h1 className="text-red-600 font-bold text-4xl ">NETFLIX</h1>
            </div>
            <div  className="flex text-white space-x-6 font-bold text-1.5xl ">
                <span className="cursor-pointer hover:text-red-400">Home</span>
                <form onSubmit={handleSearch } >
                    <input type="text" placeholder="Enter" className="font-medium border border-gray-400 rounded"
                     value={searchQuery}
                     onChange={(a)=>setSearchQuery(a.target.value)}
                    
                    />
                    <button className="hover:text-red-400 cursor-pointer">Search</button>
                </form>
            </div>
        </nav>
    )
}
export default Navbar