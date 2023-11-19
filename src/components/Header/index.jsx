import classNames from 'classnames';
import styles from './index.module.css';
const cx = classNames.bind(styles);

export const Header = (props) => {
    const {
        children,
        type = 1,
        windowWidth,
        withMarginTop,
        id,
        scrollAlignTop = true,
    } = props;

    return <div
        className={cx(styles.header, {
            [styles.h1]: type === 1,
            [styles.h2]: type === 2,
            [styles.h3]: type === 3,
            [styles.halfSize]: windowWidth < 600,
            [styles.withMarginTop]: withMarginTop,
        })}
        id={id}
        // onClick={() => document.getElementById(id)?.scrollIntoView(scrollAlignTop)}
    >
        <>{children}</>
        {/*
            linkTo
            ? <HashLink 
                className={cx(styles.link)}
                to={linkTo}
            >
                {children}
            </HashLink> 
            : <>{children}</>
        */}
    </div>
};