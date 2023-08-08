import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Store } from "./DataStore";
import { useContext } from "react";
import "./Content.css"
import { useNavigate } from "react-router-dom";
import ContentFooter from "./ContentFooter";



const Content = ()=>{
    const [content] = useContext(Store)
   
   const Navi = useNavigate()
    
    const id  = useLocation().state.id
    const val = useLocation().state.val
    console.log(val)
    const back = content[id-1].cat.toLowerCase()
    useEffect(() => {
    
        window.scrollTo(0, 0);
      }, []);
    
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
                            <h5>Aug 01, 2023 . 10 min before</h5>
                        </div>
                    </div>
                <button onClick={()=>val === 0 ?Navi("/") :Navi("/"+back )} className="back">Back</button>
                </div>

                
        </div>
            
           <ContentFooter category = {content[id-1].cat} idValue = {content[id-1].id}/>
             
             </div>
             </>

    )
}

export default Content;