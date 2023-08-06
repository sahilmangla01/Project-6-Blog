import React,{useContext} from "react";
import "./Home.css"
import { Store } from "./DataStore";
import Header from "../Header";
import RandomComponent from "./HomeComponent/RandomComponent";

import LatestArticle from "./LatestArticle";




const Home = ()=>{
    const [homeData] = useContext(Store)
    const random = Math.floor(Math.random()*homeData.length)
    const random2= Math.floor(Math.random()*homeData.length)
    const random3= Math.floor(Math.random()*homeData.length)
    


    return( 
        <>
        <Header/>
        <div className="Main">
        <div className="Home">
            <div><img className="img1" src={homeData[random].image} alt="homeTop"/></div>
            <div className="twoImages">
            <img className="img2" src={homeData[random2].image} alt="homeTop"/>
            <img className="img2" src={homeData[random3].image} alt="homeTop"/>
            </div>

        </div>

            <div className="random">
            <h1 className="content__title">The Latest</h1>
            <div className="randomContent">
            <RandomComponent/>
            <RandomComponent/>
            <RandomComponent/>
            <RandomComponent/>
            </div>

            <div className="LA">
            <h1 className="content__title latestArticle"> Latest Article</h1>
            <LatestArticle/>
            </div>
            </div>
       
            </div>
        </>
    )
}

export default Home;