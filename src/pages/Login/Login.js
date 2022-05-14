import IconTwitter from "../../assets/img/icontwit.png";
import React, { useRef } from "react";
import { Context } from "../../components/Context";
 

const Login = () =>{

    const {setToken,getTime,month} = React.useContext(Context);

    const gmailVal = useRef();
    const passVal = useRef();

    const addToken = (e) => {
		e.preventDefault();
		setToken({
			gmail: gmailVal.current.value.trim(),
			pass: passVal.current.value.trim(),
            joined: getTime()
		});
	};

    return (
        <>
            <section className="login">
                <div className="login-wrapper">
                    <img className="login-icon" src={IconTwitter} alt="twitter icon" />

                    <form className="form" onSubmit={addToken} autoComplete="off" >
                        <label className="form-text" >Log in to Twitter</label>
                        <input ref={gmailVal} className="form-username" type="email" name="username" aria-label="type your Phone number, email address" placeholder="Phone number, email address" minLength="4" required/>
                        <input ref={passVal} className="form-password" type="password" name="password" aria-label="type your Password" placeholder="Password" minLength="5" required />
                        <button className="form-btn" type="submit">Log In</button>
                    </form>
                    <div className="form-bottom">
                        <a href="#link">Forgot password?</a>
                        <a href="#link">Sign up to Twitter</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;