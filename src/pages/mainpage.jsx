import "../App.css"
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

export default function MainPage() {
    const navigate = useNavigate()

    return(
        <div data-testid="mainpage-1" className="mainDiv" style={{justifyContent:"center", height: "100vh", textAlign:"center"}}>
            <div className="mainTitle">
                Pizza Place
            </div>
            
            <div className="mainSubtitle">
                Please select an option before continuing:
            </div>

            <Button id="pickupButton" className="mainDivButton" onClick={()=> {
                navigate('/pizzacustomisation', {
                    state: {deliveryMethod: "Pick Up"}
                })
            }}>Pick Up</Button>

            <Button id="deliveryButton" className="mainDivButton" onClick={()=> {
                navigate('/pizzacustomisation', {
                    state: {deliveryMethod: "Delivery"}
                })
            }}>Delivery</Button>

            <div className="emptySpace"></div>
        </div>
    )
}