import { Divider, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import ItemSummary from "../components/pizzaContent/ItemSummary";
import CustomOption from "../components/pizzaContent/CustomOption";
import CustomCheese from "../components/pizzaContent/CustomCheese";
import DeleteAction from "../components/DeleteAction";

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

  const validateOption = parentData?.options
    ? parentData?.options
    : [{ id: 0, size: defaultSize, withCheese: true }];

  const [options, setOptions] = useState(validateOption);

  useEffect(() => {
    if (!parentData.options)
      handleUpdateOptions(
        [{ id: 0, size: defaultSize, withCheese: true }],
        parentData.id
      );
  }, [defaultSize, handleUpdateOptions, parentData.id, parentData.options]);

  const handleAdd = () => {
    const updatedPizza = [
      ...options,
      { id: options.length, size: defaultSize, withCheese: true },
    ];
    setOptions(updatedPizza);
    handleUpdateOptions(updatedPizza, parentData.id);
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
    handleUpdateOptions(updatedListOfPizza, parentData.id);
  };

  const handleDelete = (param) => () => {
    const removeData = options.filter((item) => item.id !== param);
    setOptions(removeData);
    handleUpdateOptions(removeData, parentData.id);
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
                <DeleteAction handleClick={handleDelete(item.id)} />
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
