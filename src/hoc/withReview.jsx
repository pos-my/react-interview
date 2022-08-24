import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { services, selectedPizza } from "../redux/selector";

const withReview = (WrappedComponent) =>
  function WithServiceComponent(componentProps) {
    const servicesData = useSelector(services);
    const selectedPizzaData = useSelector(selectedPizza) || "";

    return servicesData &&
      selectedPizzaData &&
      servicesData?.length > 0 &&
      selectedPizzaData?.length > 0 ? (
      <WrappedComponent {...componentProps}>
        {componentProps.children}
      </WrappedComponent>
    ) : (
      <Navigate to="/" replace />
    );
  };

export default withReview;
