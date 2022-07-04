import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';
// import AddItem from './components/addItem';
// import DisplayTransaction from './components/displayTransaction';
import Home from './components/home';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import ForgotPassword from './components/forgotPassword';

import {collection, getDocs} from 'firebase/firestore';
// import BrowserRouter, {BrowserRouter as Router , Switch , Route} from 'react-router-dom/BrowserRouter';
// ReactDOM.render((
//   <BrowserRouter basename={process.env.PUBLIC_URL}>
//     <App />
//   </BrowserRouter>
// ), ...)




function App() {


  const [transaction, setTransaction] = useState ([]);

  useEffect(()=>{


  })

  useEffect( () => {
    
    console.log(transaction);
  }, [transaction])

  const addTransaction=((_amount, _item, _transactionType)=>{

    setTransaction((item)=> [...item, {
      id:item.length,
      amount:_amount,
      item:_item,
      transactionType:_transactionType


    }])

    console.log(transaction);

  })
  return (
    //<BrowserRouter basename={process.env.PUBLIC_URL}>
    // basename="02MINDMALEBANA/budgetappProject"

    <Router basename='budgetappProject'>

      <Switch>
        <Route  path="/" exact component={Login}></Route>
        {/* <Route exact path="/" render={() => <Login />}></Route> */}
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/forgotPassword" component={ForgotPassword}></Route>

        <Route path="/home">
          <Home list={transaction}  add= {addTransaction}/>
        </Route>

      </Switch>

    </Router>
    
    // <div>

    //   {/* <DisplayTransaction list={transaction} />
    //   <AddItem   add= {addTransaction} /> */}
    //   <Home list={transaction}  add= {addTransaction}/>
     
    // </div> 
  
  );
}

export default App;
