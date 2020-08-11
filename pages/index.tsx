import Head from "next/head";
import styles from "../styles/Home.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useState, Fragment } from "react";
import languagesSupported from "./languages";
import testLanguages from "../testSnippets";

const LanguageOption = (language) => {
  return <option value={language}>{language}</option>;
};

const App = () => {
  const { reactString } = testLanguages;
  const [textAreaValue, setTextAreaValue] = useState(reactString);
  const [generated, setGenerated] = useState(reactString);

  const [selectedLanguage, setSelectedLanguage] = useState(
    languagesSupported.find((e) => e === "javascript")
  );
  const handleChange = (event) => {
    setTextAreaValue(event.target.value);
    setGenerated(event.target.value);
  };
  return (
    <Fragment>
      <textarea
        rows={20}
        cols={50}
        value={textAreaValue}
        onChange={handleChange}
      ></textarea>
      <pre>
        <code>
          <SyntaxHighlighter language={selectedLanguage}>
            {generated}
          </SyntaxHighlighter>
        </code>
      </pre>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {languagesSupported.map(LanguageOption)}
      </select>
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
