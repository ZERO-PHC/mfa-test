import styled from "styled-components"

const IntroAndFinishView = ({professorName, introduction, subtitle, subtitle2, rewards1, rewards2, rewards3, footer, buttons}) => {
    return (
        <Wrapper>
            <p className="professorName"> {professorName}</p>
            <div className="header">
                <p> {introduction}</p>
                <p> {subtitle}</p>
            </div>
            <div className="body">
                <p> {subtitle2}</p>
                <div className="rewards">
                    {rewards1 && <p>{rewards1}</p>}
                    {rewards2 && <p>{rewards2}</p>}
                    {rewards3 && <p>{rewards3}</p>}
                </div>
            </div>
            <div className="footer">
                {footer && <p>{footer}</p>}
                <div className="footerBtns">
                    {
                    buttons && buttons.map((button, index) => {
                        return ( <button key={index}>{button}</button> )
                    }
                    )}
                </div>
            </div>
        </Wrapper>

    )
}

export default IntroAndFinishView

const Wrapper = styled.section`
    background: url("/magicSchoolModal/dialogBoxBig.svg");
    height: 634px;
    width: 1010px;
    margin-top: 4rem;
    padding: 4rem;
    background-repeat: no-repeat;
    background-position-x: center;
    color: #00FFB2;
    
    .professorName{
        color: #00FFB2;
        font-weight: bold;
        font-size: 1.4rem;
    }
    .header{
        padding: 20px 0;
        color: white;
        line-height: 2rem;
        
    }
    .body{
        padding: 20px 0;
        font-weight: bold;
    }
    .rewards{
        padding: 30px;
        p{
            font-weight: bold;
            font-size: 1.3rem;
        }
    }
    .footer{
        padding: 20px 0;
    }
    .footerBtns{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    }

    .footerBtns > button{
        padding: 0px 20px;
        display: flex;
        background-color: #00FFB2;
        color: black;
    }
`