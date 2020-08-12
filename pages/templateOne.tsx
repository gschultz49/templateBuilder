import { Fragment, useState } from "react";
import request, { getApiEndpoint } from "./api/requestTemplate";

const TemplateOne = ({ templateResponse, setTemplateResponse }) => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [config, setConfig] = useState({
    url: getApiEndpoint("/templateOne"),
  });
  return (
    <Fragment>
      <label>
        A value:
        <input
          type="text"
          value={a}
          onChange={(e) => setA(e.target.value)}
        ></input>
      </label>

      <label>
        B value:
        <input
          type="text"
          value={b}
          onChange={(e) => setB(e.target.value)}
        ></input>
      </label>

      <button
        onClick={async () => {
          console.log(a, b, config);
          const result = await request({
            a,
            b,
            ...config,
          });
          setTemplateResponse(JSON.stringify(result));
        }}
      >
        Click to submit
      </button>
    </Fragment>
  );
};

export default TemplateOne;
