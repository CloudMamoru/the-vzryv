import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(styles.Sidebar, [className], {
        [styles.collapsed]: collapsed,
      })}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        {/* <LanguageSwitcher /> */}
      </div>
    </div>
  );
};
