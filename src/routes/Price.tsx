import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory, fetchCoins, fetchCoinTickers } from "../api";

interface IChart {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Container = styled.div`
  padding: 0px 0px;
  max-width: 600px;
`;

const PriceContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  border-radius: 10px;
  margin: 5px 0px;
`;

const CryptoPrice = styled.div`
  color: yellowgreen;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

function Price() {
  const { coinId } = useOutletContext<IChart>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["Buy", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId!),
    {
      refetchInterval: 3000,
    }
  );

  return (
    <Container>
      <PriceContainer>
        <CryptoPrice>
          <span>Market Cap </span>
        </CryptoPrice>
        <CryptoPrice>
          <span>
            $ {tickersData?.quotes.USD.market_cap.toLocaleString("en-US")}
          </span>
        </CryptoPrice>
      </PriceContainer>
      <PriceContainer>
        <CryptoPrice>
          <span>Volume 24h </span>
        </CryptoPrice>
        <CryptoPrice>
          <span>
            $ {tickersData?.quotes.USD.volume_24h.toLocaleString("en-US")}
          </span>
        </CryptoPrice>
      </PriceContainer>
    </Container>
  );
}

export default Price;
