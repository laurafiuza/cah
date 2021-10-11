import { useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import { AccountButton } from '../components/account/AccountButton'
import {
  Container,
  ContentBlock,
  ContentRow,
  MainContent,
  Section,
  SectionRow,
} from '../components/base/base'
import { Button } from '../components/base/Button'
import { Title } from '../typography/Title'
import { Text } from '../typography/Text'

export function Start() {
  const [tokenId, setTokenId] = useState(0)
  const startGame = () => {
    // TODO: call startGame with "tokenId"
  }
  const mint = () => {
    // TODO
  }

  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Start Game</Title>
            <AccountButton />
          </SectionRow>
          <ContentBlock>
            <ContentRow>
              <Text>
                If you own a Question Card, and it has never been played, you
                can start a game with it. If you don't own any Question Cards,
                you can buy a pack below or buy one from someone else.
              </Text>
              <InputGroup>
                <Text>Token ID:</Text>
                <FormControl
                  type="number"
                  id="start-game"
                  aria-describedby="basic-addon3"
                  onChange={(e) =>
                    setTokenId(e.target.value ? parseInt(e.target.value) : 0)
                  }
                  value={tokenId}
                />
                <Button
                  onClick={startGame}
                  style={{ padding: 5, marginTop: 10 }}
                >
                  Start Game
                </Button>
                <Button onClick={mint} style={{ padding: 5, marginTop: 10 }}>
                  Get New Pack
                </Button>
              </InputGroup>
            </ContentRow>
          </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}
