import React from 'react';
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('json', json);

function CodeHighlight(props) {
    const realProps = props.children[0].props;
    const getLang = () => {
        if (realProps.className) {
            return realProps.className.split('-')[1];
        }
        return 'text';
    }
    return (
        <SyntaxHighlighter
            language={getLang()}
            style={def}
        >
            {realProps.children[0]}
        </SyntaxHighlighter>
    );
}

// Default theme
const def = {
    "hljs": {
        "display": "block",
        "overflowX": "auto",
        "padding": "20px",
        "backgroundColor": "#202632",
        "color": "#ffffff",
        "borderRadius": "4px",
        "fontSize": ".85rem"
    },
    "hljs-subst": {
      "color": "#ffffff"
    },
    "hljs-comment": {
        "color": "#5c6370",
        "fontStyle": "italic"
    },
    "hljs-doctag": {
        "color": "#c678dd"
    },
    "hljs-keyword": {
        "color": "#c678dd"
    },
    "hljs-formula": {
        "color": "#c678dd"
    },
    "hljs-string": {
        "color": "#904778"
    },
    "hljs-regexp": {
        "color": "#904778"
    },
    "hljs-addition": {
        "color": "#904778"
    },
    "hljs-attribute": {
        "color": "#904778"
    },
    "hljs-meta-string": {
        "color": "#904778"
    },
    "hljs-number": {
        "color": "#209AE2"
    },
    "hljs-variable": {
        "color": "#e6c07b"
    },
    "hljs-template-variable": {
        "color": "#e6c07b"
    },
    "hljs-type": {
        "color": "#e6c07b"
    },
    "hljs-selector-class": {
        "color": "#e6c07b"
    },
    "hljs-selector-attr": {
        "color": "#e6c07b"
    },
    "hljs-pseudo": {
        "color": "#e6c07b"
    },
    "hljs-literal": {
        "color": "#41BF3E"
    },
    "hljs-symbol": {
        "color": "#41BF3E"
    },
    "hljs-bullet": {
        "color": "#41BF3E"
    },
    "hljs-link": {
        "color": "#41BF3E"
    },
    "hljs-meta": {
        "color": "#41BF3E"
    },
    "hljs-selector-id": {
        "color": "#41BF3E"
    },
    "hljs-title": {
        "color": "#41BF3E"
    },
    "hljs-emphasis": {
        "fontStyle": "italic"
    },
    "hljs-strong": {
        "fontWeight": "bold"
    },
    "hljs-link": {
        "textDecoration": "underline"
    },
}


export default CodeHighlight;