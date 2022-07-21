import styled  from "styled-components"

const AddressComp = ({flow, user}) => {
    return (
        <AddressWrapper>
            <div className="addressBox">
                {flow.length > 6 ? <p>FLOW {flow.slice(0,6)}</p> : <p> FLOW {flow} </p>}
                <div className="dot"></div>
                {user?.addr && (
                <p>
                    {user?.addr.split(".")[0].length > 14
                    ? "0x..." + user?.addr.slice(user?.addr.length - 6)
                    : user?.addr.length > 14
                    ? "..." + user?.addr.slice(user?.addr.length - 6)
                    : user?.addr}
                </p>
                )}
            </div>
        </AddressWrapper>
    )
}

export default AddressComp

const AddressWrapper = styled.div`
    .addressBox{
        font-family: "Monument";
        font-size: 12px;
        padding: 5px 20px;
        background-color: gray;
        border-radius: 40px;
        background: radial-gradient(
            54.9% 630.78% at 48.69% 44.74%,
            rgba(253, 253, 253, 0.12) 0%,
            rgba(248, 241, 255, 0.6) 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

        & button {
            display: none;
            padding: 5px 15px;
            margin: 0px 10px;
            border-radius: 10px;
            font-family: "Monument";
            font-size: 0.7rem;
            transition: 1s;
        }

        &:hover {
            cursor: pointer;
            & button {
                display: flex;
                &:hover {
                cursor: pointer;
                }
            }
        }
    }
`