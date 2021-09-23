import React from "react";
export default function Carousel({ data }) {
    
        return(
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    {data.map((item, index)=> {
                        return(
                            <li data-target="#demo" key={index} data-slide-to={index} className={`${index===0 ?'active':''}`}></li>
                        )
                    })
                    }
                </ul>
                <div className="carousel-inner">
                    {data.map((item, index)=> {
                        return(
                            <div className={`carousel-item ${index===0 ?'active':''}`} key={index}>
                               <img width="100%" style={{height: '300px', objectFit: 'cover'}} src=  {item} alt="Los Angeles"/>
                            </div>
                        )
                    })

                    }
                </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
        )
}