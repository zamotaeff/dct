const chains = [
    { id: 1,  name: "ethereum", gas: 500000 },
    { id: 137, name: "polygon",  gas: 200000 },
    { id: 324, name: "zksync",  gas: 150000 }
];

async function configureLayerZero() {
    const endpoint = await ethers.getContract("WCHEndpoint");
    
    for (const chain of chains) {
        const remoteAddress = getContractAddress(chain.name);
        await endpoint.setChainConfig(
            chain.id,
            ethers.utils.hexZeroPad(remoteAddress, 32),
            chain.gas
        );
    }
}
