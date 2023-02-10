import '../styles/alert.css'
import React from 'react'
import axios from 'axios' 

const Alert = ({changeAlert}) =>
{
    const [text,setText] = React.useState()
    const [email, setEmail] = React.useState()
    const [isSucces, setSucces] = React.useState(false);
    const [isError, setError] = React.useState(false);
    const [pending, setPendig] = React.useState(false);

    const submitHandler = (event) => {
        setPendig(true);
        event.preventDefault() 
        axios.post('https://mail-sender38.herokuapp.com/api/email',
            {
                data: {
                    email:email,
                    text: text 
                }
            }
           )
            .then(response => {
            setPendig(false)
            setSucces(true);
            }).catch(error => {
                setPendig(false)
                setError(true);
        });

}
    return <div className="MailMeAlert">
        <div className="backGroundBlur" onClick={()=>changeAlert()}>

        </div>
        <div className="MailMeBox">
            {pending && <div className='Pending'>
                Sending...

            </div>}
            {isSucces && <div className='Success'>
                <div className="container">
                    <div className="circle">
                        <i className='bx bx-check'></i>
                    </div>
                    <div className="text">
                        Sended
                    </div>

                </div>
                

            </div>}
            {isError && <div className='Error'>
                <div className="container">
                    <div className="circle">
                        <i className='bx bx-x' ></i>
                    </div>
                    <div className="text">
                        Something went wrong
                    </div>

                </div>

                

            </div>}
            <div className="text">
                Mail me  :
            </div>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">
                    Enter your email please
                    <input type="text" id='email' placeholder='email' onChange={(event)=>setEmail(event.target.value)}/>
                </label>
                <textarea cols="30" rows="10" onChange={(event)=>setText(event.target.value)}></textarea>
                <button className='Send'> Send</button>
            </form>

        </div>
        
    </div>
}

export default Alert;


