export function getContractDeployParams(network: string) {
  switch (network) {
    case "goerli":
    case "arbitrumGoerli":
    case "arbitrumNova": {
      return [
        "Crowd Tactics SBT",
        "CROWD TACTICS SBT",
        "https://wc2022.crowdtactics.io/api/asset/",
        "0x0ec8336cfFA663F33BD2840307Bc44c097366C07",
      ];
    }
    default: {
      return [];
    }
  }
}
