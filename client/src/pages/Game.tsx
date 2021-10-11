import { FormControl, InputGroup } from 'react-bootstrap'
import { Button } from '../components/base/Button'
import { AccountButton } from '../components/account/AccountButton'
import {
  Container,
  ContentBlock,
  ContentRow,
  MainContent,
  Section,
  SectionRow,
} from '../components/base/base'
import { Title } from '../typography/Title'
import { NFTViewer } from './ViewNFT'
import { useState } from 'react'

export function Game(props: { tokenId: number }) {
  // tokenId that pertains to a question card
  // TODO: error management:
  // - what if the tokenId isn't a CAH token
  // - what if the tokenId pertains to an ANSWER card instead of a QUESTION card
  // - what if the tokenId pertains to a QUESTION card that has already "expired"
  // - if it pertains to a QUESTION card that hasn't yet had a game, should probably click "start"
  // - what if the person isn't the owner of the card?
  const submittedAnswerCards: number[] = []
  const [tokenId, setTokenId] = useState(0)

  const submitAnswerCard = () => {
    // TODO: call submitAnswerCard with "tokenId"
  }

  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Answer this question</Title>
            <AccountButton />
          </SectionRow>
          <ContentBlock>
            <ContentRow>
              {/* TODO: make collection id of CardsAgainstHumanity after it's deployed */}
              <NFTViewer collection={''} tokenId={props.tokenId} />
            </ContentRow>
            <ContentRow>
              <Title>Submitted Answer Cards</Title>
              {submittedAnswerCards.map((card) => {
                ;<NFTViewer collection={''} tokenId={card} />
              })}
              <InputGroup>
                <InputGroup.Text>
                  Submit an Answer Card to this question
                </InputGroup.Text>
                {/* TODO: get time left for the question */}
                {/* TODO: connect account, check if connected */}
                <InputGroup.Text>You have 24 hours left</InputGroup.Text>
                <FormControl
                  type="number"
                  id="submit-answer-card"
                  aria-describedby="basic-addon3"
                  onChange={(e) =>
                    setTokenId(e.target.value ? parseInt(e.target.value) : 0)
                  }
                  value={tokenId}
                />
                <Button
                  onClick={submitAnswerCard}
                  style={{ padding: 5, marginTop: 10 }}
                >
                  Submit Answer Card
                </Button>
              </InputGroup>
            </ContentRow>
          </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}
