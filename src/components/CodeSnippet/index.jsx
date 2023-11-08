import classNames from 'classnames';
import { useRef, useEffect } from 'react';
import styles from './index.module.css';
import hljs from "highlight.js/lib/core";
import javascript from 'highlight.js/lib/languages/javascript';
import CopyIcon from '../../assets/copy.svg';
import "highlight.js/styles/paraiso-light.css";
const cx = classNames.bind(styles);

hljs.registerLanguage("javascript", javascript);

export const CodeSnippet = (props) => {
    const {
        children
    } = props;

    const codeRef = useRef(null);

    useEffect(() => {
        hljs.highlightBlock(codeRef.current);
    }, []);

    return <div className={cx(styles.codeContainer)}>
        <pre>
            <code 
                className='javascript'
                ref={codeRef}
            >
                {children}
            </code>
        </pre>
        <img
            src={CopyIcon}
            className={cx(styles.copy)}
            onClick={() => navigator.clipboard.writeText(String(children))}
        />
    </div>
};