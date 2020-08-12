import {
  TemplateResponse,
  GenerateTemplateFile,
  GenerateTemplateMetadata,
} from "./requestTemplate";

const TemplateOneConfig = (req, res) => {
  if (req.method === "POST") {
    // this is where the state would be translated into the json config object
    console.log(`Request obj:${req}`);
    const randomStateInput = "templateOne.sql";
    const testData: TemplateResponse = {
      isDirectory: false,
      data: [
        GenerateTemplateFile({
          name: randomStateInput,
          content: `
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

export default TemplateOneConfig;  