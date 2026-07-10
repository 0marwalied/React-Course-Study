import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProp {
  content?: string;
}

const FileSyntaxhigHlighter = ({ content }: IProp) => {
  if (!content) {
    return null;
  }
  return (
    <SyntaxHighlighter
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        overflowX: "auto",
        fontSize: "1rem",
      }}
      style={atomOneDark}
      showLineNumbers
    >
      {content}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxhigHlighter;
