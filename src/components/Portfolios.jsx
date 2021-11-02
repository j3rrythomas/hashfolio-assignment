import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Pagination, Button } from "antd";

import BasketCard from "./BasketCard";
import data from "../data";

const PortfoliosPagination = styled(Pagination)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`;
const OptionsDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
`;
const SeeAllButton = styled(Button)`
  color: #ffffff;
  background: #2c73d2 !important;
  margin-top: 2%;
`;
const OrderedViewButton = styled(SeeAllButton)``;

const Portfolios = () => {
  const [basketsData, setBasketsData] = useState([]);
  const [paginatedBasketsData, setPaginatedBasketsData] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currPage, setCurrPage] = useState(1);
  useEffect(() => {
    setBasketsData(data.results);
    setPaginatedBasketsData(data.results.slice(0, pageSize));
  }, [pageSize]);

  const paginationItemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <Button>Previous</Button>;
    }
    if (type === "next") {
      return <Button>Next</Button>;
    }
    return originalElement;
  };
  const handlePagination = (data) => {
    setCurrPage(data);
    const page = data - 1;
    const startingIndex = page * currPage;
    console.log(startingIndex);
    console.log(startingIndex + pageSize);
    setPaginatedBasketsData(
      basketsData.slice(startingIndex, startingIndex + pageSize)
    );
  };
  return (
    <>
      {paginatedBasketsData.map((basketData, index) => {
        const cardColor = index % 2 === 0 ? "#F7F7F7" : "#FFFFFF";
        return (
          <BasketCard
            key={basketData.basket_id}
            color={cardColor}
            basketData={basketData}
          />
        );
      })}

      {basketsData.length > pageSize ? (
        <>
          <PortfoliosPagination
            responsive
            itemRender={paginationItemRender}
            defaultCurrent={1}
            current={currPage}
            pageSize={pageSize}
            total={basketsData.length}
            onChange={handlePagination}
          />
          <OptionsDiv>
            <SeeAllButton
              type="primary"
              size="large"
              onClick={() => setPageSize(basketsData.length)}
            >
              See All Baskets
            </SeeAllButton>
          </OptionsDiv>
        </>
      ) : (
        <OptionsDiv>
          <OrderedViewButton
            type="primary"
            size="large"
            onClick={() => {
              setPageSize(4);
            }}
          >
            Ordered View
          </OrderedViewButton>
        </OptionsDiv>
      )}
    </>
  );
};

export default Portfolios;
