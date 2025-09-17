import React from "react";
import { ApiCallUsingFetch } from "./ApiCallUsingFetch";
import { ApiCallUsingAxios } from "./ApiCallUsingAxios";
import { ApiCallUsingAxiosAsync1 } from "./ApiCallUsingAxiosAsync1";

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
    </div>
  );
};
