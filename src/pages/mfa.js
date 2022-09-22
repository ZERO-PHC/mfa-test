import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Mfa() {
  const router = useRouter();

  // useEffect that directs the user to the viewSamplers page after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      router.push("/viewSamplers");
    }, 7000);
  }, []);

  return (
    <main style={{height:'100vh', width:"100%"}}>
      <Image src="/assets/MFA.png" alt="mfa" layout="fill" />;
    </main>
  );
}
