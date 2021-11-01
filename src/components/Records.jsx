import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Menu } from "antd";

import BasketCard from "./BasketCard";
import data from "../data";

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
  const handleMenuSelect = (itemData) => {
    setVisibleItem(itemData.key);
  };
  useEffect(() => {
    setBasketsData(data.results);
    console.log(basketsData);
  }, []);
  const [visibleItem, setVisibleItem] = useState("portfolios");
  const [basketsData, setBasketsData] = useState([]);
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

      {visibleItem === "portfolios" ? (
        basketsData.map((card, index) => {
          const cardColor = index % 2 === 0 ? "#F7F7F7" : "#FFFFFF";
          return <BasketCard color={cardColor} />;
        })
      ) : (
        <>WatchList</>
      )}
    </RecordsDiv>
  );
};

export default Records;
