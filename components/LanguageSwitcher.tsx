'use client';

import { Dispatch, SetStateAction } from 'react';

type Props = {
  lang: 'pt' | 'en';
  setLang: Dispatch<SetStateAction<'pt' | 'en'>>;
};

export function LanguageSwitcher({ lang, setLang }: Props) {
  return (
    <div className="flex gap-2 justify-center text-xs">
      <button
        onClick={() => setLang('pt')}
        className={`px-3 py-1 border rounded ${lang === 'pt' ? 'bg-gray-200' : ''}`}
      >
        PT
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 border rounded ${lang === 'en' ? 'bg-gray-200' : ''}`}
      >
        EN
      </button>
    </div>
  );
}
