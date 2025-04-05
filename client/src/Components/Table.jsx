import React from 'react';
import styled from 'styled-components';

const Table = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__title">Wagon Records</div>
        <div className="card__data">
          <div className="card__right">
            <div className="item">Wagon Number</div>
            <div className="item">Record Time</div>
            <div className="item">Amount</div>
            <div className="item">Condition</div>
            <div className="item">Report Download</div>
          </div>
          <div className="card__left">
            <div className="item">INT</div>
            <div className="item">DATETIME</div>
            <div className="item">DECIMAL</div>
            <div className="item">VARCHAR</div>
            <div className="item">LINK</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    background: rgb(44, 44, 44);
    font-family: "Courier New", Courier, monospace;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
  }

  .card__title {
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    border-bottom: 1px solid rgb(167, 159, 159);
    font-size: 0.95rem;
  }

  .card__data {
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
    border-right: 1px solid rgb(203, 203, 203);
    border-left: 1px solid rgb(203, 203, 203);
    border-bottom: 1px solid rgb(203, 203, 203);
  }

  .card__right {
    width: 60%;
    border-right: 1px solid rgb(203, 203, 203);
  }

  .card__left {
    width: 40%;
    text-align: end;
  }

  .item {
    padding: 3px 0;
    background-color: white;
  }

  .card__right .item {
    padding-left: 0.8em;
  }

  .card__left .item {
    padding-right: 0.8em;
  }

  .item:nth-child(even) {
    background: rgb(234, 235, 234);
  }
`;

export default Table;
