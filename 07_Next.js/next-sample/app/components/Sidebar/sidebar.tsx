// app/components/Sidebar/Sidebar.tsx
import styles from "./Sidebar.module.css";


const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>📘 Learn Panel</div>

      <div className={styles.sidebarBody}>
        {/* HTML */}
        <ul className={styles.parent}>
          <li>
            HTML
            <ul className="child">
              <li data-file="ショートカットキー.md">ショートカットキー</li>
              <li data-file="基本タグ.md">基本タグ</li>
              <li data-file="グローバルナビ.md">グローバルナビ</li>
            </ul>
          </li>
        </ul>

        {/* CSS */}
        <ul className={styles.parent}>
          <li>
            CSS
            <ul className="child">
              <li data-file="フォント.md">フォント</li>
              <li data-file="CSSを適用する方法.md">CSSを適用する方法</li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
