import classNames from 'classnames';
import { NavTab } from '../../components/NavTab';
import { TABS } from '../../lib/constants';
import styles from './index.module.css';
const cx = classNames.bind(styles);

export const NavigationBar = (props) => {
    const {
        isWindowNotFull
    } = props;

    return <div className={cx(styles.navigationBar, {
        [styles.windowNotFull]: isWindowNotFull
    })}>
        {TABS.map(tab => <NavTab
                tabName={tab.tabName}
                linkTo={tab.linkTo}
            />
        )}
    </div>
}