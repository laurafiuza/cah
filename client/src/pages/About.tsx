import React, {useContext} from 'react'
import { Container, ContentBlock, ContentRow, MainContent, Section } from '../components/base/base'
import { Text, } from '../typography/Text'
import { GitHubLink, EtherscanContractLink } from '../helpers'
import { DoubleTroubleContext } from '../DoubleTrouble';

export function About() {
  const { dtAddr } = useContext(DoubleTroubleContext);
  return (
    <MainContent>
      <Container>
        <Section>
          <ContentBlock>
            <ContentRow>
              <h1 style={{textAlign: 'center'}}>Cards Against Humanity 🤝</h1>
            </ContentRow>
            <ContentRow>
              <h2>About</h2>
	      <Text>We are building a Decentralized Cards Against Humanity. Black cards and white cards are NFTs that people can own - with black cards representing questions and white cards representing answers. People can buy these cards in packs of six -- 5 random white cards and 1 random black card. To start a game, those with a black card can click “start a game” on that question and a 24 hour clock will start. Those with white cards can submit an answer to any game that has been started. Whoever wins the round gets a special one-of-a-kind NFT that is a “combination” of the question and the answer together. Initially, we’ll have it so that the person who started the game gets to pick the white card that “won” that round (similarly to the original Cards Against Humanity), however, our intent in future iterations is to have it so that anyone can vote on the best answer and the answer with the most votes wins.</Text>
            </ContentRow>
            <ContentRow style={{paddingTop: 20}}>
              <EtherscanContractLink style={{position: 'absolute', bottom: 40, right: 20}} contract={dtAddr} />
              <GitHubLink style={{position: 'absolute', bottom: 20, right: 20}} />
            </ContentRow>
          </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}

