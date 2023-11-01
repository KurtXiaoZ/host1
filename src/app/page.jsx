"use client";
import { MaterialIconPicker } from "react-material-icon-picker";
import styles from './page.module.css';

export default function Home() {
  console.log('render Home');
  return <div className={styles.container}><MaterialIconPicker /></div>
}
