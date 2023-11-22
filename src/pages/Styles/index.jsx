import { useState } from 'react';
import { Header } from '../../components/Header';
import { Paragraph } from '../../components/Paragraph';
import { useWindowSize } from '../../lib/hooks';
import styles from './index.module.css';
import classNames from 'classnames';
import { MaterialIconPicker } from 'react-material-icon-picker';
import { MATERIAL_ICON_PICKER_STYLES } from '../../lib/constants';

const cx = classNames.bind(styles);

export const Styles = () => {
    const { width } = useWindowSize();
    const [iconPickerStyles, setIconPickerStyles] = useState({});

    return <div className={cx(styles.container)}>
        <Header
            type={1}
            windowWidth={width}
        >
            Styles
        </Header>
        <Paragraph>
            All available styles for the material icon picker component
        </Paragraph>
        <div className={cx(styles.iconPickerContainer)}>
            <MaterialIconPicker styles={iconPickerStyles}/>
        </div>
        <div className={cx(styles.stylesContainer)}>
            <Header
                type={3}
                windowWidth={width}
            >
                All available styles -- hover to see red borders of corresponding elements
            </Header>
            <ui>
                {MATERIAL_ICON_PICKER_STYLES.map(style => <div 
                    className={cx(styles.style)}
                    onMouseEnter={() => setIconPickerStyles({ [style]: (base) => ({ ...base, ...{ border: '1px solid red' } }) })}
                    onMouseLeave={() => setIconPickerStyles({})}
                >
                    {style}
                </div>)}
            </ui>
        </div>
    </div>
};