import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedPizza } from "../redux/selector";
import Layout from "../components/Layout";
import withReview from "../hoc/withReview";
import TopButton from "../components/TopButton";

const Review = () => {
  const navigate = useNavigate();
  const selectedPizzaData = useSelector(selectedPizza) || "";
  console.log({ selectedPizzaData });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <TopButton buttonTitle="Back to select pizza" handleClick={handleBack} />
      Review
    </Layout>
  );
};

export default withReview(Review);
