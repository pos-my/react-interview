import "../App.css"
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

import SadFace from '../assets/pagenotfound/sad_face.png'

export default function PageNotFound() {
    const navigate = useNavigate()

    return(
        <div className="pageNotFoundDiv">
            <img src={SadFace} style={{width:"110px", height:"110px", marginBottom:"20px"}} alt="Sad face" />
            
            <div>
                404 
            </div>

            <div>
                PAGE NOT FOUND
            </div>
        </div>
    )
}