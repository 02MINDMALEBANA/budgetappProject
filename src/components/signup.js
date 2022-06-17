import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'


function SignUp () {
    const btn ={
        width: '150px',
        height: '30px',
        marginTop:'3%'
    }

    let history =useHistory();

    const Register = (()=>{
        history.push("/home") ;
    })
    return(
        <div className="container">
            <h1>Register account here</h1>
            <input type="email" placeholder="Enter your Email" /><br></br>
            <input type="password" placeholder="Enter your Password" />

            <button onClick={Register} style={btn}> Sign Up</button>

        </div>
    )
}

export default SignUp