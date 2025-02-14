import React from "react";

import CTA from "../components/CTA.Jsx"

export default function Home() {

  return (
    <>
      <main className="flex flex-col items-center">
        Inicio
      </main>
      <div className="border-black border-4 p-2 min-h-screen bg-black">
        <CTA></CTA>
      </div>

      <section className="py-10 max-w-screen-xl mx-auto">

        <div className="">


          index 1
        </div>
      </section>
    </>
  );
}
