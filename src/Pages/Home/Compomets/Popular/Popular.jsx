import { useEffect, useState } from "react";
import SectionTitle from "../../../../Componets/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const Popular = () => {
    const [menus,setMenus]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
         const  menus= data.filter(menu=>menu.category==="popular")
         setMenus(menus)
        })
    },[])
    return (
        <div className="mb-10">
          <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
          <div className="grid md:grid-cols-2 gap-4 p-10">
            {
                menus.map(menu=><MenuItem key={menu._id} menu={menu}></MenuItem>)
            }
          </div>
          <button className="btn w-full">SHOW ALL</button>
        </div>
    );
};

export default Popular;