export interface assetsElement {
  symbol: string;
  description: string;
  market: string;
}

export const accessibleAssets: assetsElement[] = [
  {
    symbol: "BTC",
    description: "Bitcoin",
    market: "CRYPTO",
  },
  {
    symbol: "ETH",
    description: "Ethereum",
    market: "CRYPTO",
  },
  {
    symbol: "XRP",
    description: "XRP",
    market: "CRYPTO",
  },
  {
    symbol: "DOGE",
    description: "DogeCoin",
    market: "CRYPTO",
  },
  {
    symbol: "SOL",
    description: "Solana",
    market: "CRYPTO",
  },
];
