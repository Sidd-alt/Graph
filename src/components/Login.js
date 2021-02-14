import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleEmail(event){
        this.setState({email: event.target.value})
    }

    handlePassword(event){
        this.setState({password: event.target.value})
    }

    handleClick(event){
        event.preventDefault()  
        if(this.state.email==='John' && this.state.password==='12345'){
            this.props.handler1(true)
        }
        else if(this.state.email==='Micky' && this.state.password==='98765'){
            this.props.handler2(true)
        }
        else return
    }

    render(){
        return (
            <div >
                <main  className="pa3 black-60 mt6  mh4">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0 tc">Log In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                                <input onChange={this.handleEmail} className="pa2 input-reset ba bg-black hover-white w-100" type="text" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                                <input onChange={this.handlePassword} className="b pa2 input-reset ba bg-black hover-white w-100" type="password" name="password"  id="password"/>
                            </div>
                        </fieldset>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <input  onClick={this.handleClick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Log in"/>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}

export default Login;