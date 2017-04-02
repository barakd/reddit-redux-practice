import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const NameSpan = styled.span`
font-weight: bold;
text-decoration: underline;
padding-left: 5px;
`;

const StyledSmall = styled.small`
 display: inline-block;
`;
export default function SubmissionInfo(props) {
    const { author, time } = props;
    return (
        <StyledSmall>Submitted on {timeToReadableString(time)} by 
         <NameSpan>{author}</NameSpan>
    </StyledSmall>)
}

function timeToReadableString(time) {
    return moment(time).format('MMM dd, YYYY HH:MM');
}

