import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: ${props => props.alignItems || 'flex-start'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
`
export default FlexContainer;