import React,{useState } from 'react'
import HomeLeft from './HomeComponent/HomeLeft'
import LoadMore from './HomeComponent/LoadMore'
import { useContext } from 'react'
import { Store } from './DataStore'
import { NavLink } from 'react-router-dom'


const LatestArticle = () => {

    const [content] = useContext(Store)
    const [loadMore , setLoadMore] = useState(false)
    const loadMoreHandler= ()=>{
        setLoadMore(!loadMore);
    }
    const random = Math.floor(Math.random()*content.length) +1
    const random2 = Math.floor(Math.random()*content.length) +1
    const random3= Math.floor(Math.random()*content.length) +1
    const random4= Math.floor(Math.random()*content.length) +1
    const random5= Math.floor(Math.random()*content.length) +1
  return (
    <div className='latestArticleMain'>
       <div className='leftdisp'>
        <div>
       <HomeLeft/>
        <HomeLeft/>
        <HomeLeft/>
        <HomeLeft/>

        <LoadMore value ={loadMore} />
        <LoadMore value ={loadMore} />
        <LoadMore value ={loadMore} />
        <LoadMore value ={loadMore} />
       
                    <div className="homeLoad" onClick={loadMoreHandler}>
                        

                       
                       { !loadMore ? <h3  >Load More</h3>:<h3 >Show Less</h3>}</div>
                       </div>
        <div className='imgdiv'>
        {
                        content.filter(e=> e.id===random).map(e=>{
                            return(
                                <div key={e.id} className="TS__Elements">
                                   <NavLink state={{id:e.id ,val:0, title: e.title}} to={"/content" }> <img className="img3" src={e.image} alt={e.title}/></NavLink>
                                    
                                    
                                </div>
                            )
                        })
                    }
        </div>
       </div>

        <div className="topStories__right">
            <div className="advertisement">
                       <img src='https://cdn.dribbble.com/users/5297140/screenshots/13995477/media/3769cfb75e2e53734862cc0a3bc1c732.gif' alt='gifs'/>
                                             </div>
                    <div>                    <h1 className="content__title topPost">Top Posts</h1>
                        
                    {
                            content.filter(e=>e.id === random).map(e=>{
                                return(
                                    <div key={e.id} className="TP__first">
                                       <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"}> <img className="TP__firstImage" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__firstDescription">
                                      <div className="TPTitle">
                                      <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"} className="heading">  <div className="TP__firstTitle">{e.title}</div></NavLink>
                                          <div className='HomeCompFoot'>{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                      </div>
                                            <div className="TP__FirstNumber">1</div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    
                        {
                            content.filter(e=>e.id === random2).map(e=>{
                                return(
                                    <div key={e.id} className="TP__Elements">
                                       <NavLink state={{id:e.id ,val:0, title: e.title}} to={"/content"}> <img className="TP__images" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__description">
                                        <div className="TPTitle second">
                                        <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"} className="heading">  <div className="TP__title ">{e.title}</div></NavLink>
                                          <div className='HomeCompFoot'>{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                        </div>
                                        </div>
                                            <div className="TP__numbers">2</div>
                                    </div>
                                )
                            })
                        }
                        {
                            content.filter(e=>e.id === random3).map(e=>{
                                return(
                                    <div key={e.id} className="TP__Elements">
                                       <NavLink state={{id:e.id ,val:0, title: e.title}} to={"/content"}> <img className="TP__images" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__description">
                                        <div className="TPTitle second">
                                        <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"} className="heading">  <div className="TP__title ">{e.title}</div></NavLink>
                                          <div className='HomeCompFoot'>{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                        </div>
                                        </div>
                                            <div className="TP__numbers">3</div>
                                    </div>
                                )
                            })
                        }
                        {
                            content.filter(e=>e.id === random4).map(e=>{
                                return(
                                    <div key={e.id} className="TP__Elements">
                                       <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"}> <img className="TP__images" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__description">
                                        <div className="TPTitle second">
                                        <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"} className="heading">  <div className="TP__title ">{e.title}</div></NavLink>
                                          <div className='HomeCompFoot'>{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                        </div>
                                        </div>
                                            <div className="TP__numbers">4</div>
                                    </div>
                                )
                            })
                        }
                        {
                            content.filter(e=>e.id === random5).map(e=>{
                                return(
                                    <div key={e.id} className="TP__Elements">
                                       <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"}> <img className="TP__images" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__description">
                                        <div className="TPTitle second">
                                        <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content"} className="heading">  <div className="TP__title ">{e.title}</div></NavLink>
                                          <div className='HomeCompFoot'>{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                        </div>
                                        </div>
                                        <div className="TP__numbers">5</div>
                                    </div>
                                )
                            })
                        }
                        </div>

                    
                    
                </div>
                
           
           
    </div>
  )
}

export default LatestArticle
