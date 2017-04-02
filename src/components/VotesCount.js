import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const Arrow = styled(FontAwesome) `
   font-size: 18px;
   color: gray;
   cursor: pointer;
   &:hover{
         color: black; 
   }
`;

const VotesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;`;

function VotesCount({ onVote, score }) {
    return (
        <VotesContainer style={{ width: '60px'}} center="xs" middle="xs">
            <Arrow name="arrow-up"  onClick={() => onVote(1)} />
            <p>{score}</p>
            <Arrow name="arrow-down" onClick={() => onVote(-1)} />
        </VotesContainer>
    );
}
VotesCount.propTypes = {
    score: PropTypes.number,
    onVote: PropTypes.func,
};
 
export default VotesCount;