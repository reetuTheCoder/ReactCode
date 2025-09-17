import React from "react";
import { ApiCallUsingFetch } from "./APICall/ApiCallUsingFetch";
import { ApiCallUsingAxios } from "./APICall/ApiCallUsingAxios";
import { ApiCallUsingAxiosAsync1 } from "./APICall/ApiCallUsingAxiosAsync1";
import { ApiCallUsingAxiosAsync2 } from "./APICall/ApiCallUsingAxiosAsync2";

export const Main = () => {
  return (
    <div>
      <h2>Api Call Using Fetch</h2>
      <ApiCallUsingFetch />
      <br />
      <br />
      <h2>Api Call Using Axios</h2>
      <ApiCallUsingAxios />
      <br />
      <br />
      <h2>Api Call Using  with Async Await</h2>
      <ApiCallUsingAxiosAsync1 />
        <br />
      <br />
      <h2>IIFE (Immediately Invoked Function Expression)</h2>
      <ApiCallUsingAxiosAsync2 />
      
    </div>
  );
};
