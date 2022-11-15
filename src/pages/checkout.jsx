import React, { useEffect, useState } from 'react'
import "../App.css"
import { useLocation, useNavigate } from 'react-router-dom'

export default function CheckoutPage() {
    const navigate = useNavigate()
    const location = useLocation()

    const [pizzas, setPizzas] = useState()
    const [deliveryMethod, setDeliveryMethod] = useState()
    const [grandTotal, setGrandTotal] = useState()

    useEffect(() => {
        setDeliveryMethod(location.state.deliveryMethod)
        setGrandTotal(location.state.grandTotal)

        let pizzaList = []

        // filter pizzas that user has ordered only
        for (var pizza of location.state.pizzas) {
            if (pizza.selected === true) {
                pizzaList.push(pizza)
            }
        }

        setPizzas(pizzaList)
    }, [])

    return(
        <div className="mainDiv">
            <div className="mainTitle">
                Checkout
            </div>
            
            {
                pizzas && pizzas.length > 0 ? pizzas.map((pizza) => {
                    return(
                        <div className="pizzaDiv">
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

                                            <div className="checkoutChoiceSubDiv">
                                                {pizza.size}
                                            </div>
                                        </div>

                                        <div className="choiceDiv">
                                            Extra Cheese:

                                            <div className="checkoutChoiceSubDiv">
                                                {pizza.extraCheese ? "Yes" : "No"}
                                            </div>
                                        </div>

                                        <div className="choiceDiv">
                                            Quantity:

                                            <div className="checkoutChoiceSubDiv">
                                                {pizza.quantity}
                                            </div>
                                        </div>

                                        <div className="choiceDiv" style={{marginTop:"10px"}}>
                                            Total:

                                            <div id="checkoutPizzaCostDiv">
                                                $ {pizza.selectedCost}
                                            </div>
                                        </div>
                                    </div>: null
                                }
                            </div>
                        </div>
                    )
                })

                :

                <div className="noItemsDiv">
                    <div className="noItemsSubDiv">
                        No items in your basket yet!
                    </div>

                    <button className="pizzaButton backButton" onClick={()=>{
                        navigate('/')
                    }}>
                        Check our pizza options out
                    </button>
                </div>
            }

            <div className="grandTotalDiv" style={{paddingBottom:0}}>
                Grand Total:

                <div>
                    $ {grandTotal}
                </div>
            </div>

            <div className="deliveryMethodDiv">
                Delivery Method:

                <div>
                    {deliveryMethod}
                </div>
            </div>

            <div id="confirmationDiv">
                {
                    grandTotal && grandTotal > 0 ?

                    <button className="pizzaButton confirmButton" onClick={()=>{
                        if (window.confirm("Please make sure everything is correct before confirming your order")) {
                            // thank the user and redirect them back to the main page
                            alert("Thank you for ordering at Pizza Place!")
                            navigate('/')
                        }
                    }}>Confirm Order</button> : null
                }

                <button className="pizzaButton backButton" onClick={()=>{
                    if (window.confirm("Are you sure you want to go back to the pizza selection page?")) {
                        // cancels the order and returns the user to the main page
                        navigate('/')
                    }
                }}>Cancel and Go Back</button>
            </div>
        </div>
    )
}