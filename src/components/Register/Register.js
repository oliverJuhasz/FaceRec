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

    emailValidation = () => {
        let emailRe = /^([a-zA-Z.\-#0-9])+@[a-zA-Z]+.[a-z]{2,4}$/
        return emailRe.test(this.state.email)
    }

    nameValidation = () => {
        let nameRe = /^([a-zA-Z.\-#_*]){5,30}$/
        return nameRe.test(this.state.name);
    }


    passValidation = () => {
        let passRe = /(?=^[a-zA-Z0-9!&#@]{4,16}$)(?=^.*[a-zA-Z]{1,})(?=^.*[0-9]{1,})/
        return passRe.test(this.state.password)

    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value}) };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value}) };
    
    onSubmitSignIn = () => {
        if (this.emailValidation() && this.passValidation() && this.nameValidation()) {
            fetch("https://nameless-thicket-90145.herokuapp.com/register", {
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
                }
            })
        } else {
            this.setState.emailValid = this.emailValidation();
            this.setState.nameValid = this.nameValidation();
            this.setState.passValidation = this.passValidation();
        }
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