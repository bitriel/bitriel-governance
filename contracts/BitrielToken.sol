//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IBitrielToken.sol";

contract BitrielToken is IBitrielToken, ERC20Votes, Ownable {
    constructor() ERC20("Bitriel", "BTR") ERC20Permit("Bitriel") {}

    /// @notice Creates `_amount` token to `_to`. Must only be called by the owner (MasterChef).
    function mint(address _to, uint256 _amount) public override onlyOwner {
        super._mint(_to, _amount);
    }
}
