export const Title = () => {
    return (
         
        <img className="logo" src="https://imgs.search.brave.com/Up_EfhZ5O9ySvc3lavd_ilul5jTxrOz2YFvOUxJSnIg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/NTEyMzIyMC92ZWN0/b3IvbGV0dGVyLWst/aWNvbi1vbi1yZWQt/YmFja2dyb3VuZC13/aXRoLXNoYWRvdy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/U0thUEg5bWFzaHRh/cy1oUktTMjF2V1RD/WTg3RTM2ZGxDOXdP/dkhJbjd4Zz0" alt="logo" /> 
        
        )
}
 const Header = () => {
    return (
         <div className=" header"> 
         <Title/>
         <div className="nav-bar">
            <ul>
                <li>Home</li>
                <li>about</li>
                <li>offers</li>
            </ul>
         </div>
         </div> 
           )
}
export default Header;