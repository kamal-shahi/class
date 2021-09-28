import React from "react";

const Modal = ()=> {
    return(
            <div className="modal" id="myModal" style={{zIndex: 99999}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <div className="modal-body">
                    <img data-toggle="modal" data-target="#myModal" width="100%" src={'https://image.cnbcfm.com/api/v1/image/106869987-1618795805885-gettyimages-1312630032-sb3_5306_2021041510407047.jpeg?v=1618795885&w=1600&h=900'}/>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Modal;