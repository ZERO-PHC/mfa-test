export const CssCode = {
    "Globals": 
`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&family=Montserrat:wght@900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Monument','IBM Plex Sans' ,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: linear-gradient(89.11deg, #0e0d0d 25.47%, #3f8e76 99.28%);
  }

@font-face {
  font-family: 'Monument';
  src: url("https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/MonumentExtended-Regular.otf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'MonumentBold';
  src: url("https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/MonumentExtended-Ultrabold.otf");
  font-weight: 400;
  font-style: normal;
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
padding: 0 3rem;
}

button {
background-color: gray;
border: none;
padding: 10px 30px;
border-radius: 40px;
background: radial-gradient(
54.9% 630.78% at 48.69% 44.74%,
rgba(253, 253, 253, 0.12) 0%,
rgba(248, 241, 255, 0.6) 100%
);
color: white;
font-size: 15px;
font-family: 'Monument';
font-weight: 800;
}

button:hover {
cursor: pointer;
}

.logo{
  display: flex;
  align-items: center;
  font-family: 'MonumentBold';
  font-size: 1.25rem;
}

.logo > img{
  width: 80px;
}

.logged{
display: flex;
align-items: center;
gap: 20px;
padding: 5px 30px;
padding-right: 3px;
background-color: gray;
border-radius: 40px;
background: radial-gradient(
54.9% 630.78% at 48.69% 44.74%,
rgba(253, 253, 253, 0.12) 0%,
rgba(248, 241, 255, 0.6) 100%
);
font-size: 15px;
}

.logged > button{
background-color: transparent;
background: transparent;
border: 1px solid white;
font-size: .8rem;
}

.logged > span{
  font-size: .8rem;
}

.orbiesSection{
  width: 70%;
  height: 77%;
  background-color: white;
  margin: auto;
  border-radius: 10px;
}

.orbiesTab{
  display: flex;
  position: relative;
  top: -28px;
  gap: 0px;
  justify-content: center;
}

.orbiesTab > div {
  width: 80px;
  height: 70px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
}

.orbiesTab > div:hover {
  cursor: pointer;
}

.inactive{
  background: url("https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/inactive.png");
  width: 90px !important;
}

.commonTab{
  background: url("https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieCommonActive.png");
  width: 90px !important;
}

.legendaryTab{
  background: url("https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieLegendaryActive.png");
  width: 90px !important;
}

.rareTab{
  background: url("https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieRareActive.png");
  width: 90px !important;
}

.orbiesContent{
  display: flex;
  height: 60%;
}

.orbiesText{
  padding: 0px 40px;
}

.orbiesText > h2{
  font-family: "MonumentBold";
}

.orbiesText > p{
  width: 250px;
}

.orbiesText > button {
  background: black;
}

.signUpBtn{
  background: black;
}

.orbieImg{
  width: 100%;
  padding: 40px 50px;
  display: flex;
  justify-content: center;
}

.orbiesMintText{
  min-width: 40%;
}

.divider{
  background: url("https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbiesDivider.png");
  background-repeat: no-repeat;
  height: 100px;
  width: 100%;
}

.orbies{
  margin: auto;
  width: 80%;
  height: 80px;
  background-color: black;
  margin-top: 3px;
  display: flex;
  flex-wrap: wrap;
}

.orbie{
  width: 100px;
  top: -30px;
}
.orbie > img{
  width: 100px;
}

.none{
  display: none;
}`
}
