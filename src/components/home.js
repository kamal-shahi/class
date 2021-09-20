import React from "react";
import { signup } from "../data/datas";
const Home = ()=> {
    return(
        <div>
           <h1>{signup.title} </h1>
           <small>{signup.subtitle} </small><hr/>
           <form>
               {signup.form.map((form, index)=> {
                   return(
                    <div className={form.wrapperClass} key={index}>
                        {form.type !== 'submit' && <label htmlFor={form.type}>{form.label}</label>}
                        <input type={form.type} className={form.className} id={form.type} aria-describedby="emailHelp" placeholder={form.placeholder}/>
                    </div>
                   )
               })
               }
             </form>
        </div>
    )
  }
export default Home;  