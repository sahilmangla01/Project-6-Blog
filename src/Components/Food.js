import { useContext ,useState} from "react";
import React from "react";
import { Store } from "./DataStore";
import { NavLink } from "react-router-dom";
import Header from "../Header";

const Food = ()=>{
    const [contextData] = useContext(Store); 
    const [loadMore , setLoadMore] = useState(false)

    const loadMoreHandler= ()=>{
        setLoadMore(!loadMore);
    }
    
    return(

        <><Header/>
        <div className="topStories">
        <div className="topStories__left">
            <h1 className="content__title"> Food</h1>
            {
                contextData.filter(e=> e.cat==="Food").slice(0,6).map(e=>{
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
                contextData.filter(e=>  e.cat==="Food").slice(6,10).map(e=>{
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
                    contextData.filter(e=>e.cat==="Food").slice(10,11).map(e=>{
                        return(
                            <div key={e.id} className="TP__first">
                              <NavLink state={{id:e.id , title: e.title}} to={"/content"}> <img className="TP__firstImage" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__firstDescription">
                                      <div className="TPTitle">
                                      <NavLink state={{id:e.id , title: e.title}} to={"/content"} className="heading">  <div className="TP__firstTitle">{e.title}</div></NavLink>
                                  <div style={{fontWeight:"bold" }}>{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                              </div>
                                    <div className="TP__FirstNumber">{e.id -70}</div>

                                </div>
                            </div>
                        )
                    })
                }
            
                {
                    contextData.filter(e=>e.cat==="Food").slice(11,15).map(e=>{
                        return(
                            <div key={e.id} className="TP__Elements">
                               <NavLink state={{id:e.id , title: e.title}} to={"/content"}> <img className="TP__images" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__description">
                                        <div className="TPTitle second">
                                        <NavLink state={{id:e.id , title: e.title}} to={"/content"} className="heading">  <div className="TP__title ">{e.title}</div></NavLink> 
                                  <div style={{fontWeight:"bold" }}>{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                </div>
                                </div>
                                    <div className="TP__numbers">{e.id -70}</div>
                            </div>
                        )
                    })
                }
            
            <div className="advertisement">
                 <img src="https://media4.giphy.com/media/eK1cgTX7xNVSq03vxj/200w.gif?cid=82a1493bhgp6bfv0xunegcd6derlswjfohtg3ps0rywjnkl2&ep=v1_gifs_related&rid=200w.gif&ct=g" alt="giffs"/>
                                     </div>
        </div>
        
   
    </div>

    
    </>



    
    


    
)


        
        

    
        
    

}

export default Food;