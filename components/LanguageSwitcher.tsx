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
        className={`px-3 py-1 border border-gray-300/40 rounded cursor-pointer ${lang === 'pt' ? 'bg-gray-500 text-white border-gray-800' : 'bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white'}`}
      >
        PT
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 border border-gray-300/40 rounded cursor-pointer ${lang === 'en' ? 'bg-gray-500 text-white border-gray-800' : 'bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white'}`}
      >
        EN
      </button>
    </div>
  );
}
