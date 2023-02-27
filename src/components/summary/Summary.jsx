import { memo } from "react"
import BackgroundImg from "../../assets/images/summary-background.jpg"
import SummaryInfoCard from "./SummaryInfoCard"
import { styled } from "@mui/system"

const Summary = () => {
  return (
    <Container>
      <StyledImg src={BackgroundImg} alt="summary" />
      <SummaryInfoCard />
    </Container>
  )
}

export default memo(Summary)

const Container = styled("div")(() => ({
  "&": {
    height: "27.5625rem",
  },
}))

const StyledImg = styled("img")(() => ({
  "&": {
    height: "100%",
  },
}))
