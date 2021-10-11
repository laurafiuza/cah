import { AccountButton } from '../components/account/AccountButton'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Button } from '../components/base/Button'
import { Title } from '../typography/Title'
import { Text } from '../typography/Text'

export function Get() {
  const mint = () => {
    // TODO
  }
  return (
    <MainContent>
    <Container>
      <Section>
        <SectionRow>
          <Title>Get Cards</Title>
          <AccountButton />
        </SectionRow>
        <ContentBlock>
          <ContentRow>
          <Text>You will get 1 question card and 5 answer cards.</Text>
          <Button onClick={mint} style={{padding: 5, marginTop: 10}}>Mint</Button>
          </ContentRow>
        </ContentBlock>
      </Section>
    </Container>
  </MainContent>
  )
}

