import { Button } from '../components/base/Button'

export function Get() {
  const mint = () => {
    // TODO
  }
  return (
    <Button onClick={mint} style={{padding: 5, marginTop: 10}}>
      Mint new pack of cards!
    </Button>
  )
}

