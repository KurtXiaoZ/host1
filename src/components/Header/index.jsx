import classNames from 'classnames';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

export const Header = (props) => {
    const {
        children,
        type = 1,
        windowWidth,
        withMarginTop,
        linkTo
    } = props;

    return <div
        className={cx(styles.header, {
            [styles.h1]: type === 1,
            [styles.h2]: type === 2,
            [styles.h3]: type === 3,
            [styles.halfSize]: windowWidth < 600,
            [styles.withMarginTop]: withMarginTop,
        })}
    >
        {
            linkTo
            ? <Link 
                className={cx(styles.link)}
                to={linkTo}
            >
                {children}
            </Link> 
            : <>{children}</>
        }
    </div>
};