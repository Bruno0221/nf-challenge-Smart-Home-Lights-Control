import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onAllLightsOn,
  onAllLightsOff,
  allLightsOff,
  allLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          console.log("Turn all lights off");
          onAllLightsOff();
        }}
        disabled={allLightsOff}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          onAllLightsOn();
          console.log("Turn all lights on");
        }}
        disabled={allLightsOn}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
