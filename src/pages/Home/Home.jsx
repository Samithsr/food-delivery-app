import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'


const Home = () => {

    const [category, setCategory] = useState("All")

    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory} />
        </div>
    )
}

export default Home























// import React, { useState } from 'react'
// import "./Home.css"
// import { assets } from '../../assets/assets'

// const Home = () => {

//     const [data, setData] = useState("menu")
    

//     return(
//         <div className="navbar-links">
//            <img src={assets.logo} alt="" className='sami' />
//             <ul className='navbar-menus'>
//                 <li onClick={()=>setData("home")}  className={data==="home"?"active":""}>home</li>
//                 <li onClick={()=>setData("contact-us")} className={data==="contact-us"?"active":""}>contact us</li>
//                 <li onClick={()=>setData("mobile-app")} className={data==="mobile-app"?"active":""}>mobile-app</li>
//                 <li onClick={()=>setData("menu")} className={data==="menu"?"active":""}>menu</li>
//             </ul>

//             <div className="navbar-side">
//                 <img src={assets.search_icon} alt="" />
//                 <div className="navbar-list">
//                     <img src={assets.basket_icon} alt="" />
//                     <div className="logo"></div>
//                 </div>
//                 <button>sign up</button>
//             </div>
//         </div>
//     )
// }

// export default Home