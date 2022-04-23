import React, {Component} from 'react';
import foodSourcing from '../../img/foodSourcing.jpg';
import menuDevelopment from '../../img/menuDevelopment.jpg';
import restaurants from '../../img/restaurants.jpg';

class Cards extends Component{
    render(){
        return(
            // used bootstrap cards for this part of content
            <section className='section border-top'>
                <div className ="container">
                    <div className = "row">
                        <div className = "col-md-12 mb-4 text-center">
                            <h3 className ="main-heading">Sustainability</h3>
                            <div className ="underline mx-auto"></div>                                                    
                        </div>
                        {/*customer food sourcing*/}
                        <div className = 'col-md-4 '>
                            <div className = "card shadow">
                            <img src = {foodSourcing} className='w-100 border-bottom' alt="foodSourcing"/>
                            <div className = "card-body">
                                <h5>Food Sourcing</h5>
                                <p>
                                We work closely with our suppliers to help implement industry-leading concepts for carbon minimization. Our goal is to support farmers and producers who participate in regenerative practices—ones that give more to the land than they take away.
                                </p>
                            </div>
                            </div>
                        </div>
                            {/*menuDevelopment*/}
                            <div className = 'col-md-4 '>
                            <div className = "card shadow">
                            <img src = {menuDevelopment} className='w-100 border-bottom' alt="menuDevelopment"/>
                            <div className = "card-body">
                                <h5>Menu Development</h5>
                                <p>
                                We calculate an accurate carbon footprint for each of our menu items by commissioning carbon assessments of our specific suppliers. These reports illustrate how much carbon is generated at every stage of business, from seed to salad. We use this data to direct our menu and adjust as needed.
                                </p>
                            </div>
                            </div>
                        </div>
                        {/*Restaurants*/}
                        <div className = 'col-md-4 '>
                            <div className = "card shadow">
                            <img src = {restaurants} className='w-100 border-bottom' alt="restaurants"/>
                            <div className = "card-body">
                                <h5>Ingredients</h5>
                                <p>
                                We optimize our building materials from construction to furniture, investing in clean energy, and industrial equipment to make a minimal impact. Our apps are designed to contribute to a more sustainable future by embodying our values in a tangible way while broadening access to real food across the country.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cards;