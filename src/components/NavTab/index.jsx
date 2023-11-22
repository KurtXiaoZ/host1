import { Link } from 'react-router-dom';
import styles from './index.module.css';
import classNames from 'classnames';
import { TABS } from '../../lib/constants';
const cx = classNames.bind(styles);

export const NavTab = (props) => {
    const {
        tabName = '',
        linkTo = '/',
        pathname = '/'
    } = props;

    return <Link 
        className={cx(styles.tab, {
            [styles.current]: pathname === linkTo || (TABS.map(tab => tab.linkTo).indexOf(pathname) === -1 && tabName === TABS[0].tabName)
        })}
        to={linkTo}
    >
        {tabName}
    </Link>
};