import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
    PopoverTrigger,

} from '@chakra-ui/react'
export default function AvatarComponent({ checkStorage }) {
    return (
        <PopoverTrigger >

            <AvatarWrapper onClick={checkStorage}>
                <OrbsWrapper>
                    <div className='orb' > </div >
                    <div className='orb1' ></div >
                    <div className='orb2' ></div >
                    <div className='orb3' ></div >
                </OrbsWrapper>
                <img src="/assets/frAvatar.png" style={{ zIndex: 3 }} alt="avatar" />
            </AvatarWrapper>
        </PopoverTrigger>

    )
}

const AvatarWrapper = styled.div`
position:relative;
height:3rem;
width:3rem;
display:flex;
justify-content:center;
align-items:center;
`


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`


const OrbsWrapper = styled.div`
    position: absolute;
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50px;
    background-color: rgba(0,0,0,0.3);
    animation: ${rotate} 3s linear infinite;
   

    .orb{
        position: absolute;
        height:0.6rem;
        width: 0.6rem;
        top:0;
        background-color: #00FFB2;
        border-radius: 50px;}
    .orb1{
        position: absolute;
        height:0.6rem;
        width: 0.6rem;
        top:0;
        right:0;
        background-color: #00FFB2;
        border-radius: 50px;}
    .orb2{
        position: absolute;
        height:0.6rem;
        width: 0.6rem;
        bottom:0;
        background-color: #00FFB2;
        border-radius: 50px;}
    .orb3{
        position: absolute;
        height:0.6rem;
        width: 0.6rem;
        right:0;
        bottom:0;
        background-color: #00FFB2;
        border-radius: 50px;}
    `


