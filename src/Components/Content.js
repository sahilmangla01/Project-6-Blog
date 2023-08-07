import React from "react";
import { useLocation } from "react-router-dom";
import { Store } from "./DataStore";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Content.css"
import { useNavigate } from "react-router-dom";



const Content = ()=>{
    const [content] = useContext(Store)
   
   const Navi = useNavigate()
    
    const id  = useLocation().state.id
    const val = useLocation().state.val
    console.log(val)
    const back = content[id-1].cat.toLowerCase()
    
    return(
        <> 
            <div className="contentHeader">
            <div onClick={()=>Navi('/')} className="contentHeadtitle">
        <span className="content__The">The </span> 
        Siren</div>

        <div className="getStarted">
            Get Started
        </div>
            </div>
       
        <div className="contentMain">
        <div>

                <div className="uptop">
                
                <div className="display ">
                <img className="clapping" src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/clap-icon.png" alt="clap"/>
                <h3>9.3k claps</h3></div>
                
                <div className="display ">
                <img className="clapping" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoXe1wmQI1Z325EDgNtLngLvKxw6Efy2dDvih6aqJw9OZfU_hhnelADzFV-XdvPlriXY&usqp=CAU" alt="clap"/>
                <h3>Share </h3>
                </div>
                
                </div>
               

            
                <div className="content">
                <h1 className="contentTitle">{content[id-1].title}</h1>
                <div className="content__user">
                    <img className="icons" src="https://webstockreview.net/images/facebook-instagram-twitter-icons-png-12.png" alt="icons"/>
                    <div className="content__profile">
                        <img className="profileIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsINewnG4nrTvE5ndRNUzUrRU5dTqWknJGzQ&usqp=CAU" alt="profile"/>
                        <div className="userName"><div>Sahil Mangla</div>
                            <h5>Aug 01, 2023</h5>
                        </div>
                    </div>
                </div>
                <img className="content__image" src={content[id-1].image} alt="klfs"/>
                <p className="content__text">{content[id-1].long_description}</p>
               
               <div className="display">
               <img className="clapping" src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/clap-icon.png" alt="clap"/>
                <h3>9.3k claps</h3>
               </div>
               

                <div className="content__profile profile2">
                <img className="profileIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsINewnG4nrTvE5ndRNUzUrRU5dTqWknJGzQ&usqp=CAU" alt="profile"/>
                        <div className="userName2">
                            <h5>Written By</h5>
                            <div>Sahil Mangla</div>
                            <h5>Aug 01, 2023</h5>
                        </div>
                    </div>
                <button onClick={()=>val === 0 ?Navi("/") :Navi("/"+back )} className="back">Back</button>
                </div>

                
        </div>
            
           <div className="footer">
                <div className="content__footer">
                    <h1>More From The Siren</h1>
                    <div className="footer__elements">
                        {
                            content.filter(e=>e.id>=76 && e.id<80).map(e=>{
                                return(
                                    <div className="footer__3Elements" key={e.id} >
                               <NavLink state={{id:e.id , title: e.title}} to={"/content"}> <img className="content__images" src={e.image} alt={e.title}/></NavLink>
                                
                                <NavLink className="content__heading" state={{id:e.id , title: e.title}} to={"/content"}><div className="content__Title">{e.title}</div></NavLink>
                                <div className="content__profile">
                                    <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5648d0b6-d5e3-4f90-a1b0-6156c92a7695&api_key=CometServer1&access_token=1690817370_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_ad3f691f7a3c36763f0dae78c710dd2898b66c33" alt="profile"/>
                                    <div className="userName"><div>Sahil Mangla</div>
                                     <h5>Aug 01, 2023</h5>
                                </div>
                    </div>
                                
                                
                            </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>  
             
             </div>
             </>

    )
}

export default Content;