import fetchData from "../index.ts";
import { useState } from "react";
import { useEffect } from "react";

interface CryptoData {
  data: {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
  };
  timestamp: number;
}

interface Props {
  currency: string;
}

function Box({ currency }: Props) {
  // Making API call
  const [data, setData] = useState<CryptoData | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData(currency);
        setData(response);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchDataAsync();
  }, [currency]);

  // Rendering loading state or handle data when it becomes available
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border border-2 rounded-2 p-2">
      <h1>{data.data.name}</h1>
      <h4 className="overflow-hidden" style={{ color: "orange" }}>
        ${data.data.priceUsd}
      </h4>
      <div className="container">
        <div className="row row-cols-2">
          <div className="col overflow-hidden">volume:</div>
          <div className="col overflow-hidden">change:</div>
          <div className="col overflow-hidden">
            {parseFloat(data.data.volumeUsd24Hr) === 0
              ? "-"
              : data.data.volumeUsd24Hr}
          </div>
          <div
            className="col overflow-hidden"
            style={
              parseFloat(data.data.changePercent24Hr) < 0
                ? { color: "red" }
                : { color: "green" }
            }
          >
            {data.data.changePercent24Hr}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
