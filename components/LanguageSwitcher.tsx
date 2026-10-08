'use client';

import { Dispatch, SetStateAction } from 'react';

type Props = {
  lang: 'pt' | 'en';
  setLang: Dispatch<SetStateAction<'pt' | 'en'>>;
};

export function LanguageSwitcher({ lang, setLang }: Props) {
  const base =
    'px-3 py-1 border rounded cursor-pointer transition-colors border-border/60';
  const active = 'bg-primary text-primary-foreground border-primary';
  const inactive =
    'bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-gray-700 dark:hover:text-white';

  return (
    <div className="flex gap-2 justify-center text-xs">
      <button
        onClick={() => setLang('pt')}
        className={`${base} ${lang === 'pt' ? active : inactive}`}
      >
        PT
      </button>
      <button
        onClick={() => setLang('en')}
        className={`${base} ${lang === 'en' ? active : inactive}`}
      >
        EN
      </button>
    </div>
  );
}
