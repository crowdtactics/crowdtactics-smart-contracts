// SPDX-License-Identifier: MIT

// v4.5.0
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
pragma solidity ^0.8.7;

error Unsupport();

contract CrowdTactics is ERC721Enumerable, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    using Strings for uint256;

    address public adminAddress;
    string public baseTokenURI;

    Counters.Counter private _tokenIdCounter;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseUri,
        address _adminAddress
    ) ERC721(_name, _symbol) {
        baseTokenURI = _baseUri;
        adminAddress = _adminAddress;
    }

    // ---------------------------------- external -----------------------------------

    function setAdmin(address _adminAddress) external onlyOwner {
        require(_adminAddress != address(0), "Admin address cannot be zero");
        adminAddress = _adminAddress;
    }

    function safeMint(address to) public onlyAdmin {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
    }

    function setBaseURI(string memory baseURI) external onlyAdmin {
        baseTokenURI = baseURI;
    }

    // ---------------------------------- override -----------------------------------

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        revert Unsupport();
    }

    // -------------------------------------------------------------------------------

    modifier onlyAdmin() {
        require(msg.sender == adminAddress, "Management: Not admin");
        _;
    }
}
