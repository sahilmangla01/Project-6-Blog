import React,{useContext} from "react";
import "./Home.css"
import { Store } from "./DataStore";
import Header from "../Header";
import RandomComponent from "./HomeComponent/RandomComponent";
import { NavLink } from "react-router-dom";
import LatestArticle from "./LatestArticle";
import Footer from "./Footer/Footer";




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
            <div><NavLink state={{id:homeData[random].id , title: homeData[random].title ,val:0}} to={"/content"}><img className="img1" src={homeData[random].image} alt="homeTop"/></NavLink></div>
            <div className="twoImages">
            <NavLink state={{id:homeData[random2].id , title: homeData[random2].title ,val:0}} to={"/content"}><img className="img2" src={homeData[random2].image} alt="homeTop"/></NavLink>
            <NavLink state={{id:homeData[random3].id , title: homeData[random3].title ,val:0}} to={"/content"}><img className="img2" src={homeData[random3].image} alt="homeTop"/></NavLink>
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

            <Footer/>
        </>
    )
}

export default Home;