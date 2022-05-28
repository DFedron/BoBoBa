import React from 'react'
import styled from 'styled-components';
import ButtomNavBar from './FooterNavBar';
import LoginHooks from './LoginHooks';

const Content = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;

    padding-top: 150px;
    padding-bottom: 200px;

    display: flex;
`;

const Form = styled.div`
    width: 447px;
    height: 561px;

    justify-content: center;
    align-items: center;
    text-align: center;
    background: #FDF6F6;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

    // display: grid;
`;

const Title = styled.div`
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    display: flex;

    align-items: center;
    justify-content: center;
    text-align: center;

    letter-spacing: 0.06em;
    color: #F3683C;

    width:  450px;
    height: 100px;
`;

const Block = styled.label`
	display: block;
	margin: 20px 20px;

`;

const Label = styled.label`
	margin-bottom: 0.5em;
	

`;

const Input = styled.input`
	padding: 0.5em;

	border: none;
	border-radius: 3px;
	width: 80%;
	margin-bottom: 0.5em;
`;


function SignIn() {
    return (
    <div className='SignIn'>
        <Content>
            <Form>
                <Title>Sign In</Title>
                <LoginHooks />
                <Block>
                    <Label>Email Address</Label>
                    <Input />
                </Block>
                <Block>
                    <label>Password</label>
                    <Input  />
                </Block>

            </Form>
        </Content>
            
        <ButtomNavBar></ButtomNavBar>
    </div>


  )
}
  


export default SignIn;