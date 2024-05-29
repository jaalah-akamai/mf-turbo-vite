import styled from '@emotion/styled'
import './Button.css'
import { useStore } from '@repo/store'

export function Button(props: { disabled?: boolean }) {
  const {count, setCount} = useStore()

  return (
    <StyledButton className="database-StyledButton" disabled={props.disabled} onClick={setCount}>
      UI Button count is {count}
    </StyledButton>
  )
}

const StyledButton = styled('button')(({
  backgroundColor: 'darkgreen',
  border: '1px solid green',
}))
