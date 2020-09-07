import styles from "./File.module.scss";
import { AiOutlineFile } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";

const FILE_ICONS = {
  js: <DiJavascript1 />,
  css: <DiCss3Full />,
  html: <DiHtml5 />,
  jsx: <DiReact />,
};

const StyledFile = ({ children }) => (
  <div className={styles.file}>{children}</div>
);
const File = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <StyledFile>
      {/* render the extension or fallback to generic file icon  */}
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span>
    </StyledFile>
  );
};
export default File;
