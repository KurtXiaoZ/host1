import classNames from 'classnames';
import styles from './index.module.css';
import { Header } from '../../components/Header';
import { useWindowSize } from '../../lib/hooks';
import { Paragraph } from '../../components/Paragraph';
import { CodeSnippet } from '../../components/CodeSnippet';
const cx = classNames.bind(styles);

export const QuickStart = () => {
    const { width } = useWindowSize();

    return <div className={cx(styles.container)}>
        <Header
            type={1}
            windowWidth={width}
        >
            Getting Started
        </Header>
        <Paragraph>
            A react material icon picker is a component that allows user to select material icons with customized type and color.
        </Paragraph>
        <Header
            type={2}
            windowWidth={width}
            withMarginTop
            linkTo='/quickstart/#installation'
        >
            Installation
        </Header>
        <CodeSnippet>
            npm install react-material-icon-picker
        </CodeSnippet>
        <Header
            type={2}
            windowWidth={width}
            withMarginTop
            linkTo='/quickstart/#usage'
        >
            Usage
        </Header>
        <Paragraph>
            1. Import <code>react-material-icon-picker</code> after installation.
        </Paragraph>
    </div>
};