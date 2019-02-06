import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",

            emailValid: true,
            passwordValid: true,
            nameValid: true
        }
    };


    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value}) };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value}) };
    
    onSubmitSignIn = () => {
        fetch(process.env.REACT_APP_BACKEND_ADDRESS + "register", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
            })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange("home");
                } else {
                    switch(user) {
                        case "email invalid":
                            alert("Invalid e-mail address format entered.");
                            break;
                        case "name invalid":
                            alert("Your name should be between 5 and 30 characters, not containing numbers or symbols.");
                            break;
                        case "password invalid":
                            alert("Invalid password: Your password should contain at least 4 characters and at least 1 letter (lower or uppercase) and one number");
                            break;
                        default:
                            break;
                    }
                }
            })
        } 

    render() {
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent  w-100" 
                                type="text" 
                                name="name"  
                                id="name" 
                                onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent  w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent  w-100" 
                                type="password" 
                                name="password"  
                                id="password" 
                                onChange={this.onPasswordChange}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                      this.onSubmitSignIn()
                                    }
                                  }}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick={this.onSubmitSignIn} 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Register" />
                        </div>
                        </div>
                    </main>
                </article>    )
}
}
export default Register;