import { useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listService } from "../utils";
import { services, listPizza, selectedPizza } from "../redux/selector";
import Layout from "../components/Layout";
import withService from "../hoc/withService";
import useFetchPizza from "../hook/useFetchPizza";
import { updatePizza, updateSelectedPizza } from "../redux/services";
import TopButton from "../components/TopButton";

const ActiveOrder = lazy(() => import("../components/ActiveOrder"));
const Cart = lazy(() => import("../components/Cart"));
const ValidateData = lazy(() => import("../components/ValidateData"));

const Order = () => {
  const listOfPizza = useSelector(listPizza) || "";
  const { data, loading } = useFetchPizza({ mainData: listOfPizza });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servicesData = useSelector(services) || "";
  const selectedPizzaData = useSelector(selectedPizza) || "";
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

  const handleSelectedItem = (param) => {
    const findSelectedPizza = listOfPizza.find((item) => item.id === param);
    if (
      selectedPizzaData &&
      selectedPizzaData?.length > 0 &&
      findSelectedPizza
    ) {
      const validateExistingData = selectedPizzaData?.some(
        (currentItem) => currentItem.id === findSelectedPizza.id
      );
      if (validateExistingData) {
        const removeExistingPizza = selectedPizzaData.filter(
          (item) => item.id !== findSelectedPizza.id
        );
        dispatch(updateSelectedPizza(removeExistingPizza));
      } else {
        const concatData = [...selectedPizzaData, findSelectedPizza];
        dispatch(updateSelectedPizza(concatData));
      }
    } else {
      const objectToArray = [findSelectedPizza];
      dispatch(updateSelectedPizza(objectToArray));
    }
  };

  const handleCheckout = () => {
    navigate("/review");
  };

  return (
    <Layout>
      <Suspense fallback={<span />}>
        <TopButton handleClick={handleBack} />
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
              listOfPizza?.map((pizzaItem) => {
                const selectedPizza = selectedPizzaData
                  ? selectedPizzaData?.some((item) => item.id === pizzaItem.id)
                  : false;

                return (
                  <div key={pizzaItem.id} style={{ margin: 5 }}>
                    <ActiveOrder
                      customPaperStyle={{
                        width: 150,
                        height: 150,
                        cursor: "pointer",
                        backgroundColor: selectedPizza ? "gray" : "white",
                      }}
                      description={`$${pizzaItem.price}`}
                      handleSelectedItem={handleSelectedItem}
                      imageSource={""}
                      itemId={pizzaItem.id}
                      title={pizzaItem.name}
                      titleConfig={{
                        variant: "body2",
                        style: { textAlign: "center" },
                      }}
                    />
                  </div>
                );
              })
            ) : (
              <ValidateData loading={loading} />
            )}
          </div>
        </div>
        {selectedPizzaData && selectedPizzaData?.length > 0 ? (
          <Cart data={selectedPizzaData} handleClick={handleCheckout} />
        ) : null}
      </Suspense>
    </Layout>
  );
};

export default withService(Order);
