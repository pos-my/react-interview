import { memo } from "react";
import { Button, Typography } from "@mui/material";

const CustomCheese = ({ item, handleUpdatePizza, title }) => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        alignItems: "center",
      }}
    >
      <Typography variant="body2">
        <span style={{ fontWeight: "bold" }}>{title}</span>:
      </Typography>
      <div
        style={{
          marginLeft: 10,
          display: "flex",
          position: "relative",
        }}
      >
        {["Yes", "No"]?.map((cheeseOption) => {
          const booleanCheeseType = cheeseOption === "Yes";

          return (
            <div key={cheeseOption} style={{ marginRight: 5 }}>
              <Button
                elevation={0}
                variant={
                  item.withCheese === booleanCheeseType
                    ? `contained`
                    : "outline"
                }
                style={{
                  color: item.withCheese === booleanCheeseType ? "" : "gray",
                }}
                onClick={handleUpdatePizza(
                  item.id,
                  booleanCheeseType,
                  "withCheese"
                )}
              >
                {cheeseOption}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

CustomCheese.defaultProps = {
  title: "With Cheese",
};

export default memo(CustomCheese);
