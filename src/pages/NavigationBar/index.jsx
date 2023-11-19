import classNames from 'classnames';
import { NavTab } from '../../components/NavTab';
import { TABS } from '../../lib/constants';
import styles from './index.module.css';
import { useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);

export const NavigationBar = (props) => {
    const {
        isWindowNotFull,
        showNavigationBar
    } = props;

    const { pathname } = useLocation();

    return <div className={cx(styles.navigationBar, {
        [styles.windowNotFull]: isWindowNotFull,
        [styles.visible]: showNavigationBar && isWindowNotFull,
        [styles.hidden]: !showNavigationBar && isWindowNotFull,
    })}>
        {TABS.map(tab => <NavTab
                tabName={tab.tabName}
                linkTo={tab.linkTo}
                pathname={pathname}
            />
        )}
    </div>
}