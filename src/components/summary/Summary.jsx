import { MenuItem, Select } from "@mui/material"
import { memo } from "react"
import BackgroundImg from "../../assets/images/summary-background.jpg"
import SummaryInfoCard from "./SummaryInfoCard"
import { styled } from "@mui/system"

const Summary = () => {
  return (
    <Container>
      <StyledImg src={BackgroundImg} alt="summary" />
      <SummaryInfoCard />
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        // onChange={(e) => changeSortDirection(e.target.value)}
      >
        <MenuItem value={"ASC"}>Cheaper</MenuItem>
        <MenuItem value={"DESC"}>More Expensive</MenuItem>
      </StyledSelect>
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

const StyledSelect = styled(Select)(() => ({
  "&": {
    backgroundColor: "#fff",
    width: "200px",
  },
}))
