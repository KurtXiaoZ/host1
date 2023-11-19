import { Link } from 'react-router-dom';
import styles from './index.module.css';
import classNames from 'classnames';
const cx = classNames.bind(styles);

export const NavTab = (props) => {
    const {
        tabName = '',
        linkTo = '/',
        pathname = '/'
    } = props;

    return <Link 
        className={cx(styles.tab, {
            [styles.current]: pathname === linkTo
        })}
        to={linkTo}
    >
        {tabName}
    </Link>
};