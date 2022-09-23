import { Suspense, useRef, useState, lazy } from "react";
import Head from "next/head";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Image from "next/image";


// useRouter
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Home() {
  const router = useRouter();
  const [Loading, setLoading] = useState(true);
  const { login } = useAuth()

  const onLoad = (spline) => {
    console.log("loaded", spline);
    // setTimeout(() => {
      // setLoading(false);
    // }, 1500);
  };



  return (
    <Wrapper>
      <Suspense fallback={<div>loading</div>}>
      {/* {Loading && <main>loading spinner </main>} */}
      {/* {Loading && ( */}

        <HeaderWrapper>
          <header>
            
            {/* <div >
              <Image
                src="/assets/logo.png"
                alt="logo"
                // height={100}
                // width={100}
              />
            </div> */}
            <div className="slogan">
              <p>WELCOME TO THE MAGIC FLOW ACADEMY</p>
              <span>START NOW YOUR JOURNEY</span>
            </div>
          </header>
          <section className="actions">
            {/* <button onClick={ login}> */}
            <button onClick={() => router.push('/mfa')}>
              SIGN UP
            </button>
            <button>LOGIN</button>
          </section>
          <div className="hero-img">
            <Image src="/assets/smoke.png" alt="img" layout="fill" />
          </div>
        </HeaderWrapper>
      {/* // )} */}
      <Spline
        style={{
          position: "absolute",
          bottom: "-2rem",
        }}
        scene="https://prod.spline.design/ow1z-xuvzgX1wgCc/scene.splinecode"
        // onLoad={onLoad}
      />
      </Suspense>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  font-family: "Michroma", sans-serif;
  min-height: 100vh;
  background: linear-gradient(180deg, #6100ff -47.66%, #000000 100%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  p {
    font-size: 1.5rem;
  }

  header {
    height: 36%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }

  .slogan {
    margin-top: 2rem;
  }

  button {
    background: #00ffb2;
    width: 15rem;
    height: 4rem;
    border-radius: 0.5rem;
    margin: 0.5rem 0rem;
    cursor: pointer;
    z-index: 99;
  }

  .hero-img {
    position: absolute;
    bottom: 0;
    height: 40%;
    width: 100%;
    z-index: 3;
    opacity: 0.7;
  }

  .actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
  }
`;

const HeaderWrapper = styled.div`
  animation: fadeIn 1s;
  width: 100%;
  height: 100%;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
