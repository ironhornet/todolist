import styled from "@emotion/styled";

export const StyledDiv = styled.div`
    position: relative;

    input {
      position: absolute;
      opacity: 0;
    }

    input:checked + label svg path {
      stroke-dashoffset: 0;
    }

    input:focus + label {
      transform: scale(1.03);
    }

    input + label {
      display: block;
      border: 2px solid #333;
      width: 25px;
      height: 25px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    input + label:active {
      transform: scale(1.05);
      border-radius: 12px;
    }

    input + label svg {
      pointer-events: none;
      padding: 5%;
    }

    input + label svg path {
      fill: none;
      stroke: #333;
      stroke-width: 4px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 100;
      stroke-dashoffset: 101;
      transition: all 250ms cubic-bezier(1, 0, 0.37, 0.91);
    }
  `;