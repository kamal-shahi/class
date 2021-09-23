import React from "react";
import Modal from "./wigets/Modal";

export default function Gallery(){
    return(
       <div className="col-12 p-0">
           <h1 className="p-4 mb-3 bg-secondary text-white font-weight-bold text-center">My Gallery</h1>
           <div className="row m-0">
                {
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((item, index)=> {
                        return(
                            <div className="col-3 p-0 border" key={index}>
                                <img data-toggle="modal" data-target="#myModal" width="100%" src={'https://image.cnbcfm.com/api/v1/image/106869987-1618795805885-gettyimages-1312630032-sb3_5306_2021041510407047.jpeg?v=1618795885&w=1600&h=900'}/>
                            </div>
                        )
                    })
                }
            </div>
            <Modal/>
       </div>
    )
}