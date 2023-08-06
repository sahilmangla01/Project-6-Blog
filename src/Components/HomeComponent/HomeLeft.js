import React from 'react'
import "../Home.css"
import { useContext } from 'react'
import { Store } from '../DataStore'
import { NavLink } from 'react-router-dom'


const HomeLeft = () => {
    const [contextData] =useContext(Store)
    
  
    const random = Math.floor(Math.random()*contextData.length)+1
  return (
    <>
        <div className="topStories__left">
                    
                    {
                        contextData.filter(e=> e.id===random).map(e=>{
                            return(
                                <div key={e.id} className="TS__Elements">
                                   <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content" }> <img className="TS__images" src={e.image} alt={e.title}/></NavLink>
                                    <div className="TS__headAndDDescpr">
                                   <NavLink className="heading" state={{id:e.id,val:0 , title: e.title}} to={"/content"}> <h2 >  {e.title}</h2> </NavLink>
                                    <div className="TS__description">{e.description}</div>

                                    <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    
                    
                </div>
    
    </>
  )
}

export default HomeLeft
