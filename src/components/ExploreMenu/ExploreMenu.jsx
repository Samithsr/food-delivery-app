import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
    return(
        <div className="explore-menu" id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusantium ipsum et, numquam corrupti quia debitis, officiis ducimus quibusdam, id optio cupiditate odit temporibus magni expedita molestiae beatae impedit aspernatur accusamus! Natus, aliquid obcaecati molestias nihil recusandae hic nulla sequi eos doloremque ab cumque libero debitis, ut deleniti nemo fugit.</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index) => {
                    return (
                        <div key={index} className="explore-menu-list-item">
                            <img src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}


export default ExploreMenu