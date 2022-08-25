import { Divider, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import ItemSummary from "../components/pizzaContent/ItemSummary";
import CustomOption from "../components/pizzaContent/CustomOption";
import CustomCheese from "../components/pizzaContent/CustomCheese";

export const toUpperCase = (param) => {
  return param.charAt(0).toUpperCase() + param.slice(1);
};

const PizzaContent = ({ parentData, handleUpdateOptions }) => {
  let defaultSize = "";
  if (parentData?.availableSize?.includes("small")) {
    defaultSize = "Small";
  } else if (parentData?.availableSize?.includes("medium")) {
    defaultSize = "Medium";
  } else if (parentData?.availableSize?.includes("large")) {
    defaultSize = "Large";
  }

  const [options, setOptions] = useState([
    { id: 0, size: defaultSize, withCheese: true },
  ]);

  useEffect(() => {
    if (options) handleUpdateOptions(options, parentData.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const handleAdd = () => {
    setOptions((prev) => [
      ...prev,
      { id: prev.length, size: defaultSize, withCheese: true },
    ]);
  };

  const handleUpdatePizza = (id, value, toUpdate) => () => {
    let findPizza = options?.find((pizza) => pizza.id === id);
    const filterPizza = options?.filter((pizza) => pizza.id !== id);

    if (toUpdate === "size")
      findPizza = { ...findPizza, [toUpdate]: toUpperCase(value) };
    if (toUpdate === "withCheese")
      findPizza = { ...findPizza, [toUpdate]: value };
    const updatedListOfPizza = [...filterPizza, findPizza].sort(
      (a, b) => a.id - b.id
    );
    setOptions(updatedListOfPizza);
  };

  return (
    <div style={{ position: "relative", marginBottom: 20 }}>
      <Paper style={{ padding: 10 }}>
        <ItemSummary
          handleClick={handleAdd}
          options={options}
          parentData={parentData}
        />
        <Divider style={{ margin: "10px 0px 10px 0px" }} />
        <div>
          {options?.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CustomOption
                  parentData={parentData?.availableSize}
                  item={item}
                  handleUpdatePizza={handleUpdatePizza}
                />
                <CustomCheese
                  item={item}
                  handleUpdatePizza={handleUpdatePizza}
                />
                <Divider style={{ margin: "10px 0px 10px 0px" }} />
              </div>
            );
          })}
        </div>
      </Paper>
    </div>
  );
};

PizzaContent.defaultProps = {
  data: undefined,
};

export default PizzaContent;
