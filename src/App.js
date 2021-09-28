import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import MyProfile from './components/wigets/profile';
import NavBar from './components/header';
import Gallery from './components/gallery';
import ContactUs from './components/contact';
import { useEffect, useState } from 'react';
import { users } from './data/datas';
const storage = window.localStorage;

function App() {
  const [ session, setSession ] = useState({ isLoggedin: false, user: { } });

  const checkSession = ()=> {
    const user = storage.getItem('user');
    const parsed = JSON.parse(user);
    if(parsed && parsed.name){
      setSession({...session, isLoggedin: true, user: parsed})
    }else{
      setSession({isLoggedin: false, user: {}})
    }
  }
const logout = ()=> {
  if(window.confirm('Are you sure want to logout ?')){
    storage.removeItem('user');
     checkSession();
  }
}
 
  const login = ({ email, password })=> {
    const user_ = users.find(data => data.email === email);
    const isValid = user_ ? (email===user_.email) && (password === user_.password) : false;
    if(isValid){
      storage.setItem('user', JSON.stringify(user_));
      checkSession();
    }else{
      alert('Username password not matched');
    }
  }
  
  useEffect(()=> {
      // setSession({...session, isLoggedin: true, user: users})
      checkSession()
  }, []);
  const updateUser = (datas)=> {
    storage.setItem('user', JSON.stringify(datas));
    checkSession();
  }

  return (
      <Router>
        {/* navigation bar */}
        <NavBar/>
        {/* end */}
        <div className="container">
              <div className="row m-0">
                <div className="col-9 pl-0">
                      <Switch>
                          <Route exact path="/">
                              <Home/>
                          </Route>
                          <Route path="/contact">
                              <ContactUs/>
                          </Route>
                          <Route path="/profile">
                              <Profile/>
                          </Route>
                          <Route path="/gallery">
                              <Gallery/>
                          </Route>
                        </Switch>
                  </div>
                <div className="col-3 pr-0">
                    {session && session.user && <MyProfile updateUser={updateUser} logout={logout} login={login} session={session}/>}
                    <p className="col-12 p-2 m-0 border rounded mt-2">
                    sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                 </div>
              </div>
        </div>
         <Footer/>
      </Router>
   
  );
}

const Footer = ()=> {
  return(
    <div className="footer col-12 bg-dark text-light p-5 text-center mt-3">
      <p>&copy; kamal shahi</p>
    </div>
  )
}

export default App;
