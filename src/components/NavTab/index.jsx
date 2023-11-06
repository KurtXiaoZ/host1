import { Link } from 'react-router-dom';
import styles from './index.module.css';
import classNames from 'classnames';
const cx = classNames.bind(styles);

export const NavTab = (props) => {
    const {
        tabName = '',
        linkTo = '/'
    } = props;

    return <Link className={cx(styles.tab)} to={linkTo}>{tabName}</Link>
};