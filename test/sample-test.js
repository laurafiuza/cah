const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Cards Against Humanity', function () {
  let cah, accounts, signers
  const baseURI =
    'https://gateway.pinata.cloud/ipfs/Qmb3Z8WaBPxyqYCiGEu4yoNU6vbnt6tM5U9EFdKp6cgKa6/'
  const SIZE_OF_PACK = 5
  const NUM_CARDS = 5695
  before(async () => {
    const CardsAgainstHumanity = await ethers.getContractFactory(
      'CardsAgainstHumanity',
    )
    cah = await CardsAgainstHumanity.deploy()
    await cah.deployed()
    expect(cah).to.exist
    signers = await ethers.getSigners()
    accounts = signers.map((s) => s.address)
  })
  it('Should return correct number of blanks for different token IDs', async function () {
    expect(await cah.getNumberOfBlanks(499)).to.equal(0)
    expect(await cah.getNumberOfBlanks(4275)).to.equal(0)
    expect(await cah.getNumberOfBlanks(1202)).to.equal(0)
    expect(await cah.getNumberOfBlanks(3496)).to.equal(0)
    expect(await cah.getNumberOfBlanks(447)).to.equal(0)

    expect(await cah.getNumberOfBlanks(2246)).to.equal(1)
    expect(await cah.getNumberOfBlanks(947)).to.equal(1)
    expect(await cah.getNumberOfBlanks(3747)).to.equal(1)
    expect(await cah.getNumberOfBlanks(5485)).to.equal(1)
    expect(await cah.getNumberOfBlanks(581)).to.equal(1)

    expect(await cah.getNumberOfBlanks(1179)).to.equal(2)
    expect(await cah.getNumberOfBlanks(4155)).to.equal(2)
    expect(await cah.getNumberOfBlanks(91)).to.equal(2)
    expect(await cah.getNumberOfBlanks(1830)).to.equal(2)
    expect(await cah.getNumberOfBlanks(849)).to.equal(2)

    expect(await cah.getNumberOfBlanks(4569)).to.equal(3)
    expect(await cah.getNumberOfBlanks(4048)).to.equal(3)

    await expect(cah.getNumberOfBlanks(5695)).to.be.reverted
  })
  it('Should claimPack correctly', async function () {
    const claimPackTx = await cah.claimPack(accounts[0], { value: 10 })
    await claimPackTx.wait() // wait until transaction is mined
    for (let i = 0; i < SIZE_OF_PACK; i++) {
      expect(await cah.ownerOf(i)).to.equal(accounts[0])
      expect(await cah.tokenURI(i)).to.equal(baseURI + i)
    }
  })
  it('Should not allow to mint after all tokens have been minted', async function () {
    // -1 is because a pack has already been minted above
    for (let i = 0; i < NUM_CARDS / SIZE_OF_PACK - 1; i++) {
      await cah.claimPack(accounts[0], { value: 10 })
    }
    await expect(cah.claimPack(accounts[0], { value: 10 })).to.be.reverted
  })
})
