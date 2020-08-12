import {
  TemplateResponse,
  GenerateTemplateFile,
  GenerateTemplateMetadata,
} from "./requestTemplate";

const TemplateTwoConfig = (req, res) => {
  if (req.method === "POST") {
    // this is where the state would be translated into the json config object
    console.log(req.body);
    const randomStateInput = "templateTwo.sql";
    const testData: TemplateResponse = {
      isDirectory: false,
      data: [
        GenerateTemplateFile({
          name: randomStateInput,
          content: `let c = ${req.body.c};
let d = ${req.body.d};
const Component = () => { 
    return (
    <pre>
        <code>
        <SyntaxHighlighter language="javascript">
            {jsCodeString}
        </SyntaxHighlhjkjhlighter>
        </code>
    </pre>
    );
};`,
          language: "javascript",
        }),
      ],
      metadata: GenerateTemplateMetadata({
        description: "I am metadata about this template",
      }),
    };
    return res.status(200).json(testData);
  } else {
    // Handle any other HTTP method
    return {
      error: "Error:! not a post request",
    };
  }
};

export default TemplateTwoConfig;
