import React, {Component} from 'react';
import MyNavLink from '../../pages/MyNavLink';
import AboutUs from '../AboutUs/AboutUs';
import Slider from '../../components/Slider/Slider';
import Footer from '../../components/Footer/Footer';
import Customer from '../../components/Customer/Customer';
import MapContainer from '../../components/MapContainer/MapContainer';
import Cards from '../../components/Cards/Cards';
class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                {/* Bootstrap carousel for this part of the content*/}
                    <section className='section'>
                        <div className ="container">
                            <div className = "row">
                                <div className = "col-md-12 text-center">
                                    <h3 className ="main-heading">Our App</h3>
                                    <div className ="underline mx-auto"></div>
                                    {/*Brieft Introduction about the restaurant*/}
                                    <p>
                                    We're leading a movement to reimage fast food for a new era! Building healtheir communities by connecting people to real food. Our core values guide our actions and we aim to empower our customers, team members and partners to be a positive force on the food system.
                                    </p>
                                    <MyNavLink to="../AboutUs/AboutUs" className = "btn btn-warning shadow">Read More</MyNavLink>                             
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Our value and story below*/}
                    <section className='section bg-c-light border-top'>
                {/*About our story and value*/}
                <div className ="container">
                    <div className = "row">
                        <div className = "col-md-12 mb-4 text-center">
                            <h3 className ="main-heading">About Us</h3>
                            <div className ="underline mx-auto"></div>                                                    
                        </div>
                        {/*Our value*/}
                        <div className = 'col-md-4 text-center'>
                            <h6>Our Mission</h6>
                            <p>
                            At Green Kitchen we believe that every part of one’s well-being can be improved by proper nutrition. Physical, mental and spiritual well-being can be elevated with what you choose to eat, drink and think. Everyone should help make the difference.
                            </p>
                        </div>
                            {/*Our value*/}
                        <div className = 'col-md-4 text-center'>
                            <h6>Our Story</h6>
                            <p>
                            We are four college students who were simply looking for a healthier way to eat. We want to create a business where quality was never sacrificed for convenience. On August 1st 2020, we lanuched Green Kichen App in Boston MA, and served our first customers with a vision to reimagine fast food.
                            </p>
                        </div>
                        {/*Our story*/}
                        <div className = 'col-md-4 text-center'>
                            <h6>Our Value</h6>
                            <p>
                            We’re in the business of social media and we’re out to change what that means. The better you are, the better you will feel, the better decisions you will make, and the easier it will be to conquer the obstacles of life.
                            </p>
                        </div>
                    </div>
                </div>
        </section>
                    {/*What customers say about us*/}                   
                    <Cards/>
                    <Customer/>
                    <MapContainer/>
                    <Footer/>                    
            </div>
        );
    }
}

export default Home;