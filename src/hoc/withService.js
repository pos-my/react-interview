import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { services } from "../redux/selector";

const withService = (WrappedComponent) =>
  function WithServiceComponent(componentProps) {
    const servicesData = useSelector(services);

    return servicesData && servicesData?.length > 0 ? (
      <WrappedComponent {...componentProps}>
        {componentProps.children}
      </WrappedComponent>
    ) : (
      <Navigate to="/" replace />
    );
  };

export default withService;
