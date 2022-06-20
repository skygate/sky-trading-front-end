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
  {
    symbol: "stockTest",
    description: "stockTest",
    market: "STOCKS",
  },
  {
    symbol: "contractsTest",
    description: "contractsTest",
    market: "CONTRACTS",
  },
  {
    symbol: "ForexTest",
    description: "ForexTest",
    market: "FOREX",
  },
  {
    symbol: "IndexTest",
    description: "IndexTest",
    market: "INDEX",
  },
  {
    symbol: "BondTest",
    description: "BondTest",
    market: "BOND",
  },
  {
    symbol: "ForexTest2",
    description: "ForexTest2",
    market: "FOREX",
  },
  {
    symbol: "IndexTest2",
    description: "IndexTest2",
    market: "INDEX",
  },
  {
    symbol: "BondTest2",
    description: "BondTest2",
    market: "BOND",
  },
];
