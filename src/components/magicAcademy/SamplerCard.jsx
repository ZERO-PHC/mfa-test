import React from 'react'
import styled from 'styled-components'
import Image from "next/image"
import { useRouter } from "next/router"
import { useMagicSchoolSteps } from '../../contexts/MagicSchoolStepsContext';



export default function SamplerCard({ name, id, xp, active, handleCardSelection, path }) {
    const router = useRouter();
    const { getOrbiesData } = useMagicSchoolSteps()

    const handleCardClick = async () => {
        await getOrbiesData()
        router.push(path)
    }

    return (
        <Wrapper onClick={handleCardSelection}>
            <div className='header'>
                <div style={{ width: '40%', height: '100%', position: "relative", borderRight: "1px solid lightgrey" }}>
                    <div className='sampler-name'>
                        {name}
                    </div>
                    <Image src="/assets/preview.png" alt="preview" layout="fill" objectPosition={"center"} />
                </div>
                <div style={{ width: '60%', height: '100%', padding:"0.5rem 1rem" }}>
                    description
                </div>
            </div >
            <div className='content-wrapper'>
                <div className='header-title'>
                    <span>
                        SAMPLER LVL {id + 1}
                    </span>
                </div>
                <div className='content'>
                        <ul>
                            <li>
                                 XP: {xp}
                            </li>
                            <li>
                                Floats:
                            </li>
                        </ul>

                </div>
            </div>

            <footer>
                <div style={{ width: '100%' }}>
                    <svg width="100%" height="8" viewBox="0 0 422 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="7" x='-214' width="428" height="1" fill="#D9D9D9" />
                        <rect x="225" width="497" height="1" fill="#D9D9D9" />
                        <path d="M214 7L225 0V1L214 8V7Z" fill="#D9D9D9" />
                    </svg>

                </div>
                <button disabled={path == undefined ? true : false} onClick={() => handleCardClick(path)}>
                    {path == undefined ? "Coming soon..." : "Start"}
                </button>
            </footer>



        </Wrapper>
    )
}

const Wrapper = styled.main`
  height:16rem;
  width:70%;
  background: black;
  color:white;
  border-radius: 0.5rem;
  margin:2rem;
  display:flex;
  flex-direction:column;
//   align-items:center;
  font-family:"Michroma", sans-serif;
    // border: 1px solid #D9D9D9;
  animation: fadeIn 0.5s ease-in;
  delay:2s;
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(2rem);
        }
        to {
            opacity: 1;
            transform: translateY(0rem);
        }
    }
    

  .sampler-name{
    font-size:1rem;
    font-weight:bold;
    position:absolute;
    text-transform:uppercase;
    top:0.5rem;
    left:0.5rem;
    z-index:1;
  }

  ul { 
    display:flex;
    width:100%;
    justify-content:space-between;
  }

  span{
    margin:0.3rem;
  }

  .header{
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:50%;
    width:100%;
  }

  footer {
    height: 3%;
    text-align: right;

    button  {
        margin: 0.1rem 0.5rem;}
  }

  .content-wrapper {
    display:flex;
    flex-direction:row;
    height:30%;
    width:100%;
    border-top: 1px solid lightgrey;
  } 
  .header-title{
    height:30%;
    display:flex;
    flex-direction:column;
    align-items:space-between;
    width:100%;
  }

  .content{
    height:50%;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem 0.5rem 1rem 2rem;

    button{
        &:hover{
            transform: scale(1.06);
        }
    }
  }

`;
