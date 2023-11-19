import styles from './index.module.css';
import classNames from 'classnames';

const cx = classNames.bind(styles);

export const Prop = (props) => {
    const {
        propName = '',
        descriptions = [],
    } = props || {};

    return <div className={cx(styles.container)}>
        <div className={cx(styles.propName)}>{propName}</div>
        <ul className={cx(styles.descriptions)}>
            {descriptions.map(description => <li className={cx(styles.description)}>
                {description}
            </li>)}
        </ul>
    </div>
}