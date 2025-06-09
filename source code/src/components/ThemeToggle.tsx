import React, { useEffect, useState } from 'react';

const themes = [
  { name: 'cupcake', label: '🌞 Cupcake' },
  { name: 'dracula', label: '🌙 Dracula' },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState('cupcake');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-sm btn-ghost m-1">
          Theme
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
          {themes.map((t) => (
            <li key={t.name}>
              <button
                className={`btn btn-sm btn-ghost w-full justify-start ${theme === t.name ? 'btn-active' : ''}`}
                onClick={() => setTheme(t.name)}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 