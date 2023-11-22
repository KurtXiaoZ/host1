import { useWindowSize } from '../../lib/hooks';
import styles from './index.module.css';
import classNames from "classnames";
import { Header } from '../../components/Header';
import { Paragraph } from '../../components/Paragraph';
import { Prop } from '../../components/Prop';
const cx = classNames.bind(styles);

export const Caveats = () => {
    const { width } = useWindowSize();

    return <div className={cx(styles.container)}>
        <Header
            type={1}
            windowWidth={width}
        >
            Caveats
        </Header>
        <Paragraph>
            All caveats that needs attention for the component.
        </Paragraph>
        <Header
            type={2}
            windowWidth={width}
        >
            Use with Next.JS
        </Header>
        <Paragraph>
            To use the component with Next.JS, add 'use client'
        </Paragraph>
        <Header
            type={2}
            windowWidth={width}
        >
            Report Issues
        </Header>
        <Paragraph>
            To report an issue, please navigate to GitHub by clicking on the top right corner.
        </Paragraph>
        <Header
            type={3}
            windowWidth={width}
        >
            Contribute
        </Header>
        <Paragraph>
            To contribute, please fork the repo and submit a pull request.
        </Paragraph>
    </div>
};