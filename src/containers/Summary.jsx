import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedPizza, services } from "../redux/selector";
import Layout from "../components/Layout";
import withService from "../hoc/withService";
import { Card, CardContent } from "@mui/material";
import { toUpperCase } from "./PizzaContent";
import FooterAction from "../components/FooterAction";
import TopButton from "../components/TopButton";
import SummaryContent from "../components/SummaryContent";
import { clearData } from "../redux/services";
import CustomDialog from "../components/CustomDialog";

const Summary = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const servicesData = useSelector(services) || "";
  const selectedPizzaData = useSelector(selectedPizza) || "";
  let calculateTotalPrice = 0;
  let totalPizza = 0;

  for (const element of selectedPizzaData) {
    const checkOptions = element?.options ? element?.options?.length : 1;
    calculateTotalPrice += element?.price * checkOptions;
  }

  for (const element of selectedPizzaData) {
    totalPizza += element?.options ? element?.options?.length : 1;
  }

  const headerDetails = {
    "Delivery Type": toUpperCase(servicesData),
    "Total Price": `$${calculateTotalPrice}`,
    "Total Pizza": totalPizza,
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleOrder = () => {
    setOpen(true);
    setTimeout(() => {
      dispatch(clearData());
      navigate("/");
    }, 1000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    dispatch(clearData());
    navigate("/");
  };

  return (
    <Layout>
      <TopButton buttonTitle="Back to review" handleClick={handleBack} />
      <div
        style={{
          position: "absolute",
          inset: "70px 8px 60px 8px",
          overflowY: "scroll",
        }}
      >
        <Card>
          <CardContent>
            <SummaryContent
              headerDetails={headerDetails}
              data={selectedPizzaData}
            />
          </CardContent>
        </Card>
      </div>
      <FooterAction
        buttonTitle="Submit Order"
        handleCancel={handleCancel}
        handleClick={handleOrder}
        secondaryAction
      />
      <CustomDialog open={open} handleClose={handleClose} />
    </Layout>
  );
};

export default withService(Summary);
