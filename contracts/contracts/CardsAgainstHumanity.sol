pragma solidity ^0.8.0;

// Do we need these?
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

// SPDX-License-Identifier: MIT
contract CardsAgainstHumanity {
  string blackCards[];
  string whiteCards[];
  constructor() ERC721("Cards Against Humanity", "DAH") {}

  function mintPackOfCards() {
    // TODO
  }

  function startAGame() {
    // TODO
  }

  function submitAnAnswer() {
    // TODO
  }

  function voteOnAnAnswer() {
    // TODO
  }
}
