import React from "react";
import { Link } from "react-router-dom";
import { carousel, insp, intro, gallery, signup } from "../data/datas";
import Carousel from "./wigets/carousel";

const Home = ()=> {
    
    return(
        <div className="col-12 p-0">
                <Carousel data={carousel}/>
                <MyIntro data={intro}/>
                <Inspiration data={insp}/><hr/>
                <Gallery data={gallery}/>
        </div>
    )
  }
export default Home;  

const MyIntro = ({data})=> {
    const { title, description } = data;
    return(
        <div className="col-12 p-0">
            <TitleHeader title={title}/>
            <p>{description}</p>
        </div>
    )
}


const Inspiration = ({ data })=> {
    const { title, documents } = data;
    return(
        <div className="col-12 p-0">
            <TitleHeader title={title}/>
            <div className="row m-0">
                {documents.map((item, index)=> {
                    const { img, desc } = item;
                    return(
                        <Card className="col-3 pl-0" key={index} src={img} description={desc}/>
                    )
                })

                }
            </div>
        </div>
    )
}

export const Card = ({src, description, className})=> {
    return(
        <div className={className}>
            <img width="100%" src={src}/>
            {description && <p>{description}</p>}
        </div>
    )
}

const Gallery = ({data})=> {
    return(
        <div className="col-12 p-0">
            <TitleHeader title="My Gallery" href={'/gallery'}/>
            <div className="row m-0">
                {data.map((gal, index)=> {
                    return(
                        <Card src={gal} className="col-4 p-0" key={index}/>
                    )
                })
                }
            </div>
        </div>
    )
}


const TitleHeader = ({title, href})=> {
    return(
        <div className="row m-0 py-2">
            <h5 className="m-0 font-weight-bold mr-auto">{title}</h5>
            {href && <Link to={href}>More</Link>}
        </div>
    )
}

// <form>
// {signup.form.map((form, index)=> {
//     return(
//      <div className={form.wrapperClass} key={index}>
//          {form.type !== 'submit' && <label htmlFor={form.type}>{form.label}</label>}
//          <input type={form.type} className={form.className} id={form.type} aria-describedby="emailHelp" placeholder={form.placeholder}/>
//      </div>
//     )
// })
// }
// </form>