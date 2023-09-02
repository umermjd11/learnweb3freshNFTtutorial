const hre = require("hardhat");

async function main() {

    const [owner] = await hre.ethers.getSigners();

    console.log(await owner.getAddress());

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });