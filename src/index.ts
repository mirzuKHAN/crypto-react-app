import axios from 'axios';

interface CryptoData {
    data: {
        id: string,
        rank: string,
        symbol: string,
        name: string,
        supply: string,
        maxSupply: string,
        marketCapUsd: string,
        volumeUsd24Hr: string,
        priceUsd: string,
        changePercent24Hr: string,
        vwap24Hr: string,
    },
    timestamp: number,
};
  

async function fetchData(currency: string) {
    const response = await axios.get('https://api.coincap.io/v2/assets/' + currency);
    const data: CryptoData = response.data;
    return data;
}

export default fetchData;