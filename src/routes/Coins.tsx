import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";
import { useSetRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const btn = <FontAwesomeIcon icon={faCircleHalfStroke} />;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 450px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CoinList = styled.ul`
  padding: 0px 20px;
`;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    padding: 10px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Icoin = styled.i`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 25px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggelDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title>Coin</Title>
        <Icoin onClick={toggelDarkAtom}>{btn}</Icoin>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}
export default Coins;
