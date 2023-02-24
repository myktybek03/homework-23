import React from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import styled from "styled-components"
import Buttons from "../UI/Button"

const BusketButton = ({ count, ...props }) => {
  return (
    <Buttons {...props}>
      <ShoppingCartIcon />
      <StyledTitle>You Cart</StyledTitle>
      <StyledCounter id="counter">{count}</StyledCounter>
    </Buttons>
  )
}

export default BusketButton

const StyledTitle = styled.span`
  margin: 0 1.5rem 0 0.75rem;
`

const StyledCounter = styled.span`
  background: #8a2b06;
  border-radius: 1.875rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6875rem;
  padding: 0.25rem 1.25rem;
`
