import React, { useState } from 'react'
import styled from 'styled-components';

export default function NftCardComponent({dragon}) {
  const [modal, setModal] = useState(false)

  return (
    <>
      <Wrapper>
          <div 
          className="card"
          onClick={() => setModal(true)}
          >
            <img src={dragon.link} alt="" />
            <p>{dragon.price}</p>
          </div>
      </Wrapper>
      {modal && 
        <Modal>
          <div className="modal">
            <p className='close' onClick={() => setModal(false)}>x</p>
            <img src={dragon.link} alt="" />
            <div className="words">
              <h2>Name: {dragon.title}</h2>
              <p>Price: {dragon.price}</p>
            </div>
            <button>BUY</button>
          </div>
        </Modal>
      }
    </>
  )
}

const Wrapper = styled.div`
  height: fit-content
  ;
  .card{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 30px;
    width: 170px;
    border-radius: 30px;
    background-color: black;
    img{
      width: 120px;
    }
    p{
      color: white;
      font-size: 14px;
      margin: 0;
    }
  }

  &:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: .5s;
  }
`

const Modal = styled.div`
  .modal{
    position: absolute;
    top: 200px;
    left: 200px;
    max-width: 800px;
    width: 80%;
    height: 70vh;
    padding: 50px;
    border-radius: 30px;
    background-color: #9b9b9b;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    text-align: center;

    img{
      width: 400px;
    }
  }

  .close{
    position: relative;
    top: 88px;
    left: 350px;
    font-size: 20px;
    font-family: MonumentBold;

    &:hover{
      cursor: pointer;
    }
  }

  button{
    padding: 10px 40px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid black;
    font-family: MonumentBold;

    &:hover{
      cursor: pointer;
      transform: scale(1.05);
      transition: .3s;
    }
  }

`
