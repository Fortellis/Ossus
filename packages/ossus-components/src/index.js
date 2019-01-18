// Docs Components
import TableOfContents from './components/TableOfContents';
import BreadCrumbs from './components/BreadCrumbs';
import Menu from './components/Menu';
import Paging from './components/Paging';
import Header from './components/Header';
import Footer from './components/Footer';
import CodeHighlight from './components/CodeHighlight';
import ScrollToTop from './components/ScrollToTop';
import Button from './components/Button';
import Flex from './components/Flex';
import Link from './components/Link';
import { Title, Subtitle } from './components/Title';
import { A, P, Ul, Ol, Pre, Table, H1, H2, H3, H4, Blockquote } from './components/MarkdownComponents';
import {
  Layout,
  ContentLayout,
  DocumentLayout,
  DocumentContent,
} from './components/Layout';
import FrontMatter from './components/FrontMatter';
// Blog Components
import { BlogLayout, BlogContent } from './blog/Layout';
import BlogSidebar from './blog/Sidebar';

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
    Table,
    Button,
    Blockquote,
  },
  Flex,
  Title,
  Subtitle,
  Layout,
  BreadCrumbs,
  ContentLayout,
  DocumentLayout,
  DocumentContent,
  TableOfContents,
  ScrollToTop,
  Menu,
  Link,
  Paging,
  Header,
  Footer,
  FrontMatter,
  CodeHighlight,
  BlogLayout,
  BlogContent,
  BlogSidebar,
};

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
  Button,
  Blockquote,
  // Non-primatives
  Flex,
  Link,
  Title,
  Subtitle,
  Table,
  Layout,
  BreadCrumbs,
  ContentLayout,
  DocumentLayout,
  DocumentContent,
  TableOfContents,
  CodeHighlight,
  ScrollToTop,
  Menu,
  Paging,
  Header,
  Footer,
  FrontMatter,
  BlogLayout,
  BlogContent,
  BlogSidebar,
};