const python = `
def testFunction:
    return "I am in python"
`;

const reactString = `
const Component = () => { 
  return (
    <pre>
      <code>
        <SyntaxHighlighter language="javascript">
          {jsCodeString}
        </SyntaxHighlighter>
      </code>
    </pre>
  );
};
`;

const testLanguages = {
  python,
  reactString,
};

export default testLanguages;
