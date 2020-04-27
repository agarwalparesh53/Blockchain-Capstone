// migrating the appropriate contracts
var SquareVerifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
var ERC721Mintable = artifacts.require("POVToken");

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier).then(() =>
  {
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address)
  });
  // deployer.deploy(SolnSquareVerifier);
  // deployer.deploy(ERC721Mintable);
};
