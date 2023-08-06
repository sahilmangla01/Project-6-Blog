import React from 'react'
import { Store } from "../DataStore";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../Home.css"


const RandomComponent = () => {
    const [content] = useContext(Store)
    const random = Math.floor(Math.random()*content.length)
    return(

        <> 
                {
                            content.filter(e=>e.id === random).map(e=>{
                                return(
                                    <div className='randomComponents' key={e.id} >
                               <NavLink state={{id:e.id , title: e.title ,val:0}} to={"/content"}> <img className="random__images" src={e.image} alt={e.title}/></NavLink>
                                
                                <div>
                                <NavLink className="content__heading" state={{id:e.id , title: e.title, val:0}} to={"/content"}><div className="random__Title">{e.title}</div></NavLink>
                                <div className="random__profile">
                                    
                                    <div className="random__description">{e.description}</div>
                                     
                    </div>
                                    <div >{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                
                                    </div>
                            </div>
                                )
                            })
                        }
        </>

    )
}

export default RandomComponent
