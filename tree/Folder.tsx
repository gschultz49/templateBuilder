import { useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";
import styles from "./Folder.module.scss";

const Collapsible = ({ isOpen, children }) => {
  if (isOpen) {
    return <div className={styles.collapsible0}>{children}</div>;
  } else {
    return <div className={styles.collapsibleAuto}>{children}</div>;
  }
};

const StyledFolder = ({ children }) => (
  <div className={styles.folder}>{children}</div>
);

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        <AiOutlineFolder />
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

export default Folder;
