import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Card } from "@mui/material";
export const rotate = keyframes`
from {
  margin-Top: 0px;
}
to {
  margin-Top: -125px;
}
`;
export const DailyRcmContainer = styled(Card)`
    width: 37.4%;
    background-color: rgb(37, 37, 37);
    border-radius: 0.625rem;
    position: relative;
    height: 238.5px;
`;
export const DailyRcmImg = styled.img`
  width: 100%;
  animation: ${rotate} 15s linear infinite;
  animation-direction: alternate;
  z-index=-1;
  filter: blur(0.5px);
`;

export const DailyRcmFont = styled.p`
    z-index=0;
    position: absolute;
    margin: 0;
    left: 10px;
    bottom: 0px;
    color: rgb(180, 180, 180);
    font-weight: bold;
    font-size: 40px;
`;
