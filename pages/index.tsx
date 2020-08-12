import SyntaxHighlighter from "react-syntax-highlighter";
import { useState, Fragment } from "react";
import languagesSupported from "./languages";
import testLanguages from "../testSnippets";
import TemplateOne from "./templateOne";
import TemplateTwo from "./templateTwo";

const OptionFactory = (optionValue) => {
  return (
    <option key={optionValue} value={optionValue}>
      {optionValue}
    </option>
  );
};

const availableTemplates = {
  templateOne: () => (props) => <TemplateOne {...props} />,
  templateTwo: () => (props) => <TemplateTwo {...props} />,
};

const App = () => {
  const { reactString } = testLanguages;
  const [textAreaValue, setTextAreaValue] = useState(reactString);
  const [generated, setGenerated] = useState(reactString);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languagesSupported.find((e) => e === "json")
  );
  const [selectedTemplateName, setSelectedTemplateName] = useState("");
  const [SelectedTemplate, setSelectedTemplate] = useState(
    availableTemplates["templateOne"]
  );
  const [templateResponse, setTemplateResponse] = useState({});

  const handleInputBoxChange = (event) => {
    setTextAreaValue(event.target.value);
    setGenerated(event.target.value);
  };

  return (
    <Fragment>
      <select
        value={selectedTemplateName}
        onChange={(e) => {
          setSelectedTemplateName(e.target.value); // update select button
          setSelectedTemplate(availableTemplates[e.target.value]); // update the template we are looking at
        }}
      >
        {Object.keys(availableTemplates).map(OptionFactory)}
      </select>

      <SelectedTemplate
        templateResponse={templateResponse}
        setTemplateResponse={setTemplateResponse}
      />

      <div className="my-4 border-solid border-gray-600">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {languagesSupported.map(OptionFactory)}
        </select>
      </div>

      <div className="flex bg-gray-200">
        <div className="flex-1 text-gray-700 text-left bg-gray-400 px-4 py-2 m-2">
          <pre>
            <textarea
              rows={20}
              cols={60}
              value={textAreaValue}
              onChange={handleInputBoxChange}
            ></textarea>
          </pre>
        </div>
        <div className="flex-1 text-gray-700 text-left bg-gray-400 px-4 py-2 m-2">
          <pre>
            <code>
              <SyntaxHighlighter language={selectedLanguage}>
                {/* {generated} */}
                {JSON.stringify(templateResponse, undefined, 4)}
              </SyntaxHighlighter>
            </code>
          </pre>

          <button
            onClick={() => {
              console.log(generated);
              navigator.clipboard.writeText(
                JSON.stringify(templateResponse, undefined, 4)
              );
            }}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default App;

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}import languagesSupported from './languages';

//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }
