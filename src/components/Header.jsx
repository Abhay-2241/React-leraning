export const Title = () => {
    return (
        <div className="title"> 
        <a href="https://imgs.search.brave.com/f1WUB_x4J-NRwNQLTYuTR8Lk3Kj3z-MvLdp_S1mocvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q5LzY3/L2E0L2Q5NjdhNDhl/MzMwMjA2MTJmZmY4/YTYxY2IyNGFkZWE0/LmpwZw"></a>
        </div>
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