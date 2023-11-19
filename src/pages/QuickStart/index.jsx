import classNames from 'classnames';
import styles from './index.module.css';
import { Header } from '../../components/Header';
import { useWindowSize } from '../../lib/hooks';
import { Paragraph } from '../../components/Paragraph';
import { CodeSnippet } from '../../components/CodeSnippet';
import { MaterialIconPicker } from 'react-material-icon-picker';
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
            linkTo='/quickstart#installation'
            id='installation'
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
            linkTo='/quickstart#usage'
            id='usage'
        >
            Usage
        </Header>
        <Paragraph>
            1. Import <code>react-material-icon-picker</code> after installation.
        </Paragraph>
        <CodeSnippet>
            {"import { MaterialIconPicker } from 'react-material-icon-picker';"}
        </CodeSnippet>
        <Paragraph>
            2. Create a parent element whose width is not determined by its children.
        </Paragraph>
        <CodeSnippet>
            {"<div className='parent'>\n\n</div>"}
        </CodeSnippet>
        <Paragraph>
            3. Use react material icon picker as a child of the container
        </Paragraph>
        <CodeSnippet>
            {"<div className='parent'>\n    <MaterialIconPicker />\n</div>"}
        </CodeSnippet>
        <Header
            type={2}
            windowWidth={width}
            withMarginTop
            linkTo='/quickstart#demo'
            id='demo'
        >
            Demo
        </Header>
        {true && <div className={cx(styles.demo)}>
            <div className={cx(styles.iconPickerContainer)}>
                <MaterialIconPicker />
            </div>
        </div>}
    </div>
};