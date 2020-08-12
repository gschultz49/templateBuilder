import { Fragment, useState } from "react";
import request, { getApiEndpoint } from "./api/requestTemplate";

const TemplateTwo = ({ templateResponse, setTemplateResponse }) => {
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [config, setConfig] = useState({
    url: getApiEndpoint("/templateTwo"),
  });
  return (
    <Fragment>
      <label>
        C value:
        <input
          type="text"
          value={c}
          onChange={(e) => setC(e.target.value)}
        ></input>
      </label>

      <label>
        D value:
        <input
          type="text"
          value={d}
          onChange={(e) => setD(e.target.value)}
        ></input>
      </label>

      <button
        onClick={async () => {
          console.log(c, d, config);
          const result = await request({
            c,
            d,
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

export default TemplateTwo;
