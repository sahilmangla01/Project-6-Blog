import React,{useContext,useState,useEffect} from "react";
import { Store } from "./DataStore";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import Footer from "./Footer/Footer";


const Hollywood = ()=>{
    const [contextData] =useContext(Store)
    
    const [loadMore , setLoadMore] = useState(false)

    const loadMoreHandler= ()=>{
        setLoadMore(!loadMore);
    }
    useEffect(() => {
    
        window.scrollTo(0, 0);
      }, []);
    return(
            <><Header/>

        <div className="topStories">
            <div className="topStories__left">
                <h1 className="content__title"> Hollywood</h1>
                {
                    contextData.filter(e=> e.cat==="Hollywood").slice(0,6).map(e=>{
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
                    contextData.filter(e=>  e.cat==="Hollywood").slice(6,10).map(e=>{
                        return(
                            <div key={e.id} className={loadMore ? "TS__Elements " : "TS__Elements loadMore"}>
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
                <div className="load" onClick={loadMoreHandler}>
                        

                       
                        { !loadMore ? <h3  >Load More</h3>:<h3 >Show Less</h3>}</div>
                 </div>
            <div className="topStories__right">
                <h1 className="content__title topPost">Top Posts</h1>
                    
                {
                        contextData.filter(e=>e.cat==="Hollywood").slice(10,11).map(e=>{
                            return(
                                <div key={e.id} className="TP__first">
                                   <NavLink state={{id:e.id , title: e.title}} to={"/content"}> <img className="TP__firstImage" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__firstDescription">
                                      <div className="TPTitle">
                                      <NavLink state={{id:e.id , title: e.title}} to={"/content"} className="heading">  <div className="TP__firstTitle">{e.title}</div></NavLink>
                                      <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                  </div>
                                        <div className="TP__FirstNumber">{e.id -40}</div>

                                    </div>
                                </div>
                            )
                        })
                    }
                
                    {
                        contextData.filter(e=>e.cat==="Hollywood").slice(11,15).map(e=>{
                            return(
                                <div key={e.id} className="TP__Elements">
                                   <NavLink state={{id:e.id , title: e.title}} to={"/content"}> <img className="TP__images" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__description">
                                        <div className="TPTitle second">
                                        <NavLink state={{id:e.id , title: e.title}} to={"/content"} className="heading">  <div className="TP__title ">{e.title}</div></NavLink>
                                      <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                    </div>
                                    </div>
                                        <div className="TP__numbers">{e.id -40}</div>
                                </div>
                            )
                        })
                    }
                
                <div className="advertisement">
                      <img src="https://media.tenor.com/VW4mxkYVimsAAAAC/avengers-end-game.gif" alt="gifs"/>
                                         </div>
            </div>
            
       
        </div>

        
        <Footer/>

        </>
        
    )
}

export default Hollywood;