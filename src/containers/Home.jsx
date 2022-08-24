import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import Layout from "../components/Layout";
import { updateService } from "../redux/services";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectType = (param) => {
    dispatch(updateService(param));
    navigate("../order");
  };

  return (
    <Layout>
      <Welcome handleSelectType={handleSelectType} />
    </Layout>
  );
};

export default Home;
