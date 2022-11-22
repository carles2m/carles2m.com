import { css, keyframes } from "@emotion/react";

const scaleInCenterKeyframes = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  80% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const scaleInCenter = css`
  animation: ${scaleInCenterKeyframes} 0.2s ease both;
`;

export const appearFrames = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

export const appear = css`
  animation: ${appearFrames} 3s ease both;
  max-width: fit-content;
  display: inline-block;
  line-height: normal;
  overflow: hidden;
  vertical-align: text-bottom;
  white-space: nowrap;
`;