import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Container } from "@mui/material";
import { styled } from "@mui/system";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlockContainer = styled(Container)({
    width: '100%',
    overflowX: 'auto',
  });

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <CodeBlockContainer>
        <SyntaxHighlighter language={language} style={dracula}>
        {code}
        </SyntaxHighlighter>
    </CodeBlockContainer>
  );
};

export default CodeBlock;
