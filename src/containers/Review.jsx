import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSelectedPizza } from "../redux/services";
import { selectedPizza } from "../redux/selector";
import Layout from "../components/Layout";
import withReview from "../hoc/withReview";
import TopButton from "../components/TopButton";
import PizzaContent from "./PizzaContent";
import FooterAction from "../components/FooterAction";

const Review = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedPizzaData = useSelector(selectedPizza);
  let totalPizza = 0;

  for (const element of selectedPizzaData) {
    totalPizza += element?.options ? element?.options?.length : 1;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleSummary = () => {
    navigate("/summary");
  };

  const handleUpdateOptions = (options, selectedId) => {
    let findPizza = selectedPizzaData?.find((pizza) => pizza.id === selectedId);
    const filterPizza = selectedPizzaData?.filter(
      (pizza) => pizza.id !== selectedId
    );

    findPizza = { ...findPizza, options };

    const updatedListOfPizza = [...filterPizza, findPizza].sort(
      (a, b) => a.id - b.id
    );

    dispatch(updateSelectedPizza(updatedListOfPizza));
  };

  return (
    <Layout>
      <TopButton buttonTitle="Back to select pizza" handleClick={handleBack} />
      <div
        style={{
          position: "absolute",
          inset: "70px 8px 60px 8px",
          overflowY: "scroll",
        }}
      >
        {selectedPizzaData && selectedPizzaData.length > 0
          ? selectedPizzaData?.map((item) => (
              <PizzaContent
                key={item.id}
                parentData={item}
                handleUpdateOptions={handleUpdateOptions}
              />
            ))
          : null}
      </div>
      <FooterAction
        disabledMainAction={totalPizza < 1}
        handleClick={handleSummary}
      />
    </Layout>
  );
};

export default withReview(Review);
