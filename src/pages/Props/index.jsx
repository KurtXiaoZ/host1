import { useState } from 'react';
import { Header } from '../../components/Header';
import { Paragraph } from '../../components/Paragraph';
import { Prop } from '../../components/Prop';
import { useWindowSize } from '../../lib/hooks';
import { CodeSnippet } from '../../components/CodeSnippet';
import Switch from "react-switch";
import styles from './index.module.css';
import classNames from 'classnames';

const cx = classNames.bind(styles);

export const Props = () => {
    const { width } = useWindowSize();
    const [showSandbox, setShowSandbox] = useState(true);

    return <div className={cx(styles.container)}>
        <Header
            type={1}
            windowWidth={width}
        >
            Props
        </Header>
        <Paragraph>
            All available props for the material icon picker component
        </Paragraph>
        <div className={cx(styles.showSandbox)}>
            <div>Show Sandbox:</div>
            <Switch
                className={cx(styles.toggle)}
                onChange={checked => setShowSandbox(checked)}
                checked={showSandbox}
            />
        </div>
        {showSandbox && <div className={cx(styles.codesandboxContainer)}>
            <iframe src="https://codesandbox.io/embed/vigilant-glade-vj69k5?fontsize=14&hidenavigation=1&theme=dark"
                className={cx(styles.codesandbox)}
                title="vigilant-glade-vj69k5"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
        </div>}
        <div className={cx(styles.propsContainer)}>
            <Header
                type={2}
                windowWidth={width}
                widthMarginTop
            >
                Search Box
            </Header>
            <Prop 
                propName={'defaultSearchValue?: string'}
                descriptions={['A default value for the search box']}
            />
            <Prop 
                propName={'searchValue?: string'}
                descriptions={['A fixed value for the search box', 'Overrides defaultSearchValue']}
            />
            <Prop 
                propName={'onSearchValueChange?: (value: string) => void'}
                descriptions={['A function that will be called when value of the search input box changes']}
            />
            <Prop 
                propName={'onSearchValueSettled?: (value: string) => void'}
                descriptions={['A function that will be called when a new search value is settled', 'Users can settle the search value by hitting enter or clicking the magnifying glass icon']}
            />
            <Prop 
                propName={'searchBoxPlaceholder?: string'}
                descriptions={['The placeholder value of the search input box']}
            />
            <Header
                type={2}
                windowWidth={width}
                widthMarginTop
            >
                Icon Type
            </Header>
            <Prop 
                propName={'type?: Type'}
                descriptions={['Type of material icons', 'type can be']}
            />
            <CodeSnippet>
                {`type Type = {\n   label: 'Filled' | 'Outlined' | 'Rounded' | 'Sharp' | 'Two Tone'\n   value: 'filled' | 'outlined' | 'rounded' | 'sharp' | 'two-tone'\n};`}
            </CodeSnippet>
            <Prop 
                propName={'onTypeChange?: (type: Type) => void'}
                descriptions={['A fixed value for the color of material icons']}
            />
            <Header
                type={2}
                windowWidth={width}
                widthMarginTop
            >
                Icon Color
            </Header>
            <Prop 
                propName={'hsva?: Hsva'}
                descriptions={['A fixed value for the color of material icons']}
            />
            <CodeSnippet>
                {`type Hsva = {\n   h: number;\n   s: number;\n   v: number;\n   a: number;\n};`}
            </CodeSnippet>
            <Prop 
                propName={'onHsvaChange?: (hsva: Hsva) => void'}
                descriptions={['A function that will be called when the color of material icons changes']}
            />
            <Header
                type={2}
                windowWidth={width}
                widthMarginTop
            >
                Icon
            </Header>
            <Prop 
                propName={'onIconClick?: (icon: string) => void'}
                descriptions={['A function that will be called when an icon is clicked']}
            />
            <Prop 
                propName={'onIconMouseEnter?: (icon: string) => void'}
                descriptions={['A function that will be called when an icon is mouse entered']}
            />
            <Prop 
                propName={'setIconTipText?: (icon: string) => string'}
                descriptions={['A function that customize icon tip']}
            />
            <Prop 
                propName={'onIconsScroll?: (e: React.SyntheticEvent) => void'}
                descriptions={['A function that is called when the icons container is scrolled']}
            />
            <Prop 
                propName={'disableLoader?: boolean'}
                descriptions={['If true, disable the loader icon when user scrolls to the bottom (false as default)']}
            />
            <Header
                type={2}
                windowWidth={width}
                widthMarginTop
            >
                Styles
            </Header>
            <Prop 
                propName={'styles?: IStyles'}
                descriptions={['Custom style of elements of the component', 'For more details, see Styles page']}
            />
            <CodeSnippet>
                {`type IStyles = Record<string, StyleUpdater};\ntype StyleUpdater = (baseStyle: StyleObject) => StyleObject;\ntype StyleObject = Record<string, string | number>;`}
            </CodeSnippet>
        </div>
    </div>
};