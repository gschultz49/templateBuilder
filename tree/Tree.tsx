import styles from "./Tree.module.scss";
import Folder from "./Folder";
import File from "./File";

type FileType = "folder" | "file";
export interface FileNode {
  type: FileType;
  name: string;
  childrens?: FileNode[];
}

const StyledTree = ({ children }) => (
  <div className={styles.tree}>{children}</div>
);

const TreeRecursive = ({ data }) =>
  data.map((item: FileNode) => {
    if (item.type === "file") {
      return <File name={item.name} />;
    }
    if (item.type === "folder") {
      return (
        <Folder name={item.name}>
          {/* Call the <TreeRecursive /> component with the current item.childrens */}
          <TreeRecursive data={item.childrens} />
        </Folder>
      );
    }
  });

const Tree = ({ data, children }: { data?: any; children?: any }) => {
  const isImperative = data && !children;

  return (
    <StyledTree>
      {isImperative ? <TreeRecursive data={data} /> : children}
    </StyledTree>
  );
};

Tree.File = File;
Tree.Folder = Folder;

export default Tree;
