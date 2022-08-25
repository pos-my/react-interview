import { useSelector } from "react-redux";
import { selectedPizza, services } from "../redux/selector";
import Layout from "../components/Layout";
import withService from "../hoc/withService";
import { Card, CardContent, Typography } from "@mui/material";
import { toUpperCase } from "./PizzaContent";

const Summary = () => {
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

  return (
    <Layout>
      <Card>
        <CardContent>
          {Object.keys(headerDetails).map((headerItem, headerKey) => (
            <div key={headerKey.toString()} style={{ display: "flex" }}>
              <Typography variant="body2" style={{ fontWeight: "bold" }}>
                {headerItem}:
              </Typography>
              <Typography variant="body2" style={{ marginLeft: 5 }}>
                {headerDetails[headerItem]}
              </Typography>
            </div>
          ))}

          {selectedPizzaData?.map((item) => {
            const itemOption = item?.options;
            const checkOptions = itemOption ? itemOption.length : 1;
            const calculatePerPizza = item.price * checkOptions;
            const smallSize = itemOption?.filter(
              (pizzaOption) => pizzaOption.size === "Small"
            );
            const mediumSize = itemOption?.filter(
              (pizzaOption) => pizzaOption.size === "Medium"
            );
            const largeSize = itemOption?.filter(
              (pizzaOption) => pizzaOption.size === "Large"
            );

            const withCheese = itemOption?.filter(
              (pizzaOption) => pizzaOption.withCheese === true
            );

            let pizzaSizeData = {};
            let totalPizza = 0;
            if (smallSize && smallSize?.length > 0) {
              pizzaSizeData = {
                ...pizzaSizeData,
                "Small Size": `${smallSize?.length}`,
              };
              totalPizza += smallSize?.length;
            }

            if (mediumSize && mediumSize?.length > 0) {
              pizzaSizeData = {
                ...pizzaSizeData,
                "Medium Size": `${mediumSize?.length}`,
              };
              totalPizza += mediumSize?.length;
            }

            if (largeSize && largeSize?.length > 0) {
              pizzaSizeData = {
                ...pizzaSizeData,
                "Large Size": `${largeSize?.length}`,
              };
              totalPizza += largeSize?.length;
            }

            const dataToView = {
              "Pizza Name": item.name,
              "With Cheese": withCheese?.length,
              "Without Cheese": checkOptions - withCheese?.length,
              "Total Price": `$${calculatePerPizza}`,
              "Total Pizza": totalPizza,
              ...pizzaSizeData,
            };

            return (
              <div key={item.id} style={{ margin: "20px 0px 20px 0px" }}>
                {Object.keys(dataToView).map(
                  (dataToViewItem, dataToViewKey) => (
                    <div
                      key={dataToViewKey.toString()}
                      style={{ display: "flex" }}
                    >
                      <Typography
                        variant="body2"
                        style={{ fontWeight: "bold" }}
                      >
                        {dataToViewItem}:
                      </Typography>
                      <Typography variant="body2" style={{ marginLeft: 5 }}>
                        {dataToView[dataToViewItem]}
                      </Typography>
                    </div>
                  )
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </Layout>
  );
};

export default withService(Summary);
