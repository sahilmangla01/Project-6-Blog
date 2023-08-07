import React, { useContext, useState } from "react";
import { Store } from "./DataStore";
import "./style.css"
import { NavLink } from "react-router-dom";
import Header from "../Header";


const Bollywood = () =>{
    
    const [contextData] =useContext(Store)
    
    const [loadMore , setLoadMore] = useState(false)

    const loadMoreHandler= ()=>{
        setLoadMore(!loadMore);
    }
    
    return(
        
            <>
                <Header/>
            <div className="topStories">
                <div className="topStories__left">
                    <h1 className="content__title"> Bollywood</h1>
                    {
                        contextData.filter(e=> e.id<=6).map(e=>{
                            return(
                                <div key={e.id} className="TS__Elements">
                                   <NavLink state={{id:e.id , title: e.title}} to={"/content" }> <img className="TS__images" src={e.image} alt={e.title}/></NavLink>
                                    <div className="TS__headAndDDescpr">
                                   <NavLink className="heading" state={{id:e.id , title: e.title}} to={"/content"}> <h2 >  {e.title}</h2> </NavLink>
                                    <div className="TS__description">{e.description}</div>

                                    <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    
                    {
                        contextData.filter(e=> e.id>6 && e.id<=10).map(e=>{
                            return(
                                <div key={e.id} className={loadMore ? "TS__Elements " : "TS__Elements loadMore"}>
                                   <NavLink state={{id:e.id , title: e.title}} to={"/content/" }> <img className="TS__images" src={e.image} alt={e.title}/></NavLink>
                                    <div className="TS__headAndDDescpr">
                                   <NavLink state={{id:e.id , title: e.title}} className="heading" to={"/content"}> <h2 >  {e.title}</h2> </NavLink>
                                    <div className="TS__description">{e.description}</div>

                                    <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    <div className="load" onClick={loadMoreHandler}>
                        

                       
                       { !loadMore ? <h3  >Load More</h3>:<h3 >Show Less</h3>}</div>
                </div>
                <div className="topStories__right">
                    <div>                    <h1 className="content__title topPost">Top Posts</h1>
                        
                    {
                            contextData.filter(e=>e.id === 11).map(e=>{
                                return(
                                    <div key={e.id} className="TP__first">
                                       <NavLink state={{id:e.id , title: e.title}} to={"/content"}> <img className="TP__firstImage" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__firstDescription">
                                      <div className="TPTitle">
                                      <NavLink state={{id:e.id , title: e.title}} to={"/content"} className="heading">  <div className="TP__firstTitle">{e.title}</div></NavLink>
                                          <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                      </div>
                                            <div className="TP__FirstNumber">{e.id -10}</div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    
                        {
                            contextData.filter(e=>e.id>11 && e.id<=15).map(e=>{
                                return(
                                    <div key={e.id} className="TP__Elements">
                                       <NavLink state={{id:e.id , title: e.title}} to={"/content"}> <img className="TP__images" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__description">
                                        <div className="TPTitle second">
                                        <NavLink state={{id:e.id , title: e.title}} to={"/content"} className="heading">  <div className="TP__title ">{e.title}</div></NavLink>
                                          <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                        </div>
                                        </div>
                                            <div className="TP__numbers">{e.id -10}</div>
                                    </div>
                                )
                            })
                        }
                        </div>

                    
                    <div className="advertisement">
                          <img src="https://media.tenor.com/yEXKdGnL7OkAAAAd/rrrmovie-ramcharan.gif" alt="gifs"/>
                                             </div>
                </div>
                
           
            </div>

        
            </>


    
        
    )
}

export default Bollywood;