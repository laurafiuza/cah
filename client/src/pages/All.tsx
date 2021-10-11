import { AccountButton } from '../components/account/AccountButton'
import {
  Container,
  ContentBlock,
  MainContent,
  Section,
  SectionRow,
} from '../components/base/base'
import { Title } from '../typography/Title'

export function All() {
  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>All Games</Title>
            <AccountButton />
          </SectionRow>
        </Section>
      </Container>
      <Container>
        <Section>
          <ContentBlock>Game #1</ContentBlock>
        </Section>
      </Container>
      <Container>
        <Section>
          <ContentBlock>Game #2</ContentBlock>
        </Section>
      </Container>
      <Container>
        <Section>
          <ContentBlock>Game #3</ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}
