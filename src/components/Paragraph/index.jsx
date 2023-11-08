import classNames from 'classnames';
import styles from './index.module.css';
const cx = classNames.bind(styles);

export const Paragraph = (props) => {
    const {
        children
    } = props;

    return <p
        className={cx(styles.paragraph)}
    >
        {children}
    </p>
};