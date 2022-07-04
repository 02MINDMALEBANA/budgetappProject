import {useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'
import {useHistory} from 'react-router-dom'
import {auth} from '../config/firebase'
import 'react-toastify/dist/ReactToastify.css';
// import{ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import { async } from '@firebase/util'

function ForgotPassword(){
    const [email, setEmail] = useState('')
    const onChange =  (e) => setEmail(e.target.value)
  

    let history =useHistory();

    const forgotmyPassword = (()=>{
        sendPasswordResetEmail(auth, email).then(()=>{
            toast.success('email was sent')
            alert('email with reset link was sent')
            // console.log('email was sent')

      

         

        }).catch((err)=>{
            toast.error('Could not send reset eemail')
            console.log(err);
            alert(err)

        })

       
    })

  
    return(
        <div className='container'>
            <h1>Forgot Password</h1>
              < input type='email' placeholder='Enter Your Email Address'  value={email} onChange={onChange}/><br></br>
              
                <button className='signInButton' onClick={forgotmyPassword}> send email</button><br></br>
                <Link className='forgotpasswordLink' to="/">
                    Login
                </Link><br></br>

           
        </div>
    )
}

export default ForgotPassword;