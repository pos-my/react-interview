import { memo } from "react";

const Layout = ({ children }) => (
  <div
    style={{
      padding: 8,
      backgroundColor: "gainsboro",
      height: "100%",
    }}
  >
    {children}
  </div>
);

export default memo(Layout);
