import React from "react";
import styled from "styled-components";
import { Row, Col, Image } from "antd";

const ImgCol = styled(Col)`
    .ant-image{
        margin-left:30%;
    }
`;
const FlexCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #a2a2a2;
`;
const BasketInfo = styled(FlexCol)`
  align-items: flex-start;
  div{
      margin:1.5% 0;
  }
`;
const InvestmentValue = styled(FlexCol)`
  span {
    color: #000000;
    font-size: 1rem;
  }
`;
const CurrentValue = styled(InvestmentValue)``;
const Returns = styled(InvestmentValue)`
  span {
    color: #0abf49;
  }
`;

const BasketCard = ({color}) => {
  return (
    <Row gutter={[8, 32]} style={{backgroundColor:color,padding:"1% 0"}}>
      <ImgCol flex={1}>
        <Image
          src="https://api-dev.hashfolio.in/static/logos/baskets/basket.png"
          width={125}
          height={125}
          preview={false}
          style={{ borderRadius: "50%"}}
        />
      </ImgCol>
      <BasketInfo flex={2}>
        <div>
          Basket:{" "}
          <span
            style={{
              fontSize: "1.375rem",
              fontWeight: 500,
              color: "#000000",
            }}
          >
            Basket A
          </span>
        </div>
        <div>
          Assets:{" "}
          <span
            style={{
              color: "#797979",
            }}
          ></span>
        </div>
        <div>
          Manager:{" "}
          <span
            style={{
              fontSize: "1.125rem",
              fontWeight: 300,
              color: "#6D6D6D",
            }}
          >
            Manage Rrrr
          </span>
        </div>
      </BasketInfo>

      <InvestmentValue flex={1}>
        <div>Investment Value</div>
        <span>{"\u20B9"}12345.5</span>
      </InvestmentValue>
      <CurrentValue flex={1}>
      <div>Current Value</div>
        <span>{"\u20B9"}12345.5</span>
      </CurrentValue>
      <Returns flex={1}>
      <div>Returns</div>
        <span>12345.5%</span>
      </Returns>
    </Row>
  );
};

export default BasketCard;
