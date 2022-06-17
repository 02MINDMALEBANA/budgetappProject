import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'


function Login () {

    const btn ={
        width: '150px',
        height: '30px',
        marginTop:'3%'
    }

    let history =useHistory();

    const login = (()=>{
        history.push("/home") ;
    })
    return(
        <div className="container">
            <h1>Login</h1>
            <input type="email" placeholder="Enter your Email" /><br></br>
            <input type="password" placeholder="Enter your Password" />

            <button style={btn} onClick={login}> Login</button>

            <span> Don't have an account?</span> {" "}
            <span>
                <Link to="/sign-up"> Create an account here</Link>
               </span>

        </div>
    )
}

export default Login
