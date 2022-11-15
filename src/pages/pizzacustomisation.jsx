import React, { useEffect, useState } from 'react'
import "../App.css"
import { useLocation, useNavigate } from 'react-router-dom'

import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai"

export default function PizzaCustomisationPage() {
    const navigate = useNavigate()
    const location = useLocation()

    const [deliveryMethod, setDeliveryMethod] = useState()

    const [pizzas, setPizzas] = useState([
        {"id": 1, "name": "Chonky Chicken", "selected": false, "size": "Medium", "quantity": 0, "extraCheese": false, "selectedCost": 0}, 
        {"id": 2, "name": "Beef Barbeque", "selected": false, "size": "Medium", "quantity": 0, "extraCheese": false, "selectedCost": 0},
        {"id": 3, "name": "Hawking Hawaiian", "selected": false, "size": "Medium", "quantity": 0, "extraCheese": false, "selectedCost": 0},
        {"id": 4, "name": "Margeret's Margherita", "selected": false, "size": "Medium", "quantity": 0, "extraCheese": false, "selectedCost": 0},
        {"id": 5, "name": "Vegan Villa Vista", "selected": false, "size": "Medium", "quantity": 0, "extraCheese": false, "selectedCost": 0}
    ])

    // Assuming pizzas at different sizes cost differently
    const [pizzaCosts, setPizzaCosts] = useState([
        {"id": 1, "small": 8, "medium": 10, "large": 12}, 
        {"id": 2, "small": 10, "medium": 12, "large": 14},
        {"id": 3, "small": 8, "medium": 10, "large": 12},
        {"id": 4, "small": 6, "medium": 8, "large": 10},
        {"id": 5, "small": 6, "medium": 8, "large": 10}
    ])

    const [grandTotal, setGrandTotal] = useState(0)

    // Getting delivery method from main page and setting it at the very start
    useEffect(() => {
        setDeliveryMethod(location.state.deliveryMethod)
    }, [])


    useEffect(() => {
        getGrandTotal()
    }, [pizzas])

    const getPizzaCost = (id, size, quantity) => {
        for (var cost of pizzaCosts) {
            if (id === cost.id) {
                if (size === "Small") {
                    return cost.small * quantity
                } else if (size === "Medium") {
                    return cost.medium * quantity
                } else {
                    return cost.large * quantity
                }
            }
        }
    }

    const updateSelectedPizza = (id) => {
        let newList = []

        for (var pizza of pizzas) {
            if (id === pizza.id) {
                pizza.selected = true
                pizza.quantity = 1
                pizza.selectedCost = getPizzaCost(id, pizza.size, 1)
            }

            newList.push(pizza)
        }

        setPizzas(newList)
    }

    const updatePizzaSize = (id, size) => {
        let newList = []

        for (var pizza of pizzas) {
            if (id === pizza.id) {
                pizza.size = size
                pizza.selectedCost = getPizzaCost(id, size, pizza.quantity)
            }

            newList.push(pizza)
        }

        setPizzas(newList)
    }

    // for simplicity sake, I have ignored price premium for extra cheese
    const updateExtraCheese = (id, option) => {
        let newList = []

        for (var pizza of pizzas) {
            if (id === pizza.id) {
                if (option === "Yes") {
                    pizza.extraCheese = true
                } else {
                    pizza.extraCheese = false
                }
            }

            newList.push(pizza)
        }

        setPizzas(newList)
    }

    const updateSelectedPizzaQuantity = (id, quantity) => {
        let newList = []

        for (var pizza of pizzas) {
            if (id === pizza.id) {
                pizza.quantity = quantity
                pizza.selectedCost = getPizzaCost(id, pizza.size, quantity)
            }

            newList.push(pizza)
        }

        setPizzas(newList)
    }

    const removeSelectedPizza = (id) => {
        let newList = []

        for (var pizza of pizzas) {
            if (id === pizza.id) {
                pizza.selected = false
                pizza.quantity = 0
                pizza.extraCheese = false
                pizza.size = "Medium"
                pizza.selectedCost = 0
            }

            newList.push(pizza)
        }

        setPizzas(newList)
    }

    const getGrandTotal = () => {
        let total = 0

        for (var pizza of pizzas) {
            total += pizza.selectedCost
        }

        setGrandTotal(total)
    }

    return(
        <div className="mainDiv">
            <div className="mainDivTitle">
                Here is our selection of pizzas!
            </div>

            {
                pizzas.map((pizza) => {
                    return(
                        <div key={pizza.id} className="pizzaDiv">
                            <img className="pizzaImage" src="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg" alt="pizza" />

                            <div className="pizzaDescription">
                                <div className="pizzaName">
                                    {pizza.name}
                                </div>

                                {
                                    pizza.selected === true ?

                                    <div style={{width:"100%", height:"auto", fontSize:"16px", marginTop:"10px"}}>
                                        <div className="choiceDiv">
                                            Size:

                                            <select className="select" onChange={(e)=>{
                                                updatePizzaSize(pizza.id, e.target.value)
                                            }}>
                                                <option value="Small">Small</option>
                                                <option value="Medium" selected="selected">Medium</option>
                                                <option value="Large">Large</option>
                                            </select>
                                        </div>

                                        <div className="choiceDiv">
                                            Extra Cheese:

                                            <select className="select" onChange={(e)=>{
                                                updateExtraCheese(pizza.id, e.target.value)
                                            }}>
                                                <option value="Yes">Yes</option>
                                                <option value="No" selected="selected">No</option>
                                            </select>
                                        </div>

                                        <div className="choiceDiv">
                                            Quantity:

                                            <div style={{width:"40%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                                <input className="input" onChange={(e)=>{
                                                    if (e.target.value <= 0 || !e.target.value) {
                                                        updateSelectedPizzaQuantity(pizza.id, 1)
                                                    } else {
                                                        updateSelectedPizzaQuantity(pizza.id, e.target.value)
                                                    }
                                                }} value={pizza.quantity}></input>
                                                <AiOutlinePlusSquare style={{width:"25%", height:"100%", cursor:"pointer"}} onClick={()=> {updateSelectedPizzaQuantity(pizza.id, pizza.quantity + 1)}} />
                                                <AiOutlineMinusSquare style={{width:"25%", height:"100%", cursor:"pointer"}} onClick={()=> {
                                                    if (pizza.quantity <= 1) {
                                                        updateSelectedPizzaQuantity(pizza.id, 1)
                                                    } else {
                                                        updateSelectedPizzaQuantity(pizza.id, pizza.quantity - 1)
                                                    }
                                                }} />
                                            </div>
                                        </div>

                                        <div className="choiceDiv" style={{marginTop:"15px"}}>
                                            Total:

                                            <div id="individualPizzaCostDiv">
                                                $ {pizza.selectedCost}
                                            </div>
                                        </div>
                                    </div> : null
                                }

                                {
                                    pizza.selected === false ?

                                    <div className="pizzaButtonDiv">
                                        <button id="addButton" className="pizzaButton" onClick ={()=>{
                                            updateSelectedPizza(pizza.id)
                                        }}>Add</button>
                                    </div> 
                                    : 
                                    <div className="pizzaButtonDiv">
                                        <button id="removeButton" className="pizzaButton" onClick={()=>{
                                            // allows users to remove pizzas
                                            removeSelectedPizza(pizza.id)
                                        }}>Remove</button>
                                    </div> 
                                }
                            </div>
                        </div>
                    )
                })
            }

            <div className="grandTotalDiv">
                Grand Total:

                <div>
                    $ {grandTotal}
                </div>
            </div>

            <div id="confirmationDiv">
                {
                    grandTotal && grandTotal > 0 ?

                    <button data-testid="checkoutButton" className="pizzaButton confirmButton" onClick={()=>{
                        if (window.confirm("Please make sure your order is correct before proceeding to checkout")) {
                            navigate('/checkout', {
                            state: {
                                pizzas: pizzas,
                                deliveryMethod: deliveryMethod,
                                grandTotal: grandTotal
                            }
                        })
                        }
                    }}>Go To Checkout</button> : null
                }

                <button className="pizzaButton backButton" onClick={()=>{
                    if (window.confirm("Are you sure you want to go back to the main page?")) {
                        navigate('/')
                    }
                }}>Back to Main Page</button>
            </div>
        </div>
    )
}