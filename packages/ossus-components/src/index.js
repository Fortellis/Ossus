
import TableOfContents from './components/TableOfContents';
import Menu from './components/Menu';
import Paging from './components/Paging';
import Header from './components/Header';
import Footer from './components/Footer';
import CodeHighlight from './components/CodeHighlight';
import { A, P, Ul, Ol, Pre, Table, H1, H2, H3, H4 } from './components/MarkdownComponents';
import {
    Layout,
    ContentLayout,
    DocumentLayout,
    DocumentContent,
} from './components/Layout';
import FrontMatter from './components/FrontMatter';

export default {
    primatives: {
        A,
        P,
        Ul,
        Ol,
        H1,
        H2,
        H3,
        H4,
        Pre,
        Table
    },
    Layout,
    ContentLayout,
    DocumentLayout,
    DocumentContent,
    TableOfContents,
    Menu,
    Paging,
    Header,
    Footer,
    FrontMatter,
    CodeHighlight
}

export {
    A,
    P,
    Ul,
    Ol,
    H1,
    H2,
    H3,
    H4,
    Pre,
    Table,
    Layout,
    ContentLayout,
    DocumentLayout,
    DocumentContent,
    TableOfContents,
    CodeHighlight,
    Menu,
    Paging,
    Header,
    Footer,
    FrontMatter
}