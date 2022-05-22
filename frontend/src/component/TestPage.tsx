import React from 'react'
import styled from 'styled-components';

const ContentTwo = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    font-family: 'HanziPen TC';
    font-style: normal;
    font-weight: 400;
    font-size: 128px;
    line-height: 179px;

    position: absolute;
    top: 125px;
    left: 200px;
    letter-spacing: 0.1em;

    color: #F06C98;
`;

function TestPage() {
  return (
    <div className='Testpage'>
            <ContentTwo>Boba Map!!!!!!!!</ContentTwo>
    </div>


  )
}

export default TestPage