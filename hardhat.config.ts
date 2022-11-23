import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";
import {
  ALCHEMY_API_KEY,
  ARBISCAN_NOVA_API_KEY,
  ARBISCAN_ONE_API_KEY,
  ARBITRUM_PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  GOERLI_PRIVATE_KEY,
} from "./key.config";

const config: HardhatUserConfig = {
  solidity: "0.8.16",

  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
      chainId: 5,
      timeout: 10 * 1000,
    },
    arbitrumGoerli: {
      url: `https://goerli-rollup.arbitrum.io/rpc`,
      accounts: [GOERLI_PRIVATE_KEY],
      chainId: 421613,
      timeout: 10 * 1000,
    },
    arbitrumNova: {
      url: `https://nova.arbitrum.io/rpc`,
      accounts: [ARBITRUM_PRIVATE_KEY],
      chainId: 42170,
      timeout: 10 * 1000,
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
      arbitrumOne: ARBISCAN_ONE_API_KEY,
      arbitrumNova: ARBISCAN_NOVA_API_KEY,
      arbitrumGoerli: ARBISCAN_ONE_API_KEY,
    },
    customChains: [
      {
        network: "arbitrumGoerli",
        chainId: 421613,
        urls: {
          apiURL: "https://api-goerli.arbiscan.io/api",
          browserURL: "https://goerli.arbiscan.io",
        },
      },
      {
        network: "arbitrumNova",
        chainId: 42170,
        urls: {
          apiURL: "https://api-nova.arbiscan.io/api",
          browserURL: "https://nova.arbiscan.io",
        },
      },
    ],
  },
};
export default config;
