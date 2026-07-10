import type { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VSCode Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "FileComponent.tsx",
              isFolder: false,
              content: `import React from "react";

interface IProps {
content: string;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
return ( <pre> <code>{content}</code> </pre>
);
};

export default FileSyntaxHighlighter;
`,
            },
            {
              id: uuid(),
              name: "SVG",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "File.tsx",
                  isFolder: false,
                  content: `import React from "react";

interface FileIconProps {
size?: number;
}

const FileIcon = ({ size = 20 }: FileIconProps) => {
return ( <svg
   width={size}
   height={size}
   viewBox="0 0 24 24"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
 > <path
     d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinejoin="round"
   /> <path
     d="M14 2V8H20"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinejoin="round"
   /> </svg>
);
};

export default FileIcon;
`,
                },
              ],
            },
          ],
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content: `import FileSyntaxHighlighter from "./components/FileComponent";

const sampleCode = const message = "Hello from VSCode Clone";
console.log(message);

function App() {
return ( <main> <h1>VSCode Clone</h1> <FileSyntaxHighlighter content={sampleCode} /> </main>
);
}

export default App;
`,
        },
        {
          id: uuid(),
          name: "index.ts",
          isFolder: false,
          content: `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
throw new Error("Root element was not found");
}

ReactDOM.createRoot(rootElement).render(
<React.StrictMode> <App />
</React.StrictMode>,
);
`,
        },
        {
          id: uuid(),
          name: "test",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "hello.html",
              isFolder: false,
              content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Page</title>
    <link rel="stylesheet" href="./hello.css" />
  </head>
  <body>
    <main class="container">
      <h1>Hello World</h1>
      <p id="message">Click the button to update this message.</p>
      <button id="hello-button">Say Hello</button>
    </main>
<script src="./hello.js"></script>
  </body>
</html>
`,
            },
            {
              id: uuid(),
              name: "hello.css",
              isFolder: false,
              content: `* {
  box-sizing: border-box;
}

body {
margin: 0;
font-family: Arial, sans-serif;
background: #f5f5f5;
}

.container {
max-width: 600px;
margin: 80px auto;
padding: 24px;
text-align: center;
background: white;
border-radius: 8px;
}

button {
padding: 10px 16px;
border: 0;
border-radius: 4px;
cursor: pointer;
background: #007acc;
color: white;
}

button:hover {
opacity: 0.9;
}
`,
            },
            {
              id: uuid(),
              name: "hello.js",
              isFolder: false,
              content: `const button = document.getElementById("hello-button");
const message = document.getElementById("message");

button?.addEventListener("click", () => {
if (message) {
message.textContent = "Hello from JavaScript!";
}
});
`,
            },
          ],
        },
      ],
    },
  ],
};
