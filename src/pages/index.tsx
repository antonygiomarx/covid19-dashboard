import fetch from "isomorphic-unfetch";
import Head from "next/head";
import App from "../components/App";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export default function Index({ cases }: any) {
  const [getData, setData] = useState(cases);

  let count = 0;
  setInterval(() => {
    count++;
    console.log(
      `Ahora el contador es de ${count}, el total de horas UP es ${
        (count * 5) / 60
      }`
    );
  }, 1000 * 60 * 5);

  useEffect(() => {
    axios.get("https://api.covid19api.com/summary").then((res: any) => {
      console.log("data =>", res.data);
      res.data != getData
        ? setData(res.data)
        : console.log("La data no ha cambiado");
    });
  }, [count]);

  return (
    <div>
      <Head>
        <title>Covid-19 Dashboard</title>
      </Head>
      <App data={getData} />
    </div>
  );
}

Index.getInitialProps = async (ctx: any) => {
  const res = await fetch("https://api.covid19api.com/summary");
  const data = await res.json();
  return {
    cases: data,
  };
};
