import { useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listService } from "../utils";
import { services, listPizza } from "../redux/selector";
import Layout from "../components/Layout";
import ActiveOrder from "../components/ActiveOrder";
import withService from "../hoc/withService";
import useFetchPizza from "../hook/useFetchPizza";
import ValidateData from "../components/ValidateData";
import { updatePizza } from "../redux/services";

const Order = () => {
  const listOfPizza = useSelector(listPizza) || "";
  const { data, loading } = useFetchPizza({ mainData: listOfPizza });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servicesData = useSelector(services) || "";
  const getService = listService?.find(
    (listOfServices) => listOfServices.actionValue === servicesData
  );

  useEffect(() => {
    if (data && !listOfPizza) {
      dispatch(updatePizza(data));
    }
  }, [data, dispatch, listOfPizza]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <div style={{ position: "absolute", top: 10, left: 10 }}>
        <Button
          variant="outlined"
          onClick={handleBack}
          startIcon={<ArrowBackIcon />}
        >
          Back To Service
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ActiveOrder
          title={servicesData}
          description={getService?.description}
          imageSource={getService.imageSource}
        />
        <div
          style={{
            display: "flex",
          }}
        >
          {!loading && listOfPizza && listOfPizza?.length > 0 ? (
            listOfPizza?.map((pizzaItem) => (
              <div key={pizzaItem.id} style={{ margin: 5 }}>
                <ActiveOrder
                  customPaperStyle={{
                    width: 150,
                    height: 150,
                    cursor: "pointer",
                  }}
                  description={`$${pizzaItem.price}`}
                  imageSource={""}
                  title={pizzaItem.name}
                  titleConfig={{
                    variant: "body2",
                    style: { textAlign: "center" },
                  }}
                />
              </div>
            ))
          ) : (
            <ValidateData loading={loading} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default withService(Order);
