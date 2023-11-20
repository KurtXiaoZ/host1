import { HashRouter, Route, Routes } from "react-router-dom";
import { NavigationBar, Props, QuickStart, Caveats, Styles } from '..';
import styles from './index.module.css';
import { GITHUB_HREF, NPM_HREF } from "../../lib/constants";
import { useWindowSize } from '../../lib/hooks';
import MenuSVG from '../../assets/menu.svg';
import classNames from "classnames";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

export const App = () => {
  const { width } = useWindowSize();
  const isFullWindow = width === 0 ? true : width > 800;
  const isMinWindow = width < 420;
  const [showNavigationBar, setShowNavigationBar] = useState(false);

  useEffect(() => {
    setShowNavigationBar(false);
  }, [isFullWindow]);

  return <HashRouter>
    <div className={cx(styles.header)}>
        {!isFullWindow && <img src={MenuSVG} className={cx(styles.headerMenuIcon)} onClick={() => setShowNavigationBar(!showNavigationBar)}/>}
        <span className={cx(styles.headerTitle)}>React Material Icon Picker</span>
        {!isMinWindow && <a target="_blank" href={NPM_HREF} className={cx(styles.headerLink, styles.leftmostHeaderLink)}>NPM</a>}
        {!isMinWindow && <a target="_blank" href={GITHUB_HREF} className={cx(styles.headerLink)}>Github</a>}
    </div>
    <div className={cx(styles.main, {
      [styles.dark]: showNavigationBar && !isFullWindow
    })}>
      {<NavigationBar isWindowNotFull={!isFullWindow} showNavigationBar={showNavigationBar}/>}
      <div className={cx(styles.content)}>
        <Routes>
            <Route path="/quickstart" Component={QuickStart}/>
            <Route path="/props" Component={Props}/>
            <Route path="/styles" Component={Styles}/>
            <Route path="/caveats" Component={Caveats}/>
        </Routes>
      </div>
      {!isFullWindow && showNavigationBar && <div 
        className={cx(styles.overlay)}
        onClick={() => setShowNavigationBar(false)}
      ></div>}
    </div>
  </HashRouter>
}