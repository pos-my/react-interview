import React from 'react';
import {useNavigate} from "react-router-dom";
import {Alert, AlertTitle} from "@mui/material";

const Thankyou = () => {
    const navigate = useNavigate();

    setTimeout(() => navigate('/'), 5000)

    return (
        <div>
            <Alert severity={"success"}>
                <AlertTitle>Thank you for ordering Pizza!</AlertTitle>
            </Alert>
        </div>
    );
};

export default Thankyou;