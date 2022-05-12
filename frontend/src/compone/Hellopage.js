import React  from 'react';
import styled from 'styled-components';
import background from '../images/blur-restaurant-interior.jpeg';
const Section = styled.section`
background: url(${background}) no-repeat center center;
height: 904px;
display:block;
background attachment fixed;
background-size:cover;

`;
const Content = styled.div``;
const Left = styled.div``;
const Title = styled.p``;
const Desc = styled.p``;
const Button = styled.a``;



const Hellopage=()=>
{
    return(
        <div>
            <Section>
                <Content>
                    <Left>
                        <Title>
                            <Desc />
                            <Button />                         
                        </Title>
                    </Left>
                </Content>
            </Section>
        </div>   
         )
};

export default Hellopage;