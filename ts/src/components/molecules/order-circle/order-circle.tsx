import styled from "styled-components"

interface circleProps {
    bgColor?: string
}

export const SCircle = styled.div<circleProps>`
  display: inline-table;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.bgColor || 'white'}
`;

export const SCircleContent = styled.span`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: white;
`;