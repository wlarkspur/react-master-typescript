import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import { type } from "os";

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

interface IChart {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<IChart>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <h1>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type="candlestick"
          series={
            [
              {
                data: data?.map((price) => {
                  return {
                    x: new Date(price.time_close * 1000).toISOString(),
                    y: [price.open, price.high, price.low, price.close],
                  };
                }),
              },
            ] as any
          }
          options={{
            chart: {
              type: "candlestick",
              height: 350,
              foreColor: `white`,
            },
            title: {
              text: "CandleStick chart",
              align: "left",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </h1>
  );
  /*   return (
    <h1>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => parseFloat(price.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            xaxis: {
              type: "datetime",

              categories: data?.map((price) =>
                new Date(price.time_close * 1000).toISOString()
              ),
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
            fill: {
              type: "gradient",
              colors: ["#0be881"],
              gradient: {
                gradientToColors: ["#0fbcf9"],
                stops: [0, 100],
              },
            },
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </h1>
  ); */
}

export default Chart;
