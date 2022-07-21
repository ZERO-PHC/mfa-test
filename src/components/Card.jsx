import styled from "styled-components";

const Card = ({imgLink, title, text}) => {
    return(
        <Wrapper>
                <img src={imgLink} alt="" />
            <div className="card">
                <h2>{title}</h2>
                <p>{text}</p>
                <button>EXPLORE</button>
            </div>
        </Wrapper>
    )
}

export default Card;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Widy";
    img{
        width: 233px;
        position: relative;
        top: 100px;
    }
    .card{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 80px 0;
        width: 340px;
        height: 425px;
        background-color: #1D1429;
        border-radius: 50px;

        h2{
            font-size: 22px;
            color: white;
            font-family: "WidyBold";
        }
        p{
            width: 250px;
            font-size: 14px;
            text-align: center;
            color: white;
        }
        button{
            margin: 10px;
            padding: 15px 40px;
            background-color: transparent;
            border: 1px solid white;
            color: white;
            border-radius: 10px;
            font-size: 15px;
            font-family: "Widy";

            &:hover{
                cursor: pointer;
            }
        }
    }
`