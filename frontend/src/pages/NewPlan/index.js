import React, {Component} from 'react';
import Box from "../../components/Box";
import {addNewCombo} from '../../services/palnServices';
import './pic.scss'

class NewPlan extends Component {


    constructor(props) {
        super(props);
        this.state={
            /**
             * data should be sent to database
             */
            base:[],
            prem:[],
            top:[],
            dressings:[],
            smoothie: []
        }
    }

    /**
     * get content from input frame
     * @param e
     */
    handelChange(e){
        this.setState({
            inpValu:e.target.value
        })
    }


    render() {
        const baseImgArr = ['choppedRomaine', 'babySpinach', 'springMix', 'shreddedKale', 'warmWildRice', 'warmQuinoa']
        const preImgArr = ['roastedBrusselsSprouts', 'curryRoastedCauliflower', 'pickledCarrotsCelery', 'blueCheese',
            'goatCheese', 'shavedParmesan', 'parmesanCrisp', 'hardBoiledEgg', 'hotRoastedSweetPotatoes', 'avocado',
            'roastedSesameTofu', 'warmPortobelloMix', 'blackenedChicken', 'roastedChicken', 'steelhead']
        const topImgArr = ['raisins', 'apples', 'basil', 'rawCarrots', 'chickpeas', 'cilantro', 'cucumber', 'rawBeet',
            'redOnion', 'roastedSweetPotato', 'shreddedCabbage', 'spicyBroccoli', 'tomato', 'lentils', 'spicySunflowerSeeds',
            'crispyRice', 'toastedAlmonds', 'tortillaChips']
        const dressingsImgArr = ['peppercornTahinaDressing', 'cranberryMapleVinaigrette', 'greenGoddessRanchDressing',
            'balsamicVinaigrette', 'balsamicVinegar', 'caesarDressing', 'extraVirginOliveOil', 'limeCilantroJalapenoDressingVinaigrette',
            'misoSesameGingerDressing', 'pestoVinaigrette', 'spicyCashewDressing', 'hotSauce', 'freshLimeSqueeze', 'freshLemonSqueeze',
            'redChili']
        const smoothieArr = ['Acai + Cherry', 'Chocolate + Blueberry', 'Cold Brew + Almond', 'Mango + Papaya', 'Mint + Cacao',
            'Strawberry + Peach']

        const saveData = async() =>{

            function getWordCnt(arr){
                var obj = {};
                for(var i= 0, l = arr.length; i< l; i++){
                    var item = arr[i];
                    obj[item] = (obj[item] +1 ) || 1;
                }
                return obj;
            }

            let baseContents = getWordCnt(this.state.base)
            let premContents = getWordCnt(this.state.prem)
            let topContents = getWordCnt(this.state.top)
            let dressingContents = getWordCnt(this.state.dressings)

            function getJson(obj){
                let res = [];
                console.log("obj",obj);
                for(let key in obj){
                    res.push({"Name":key,"Amount":Number(obj[key])});
                }
                console.log(res);
                return res;
            }

            alert("Congratulation! You have finished a green food list!")

            await addNewCombo({Name:this.state.inpValu,
                Bowl:[getJson(baseContents),getJson(premContents),getJson(topContents),getJson(dressingContents)],
                OwnerEmail:localStorage.getItem("user"), Owner:localStorage.getItem("user"), Smoothie:(this.state.smoothie).toString()})
        }

        /**
         * save added base
         * @param name
         * @param quantity
         */
        const increaseBase = (name, quantity) => {
            this.state.base.push(name)
            console.log(this.state.base)
        }

        /**
         * delete base
         */
        const decreaseBase = () => {
            this.state.base.pop()
            console.log(this.state.base)
        }

        /**
         * save added premium
         * @param name
         * @param quantity
         */
        const increasePremium = (name, quantity) => {
            this.state.prem.push(name)
            console.log(this.state.prem)
        }

        /**
         * delete premium
         */
        const decreasePremium = () => {
            this.state.prem.pop()
            console.log(this.state.prem)
        }

        /**
         * save added top
         * @param name
         * @param quantity
         */
        const increaseTop = (name, quantity) => {
            this.state.top.push(name)
            console.log(this.state.top)
        }

        /**
         * delete top
         */
        const decreaseTop = () => {
            this.state.top.pop()
            console.log(this.state.top)
        }

        /**
         * save added dressings
         * @param name
         * @param quantity
         */
        const increaseDressing = (name, quantity) => {
            this.state.dressings.push(name)
            console.log(this.state.dressings)
        }

        /**
         * delete dressings
         */
        const decreaseDressing = () => {
            this.state.dressings.pop()
            console.log(this.state.dressings)
        }

        /**
         * add smoothie
         * @param name
         */
        const increaseSmoothie = (name) => {
            this.state.smoothie.push(name)
            console.log(this.state.smoothie)
        }

        /**
         * delete smoothie
         */
        const decreaseSmoothie = () => {
            this.state.smoothie.pop()
            console.log(this.state.smoothie)
        }

        return (
            <section className='section border-top'>
                <div className ="container">
                    <div className = "row">
                        <div className = "col-md-12 mb-4 text-center">
                            <h3 className ="main-heading">CREATE YOUR PLAN</h3>
                            <div className ="underline mx-auto"></div>
                        </div>
                <div className="text-center">
                    <label htmlFor="bowlName">BOWL NAME:</label><br></br>
                    <input type="text" id="bowlName" className="bowlName" onChange={this.handelChange.bind(this)}
                           defaultValue={this.state.inpValu}/><br></br>
                </div>
                <div>
                    <div className = "col-md-12 mb-4 text-center">
                        <h1 id="subtitle" className ="main-heading">Base</h1>
                        <div className ="underline mx-auto"></div>
                    </div>
                    <div className="container">
                    <div className="row g-3">
                {
                    baseImgArr.map((item) => {
                        return (
                            <div className="col-4">
                            <Box key={item} id={item} min='0' max='5'
                                 increaseGoods={increaseBase}
                                 decreaseGoods={decreaseBase}/>
                            </div>
                            )
                    })
                }
                    </div>
                    </div>
                </div>
                <div>
                    <div className = "col-md-12 mb-4 text-center">
                        <h1 id="subtitle" className ="main-heading">Premiums</h1>
                        <div className ="underline mx-auto"></div>
                    </div>
                    <div className="container">
                        <div className="row g-3">
                    {
                        preImgArr.map((item) => {
                            return (
                                <div className="col-4">
                                <Box key={item} id={item} min='0' max='5'
                                     increaseGoods={increasePremium}
                                     decreaseGoods={decreasePremium}/>
                                </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
                <div>
                    <div className = "col-md-12 mb-4 text-center">
                        <h1 id="subtitle" className ="main-heading">Toppings</h1>
                        <div className ="underline mx-auto"></div>
                    </div>
                    <div className="container">
                        <div className="row g-3">
                    {
                        topImgArr.map((item) => {
                            return (
                                <div className="col-4">
                                <Box key={item} id={item} min='0' max='5'
                                     increaseGoods={increaseTop}
                                     decreaseGoods={decreaseTop}/>
                                </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
                <div>
                    <div className = "col-md-12 mb-4 text-center">
                        <h1 id="subtitle" className ="main-heading">Dressings</h1>
                        <div className ="underline mx-auto"></div>
                    </div>
                    <div className="container">
                        <div className="row g-3">
                    {
                        dressingsImgArr.map((item) => {
                            return (
                                <div className="col-4">
                                <Box key={item} id={item} min='0' max='5'
                                     increaseGoods={increaseDressing}
                                     decreaseGoods={decreaseDressing}/>
                                </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
                <div>
                    <div className = "col-md-12 mb-4 text-center">
                        <h1 id="subtitle" className ="main-heading">Smoothie</h1>
                        <div className ="underline mx-auto"></div>
                    </div>
                    <div className="container">
                        <div className="row g-3">
                    {
                        smoothieArr.map((item) => {
                            return (
                                <div className="col-4">
                                <Box key={item} id={item} min='0' max='1'
                                     increaseGoods={increaseSmoothie}
                                     decreaseGoods={decreaseSmoothie}/>
                                </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
                        <div className="text-center">
                            <br></br>
                <button className="btn btn-primary" type="button" className="btn btn-success" onClick={saveData}>ADD ALL</button>
                        </div>
                </div>
                </div>
            </section>
        )
    }

}

export default NewPlan;