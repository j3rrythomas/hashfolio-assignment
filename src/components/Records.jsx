import React, { useState } from "react";
import styled from "styled-components";
import { Menu } from "antd";

import Portfolios from "./Portfolios";

const RecordsDiv = styled.div`
  margin: 5% 10%;
`;

const RecordsMenu = styled(Menu)`
  .ant-menu-item {
    font-size: 1.25rem;
    color: #8b8b8b;
    ::after {
      left: 0px;
      right: 0px;
    }
    :hover,
    :active,
    :focus {
      color: #2c73d2 !important;
    }
  }
  .ant-menu-item-selected {
    color: #2c73d2 !important;
  }
`;

const Records = () => {
  const [visibleItem, setVisibleItem] = useState("portfolios");

  const handleMenuSelect = (itemData) => {
    setVisibleItem(itemData.key);
  };
  return (
    <RecordsDiv>
      <RecordsMenu
        mode="horizontal"
        defaultSelectedKeys={["portfolios"]}
        onSelect={handleMenuSelect}
      >
        <Menu.Item key="portfolios">Portfolios</Menu.Item>
        <Menu.Item key="watchlist">Watchlist</Menu.Item>
      </RecordsMenu>

      {visibleItem === "portfolios" ? <Portfolios /> : <></>}
    </RecordsDiv>
  );
};

export default Records;
