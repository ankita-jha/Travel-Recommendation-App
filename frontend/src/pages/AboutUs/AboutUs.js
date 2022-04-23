import React, {Component} from 'react';
import MyNavLink from '../../pages/MyNavLink';
import MapContainer from '../../components/MapContainer//MapContainer';
import Footer from '../../components/Footer/Footer';
import about from '../../img/about.jpg';
import Cards from '../../components/Cards/Cards';
class AboutUs extends Component{
    render(){
        return(
            // used bootstrap carousels for this part of content
            <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={about} class=" w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Green Kitchen</h1>
                            <p>Taste, Feel, and Be the difference</p>
                        </div>
                    </div>   
                </div>
            </div>
            
            <section className='section bg-c-light border-top'>
                {/*About our story and value*/}
                <div className ="container">
                    <div className = "row">
                        <div className = "col-md-12 mb-4 text-center">
                            <h1 className ="main-heading" >About Us</h1>
                            <div className ="underline mx-auto"></div>                                                    
                        </div>
                        {/*Our value*/}
                        <div className = 'col-md-4 text-center'>
                            <h5>Our Mission</h5>
                            <p>
                            At Green Kitchen we believe that every part of one’s well-being can be improved by proper nutrition. Physical, mental and spiritual well-being can be elevated with what you choose to eat, drink and think. Everyone should help make the difference.
                            </p>
                        </div>
                            {/*Our value*/}
                        <div className = 'col-md-4 text-center'>
                            <h5>Our Story</h5>
                            <p>
                            We are four college students who were simply looking for a healthier way to eat. We want to create a business where quality was never sacrificed for convenience. On August 1st 2020, we launched Green Kichen App in Boston MA, and served our first customers with a vision to reimagine fast food.
                            </p>
                        </div>
                        {/*Our story*/}
                        <div className = 'col-md-4 text-center'>
                            <h5>Our Value</h5>
                            <p>
                            We’re in the business of social media, and we’re out to change what that means. The better you are, the better you will feel, the better decisions you will make, and the easier it will be to conquer the obstacles of life.
                            </p>
                        </div>
                    </div>
                </div>
        </section>

{/*Nutitions of ingredients*/}
        <section className='section'>
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
        <Cards/>
        <hr/>
{/*Map*/}
        <MapContainer/>
        <hr/>
{/*Footer*/}
        <Footer/>
        </div>
        );
    }
}

export default AboutUs;