import React, {Component} from 'react';
import customer1 from '../../img/customer1.jpg';
import customer2 from '../../img/customer2.jpg';
import customer3 from '../../img/customer3.jpg';

class Customer extends Component{
    render(){
        return(
             // used bootstrap cards for this part of content
            <section className='section border-top'>
                <div className ="container">
                    <div className = "row">
                        <div className = "col-md-12 mb-4 text-center">
                            <h3 className ="main-heading">What Our Users Say About Us</h3>
                            <div className ="underline mx-auto"></div>                                                    
                        </div>
                        {/*customer testmonials*/}
                        <div className = 'col-md-4 '>
                            <div className = "card shadow">
                            <img src = {customer1} className='w-100 border-bottom' alt="customers"/>
                            <div className = "card-body">
                                <h6>Liam B</h6>
                                <div className='underline'></div>
                                <p>
                                "I love working with Green Kitchen App! The recipes people share are delicious and fully customized. I have referred many friends here who all love the service. It makes my life a lot easier and worth the cost.  Love the clean energy they have provided."
                                </p>
                            </div>
                            </div>
                        </div>
                            {/*customer 2*/}
                            <div className = 'col-md-4 '>
                            <div className = "card shadow">
                            <img src = {customer2} className='w-100 border-bottom' alt="customers"/>
                            <div className = "card-body">
                                <h6>Olivia Johnson</h6>
                                <div className='underline'></div>
                                <p>
                                "We absolutely love every dish that people make. Green Kitchen takes into account our strange allergies, preferences, and dietary restrictions. They are constantly creating new dishes so that we never get bored."
                                </p>
                            </div>
                            </div>
                        </div>
                        {/*Custmer 3*/}
                        <div className = 'col-md-4 '>
                            <div className = "card shadow">
                            <img src = {customer3} className='w-100 border-bottom' alt="customers"/>
                            <div className = "card-body">
                                <h6>Emma W</h6>
                                <div className='underline'></div>
                                <p>
                                "When I found Green Kitchen, everything finally fell into place. Even with my incredibly high standards, they have met my expectations again and again. I have been so impressed by them and so relieved I found them. I honestly couldn't recommend enough."
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

export default Customer;