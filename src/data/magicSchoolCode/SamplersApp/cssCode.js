export const CssCode = {
    "Globals": `
    
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&
              family=Montserrat:wght@900&
              family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins' ,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: linear-gradient(89.11deg, #0e0d0d 25.47%, #3f8e76 99.28%);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .page{
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 0;
  }
  
  nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    width: 100%;
    color: white;
    z-index: 20;
    padding-left: 7rem;
    padding-right: 7rem;
  }
  
  nav > button {
    background-color: gray;
    border: none;
    padding: 10px 20px;
    border-radius: 40px;
    background: radial-gradient(
        54.9% 630.78% at 48.69% 44.74%,
        rgba(253, 253, 253, 0.12) 0%,
        rgba(248, 241, 255, 0.6) 100%
      );
    color: white;
    font-size: 15px;
    font-family: 'IBM Plex Sans';
    font-weight: 800;
  }
  
  nav > button:hover {
    cursor: pointer;
  }
  
  main{
    max-width: 70%;
    width: 100%;
    background: white;
    height: 80%;
    border-radius: 9px;
    margin-bottom: 2em;
  }
  
  .loggedDiv{
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 12px;
    padding: 5px 30px;
    background-color: gray;
    border-radius: 40px;
    background: radial-gradient(
        54.9% 630.78% at 48.69% 44.74%,
        rgba(253, 253, 253, 0.12) 0%,
        rgba(248, 241, 255, 0.6) 100%
      );
    color: white;
    font-size: 15px;
    font-family: 'IBM Plex Sans';
    font-weight: 800;
  }
  
  .loggedDiv > button{
    color: white;
    border: 1px solid white;
    background-color: transparent;
    padding: 5px;
    border-radius: 20px;
  }
  
  .loggedDiv > button:hover{
    cursor: pointer;
  }
  
  .mintDiv{
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .mintDiv > button{
    border: none;
    height: 2rem;
    width: 7rem;
    background: #000;
    border-radius: 20px;
    color: #fff;
  }
  
  .mintDiv > button:hover{
    cursor: pointer;
  }
  
  .nftsSection{
    display: flex;
    justify-content: center;
    width: 90%;
    margin: auto;
  }
  
  .nftsSection > section {
    display: flex;
    justify-content: center;  
    gap: 40px;
    flex-wrap: wrap;
  }
  
  .nftsSection > section > div{
    width: 77px;
    height: 77px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 77px;
    font-size: 10px;
  }
              
    `
  }
