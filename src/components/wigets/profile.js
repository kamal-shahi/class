import React, { useEffect, useState } from "react";
export default function Profile({login, logout, updateUser, session}) {
    //    const user = session.user;
       const [user, setUser] = useState({...session.user});
       const [ edit, setEdit ] = useState(false);
       const [ form, setForm ] = useState({});

        useEffect(()=> {
            setUser({...session.user})
        }, [session]);

        const update = ()=> {
            const payload = {
                ...user,
                ...form
            };
            updateUser(payload);
            setEdit(false);
        }

        return((session.isLoggedin && user) ? 
            <div className="card sticky-top" style={{width:'100%', zIndex: 99}}>
                <img className="card-img-top" src={user.image} alt="Card image"/>
                <div className="card-body">
               {edit ?
                <div className="col-12 p-0 mt-2">
                     <input defaultValue={user.image} onChange={(e)=> setForm({...form, image: e.target.value})}/>
                     <input defaultValue={user.name} onChange={(e)=> setForm({...form, name: e.target.value})}/>
                     <button onClick={update}>Update</button>
                </div>
               : <h4 className="card-title">{user.name} <button onClick={()=> setEdit(true)}>edit</button> </h4>}
                <p className="card-text">Some example text.</p>
                <a href="#" className="btn btn-primary">See Profile</a>
                <a href="#" onClick={logout} className="btn btn-danger ml-2">Logout</a>
                </div>
            </div> :
             <Form login={login}/>
        )
};

const Form = ({ login })=> {
     const [ form, setForm ] = useState({ email: '', password: '' });   

    const onChageText = ({value, name})=> {
        setForm({...form, [name]: value});
    };

    const onSubmit = ()=> {
        if(form.email && form.password){
            login(form);
        }else{
            alert('Enter creds...')
        }
    }

    return(
        <div className="p-2 bg-light col-12">
            <input value={form.email} onChange={(e)=> onChageText({value: e.target.value, name: 'email'})} type={'email'} placeholder="email" className="mt-2"/> 
            <input value={form.password} onChange={(e)=> onChageText({value: e.target.value, name: 'password'})} type={'password'} placeholder="password"  className="mt-2"/> 
            <button onClick={onSubmit} className="btn btn-success mt-2 btn-sm">Login</button>
        </div>
    )
}