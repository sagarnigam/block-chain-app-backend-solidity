// https://eth-rinkeby.alchemyapi.io/v2/H547m1P_PI-XH28g9kT3gxuh9NDkrIwI

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/H547m1P_PI-XH28g9kT3gxuh9NDkrIwI',
      accounts: ['3f83df4bc4fd18673c71a38b70a4635de0b27ad2610d6efedaff204324a8249e'],
    }
  }
}