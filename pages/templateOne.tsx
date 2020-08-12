import { Fragment, useState, useReducer } from "react";
import request, { getApiEndpoint } from "./api/requestTemplate";

const row = (props) => {
  return { ...props };
};

const initialState = [row({ a: "", b: "" })];

const TemplateOneRow = ({ rows, setRows, index }) => {
  const row = rows[index];
  console.log(row);
  return (
    <Fragment>
      <label>
        A value:
        <input
          type="text"
          value={row.a}
          onChange={(e) => {
            const newRow = {
              ...row,
              a: e.target.value,
            };
            const newRows = rows.map((row, iterationIndex) => {
              if (iterationIndex === index) {
                return newRow;
              }
              return row;
            });
            setRows(newRows);
          }}
        ></input>
      </label>

      <label>
        B value:
        <input
          type="text"
          value={row.b}
          onChange={(e) => {
            const newRow = {
              ...row,
              b: e.target.value,
            };
            const newRows = rows.map((row, iterationIndex) => {
              if (iterationIndex === index) {
                return newRow;
              }
              return row;
            });
            setRows(newRows);
          }}
        ></input>
      </label>
    </Fragment>
  );
};

const TemplateOne = ({ templateResponse, setTemplateResponse }) => {
  const [rows, setRows] = useState(initialState);
  const [config, setConfig] = useState({
    url: getApiEndpoint("/templateOne"),
  });
  return (
    <Fragment>
      {rows.map((_, index) => (
        <TemplateOneRow rows={rows} setRows={setRows} index={index} />
      ))}

      <button
        onClick={(e) => {
          setRows([...rows, row({ a: "", b: "" })]);
        }}
      >
        Add Row
      </button>

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={async () => {
            const result = await request({
              rows: rows,
              ...config,
            });
            setTemplateResponse(JSON.stringify(result));
          }}
        >
          Click to submit
        </button>
      </div>
    </Fragment>
  );
};

export default TemplateOne;
