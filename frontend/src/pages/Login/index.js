import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getUser} from "../../services/userService";
import './login.scss';
import { Row, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import MapContainer from '../../components/MapContainer/MapContainer';
import Footer from '../../components/Footer/Footer';
import Background from '../../components/Background/Background';

class Login extends Component {
    //set state of Login
    state={find:false,submitted:false};

    /** find user
     * If user is verified successfully,put user info into localStorage
     * @param event
     * @returns {Promise<void>}
     */
    findUser=async (event)=>{
        event.preventDefault();
        this.setState({submitted:true});
        const{email,password}=this;
        const {data}=await getUser(email.value);
        if(data.length===0 || data[0].Password!==password.value)//if user doesn't exist or password doesn't match
            return;
        this.setState({find:true});
        localStorage.setItem("user",email.value);
        localStorage.setItem("password",password.value);
        this.props.getUser();
    }

    render() {
        const{find,submitted}=this.state;
        return (
            <div>
                <Background/>
                <Row className="Login">
                    <form onSubmit={this.findUser}>
                        <span style={{display: submitted && !find?'block':'none'}}>E-mail or password is wrong.</span>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="text" name="email" placeholder="Enter your email" inputRef={c=>this.email=c}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" name="password" placeholder="Enter your password"  inputRef={c=>this.password=c}/>
                        </FormGroup>
                        <p></p>
                        <Button type="submit" bsStyle="primary">Sign-In</Button>
                        <p></p>
                        <span>Don't have account?<Link to="/register">Create Account</Link></span>
                    </form>
                </Row>
            <hr/>

            <section className='section1'>
            <div className ="container">
                <div className = "row">
                    <div className = "col-md-12 text-center">
                        <h3 className ="main-heading">We are committed to change</h3>
                        <div className ="underline mx-auto"></div>                       
                        <p>
                        In a world where the long- and short-term effects of climate change pose major challenges for farmers, the need for regenerative food systems has never been more important. That’s why we’ve made a promise to do more for the planet, by taking less. Our plant-forward menu means that we’re already on average 30% less carbon intensive than the average American meal.
                        </p>                           
                    </div>
                </div>
            </div>
        </section>
            <hr/>
           <MapContainer/>
           
            <Footer/>
            </div>
        );
    }
}

export default Login;