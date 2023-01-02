import React, { ReactChildren, ReactChild } from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return <div className="px-8 py-8 md:px-16 lg:px-32">{children}</div>;
};

export default MainLayout;
