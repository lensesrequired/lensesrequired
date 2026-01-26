import { SECTIONS, SECTIONS_CONFIG } from '@/constants/content';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { Josefin_Sans, Source_Code_Pro } from 'next/font/google';
import { ReactNode } from 'react';
import {
  AiFillFileMarkdown,
  AiFillFolderOpen,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';
import './globals.css';

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Anna Marek-Loew',
  description: 'Personal Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const socials = [
    {
      Icon: AiOutlineMail,
      link: 'mailto:anna@marekloew.com',
      color: 'text-green-400',
    },
    {
      Icon: AiFillLinkedin,
      link: 'https://www.linkedin.com/in/asmarek',
      color: 'text-blue-400',
    },
    {
      Icon: AiFillGithub,
      link: 'https://www.github.com/lensesrequired',
      color: 'text-purple-400',
    },
  ];

  return (
    <html lang="en">
      <body className={`${josefinSans.className}`}>
        <main>
          <div className="h-screen bg-gray-900 text-gray-200 flex flex-col">
            {/* Top Window Bar */}
            <header className="h-10 flex items-center justify-between px-4 bg-gray-700 border-b border-gray-800">
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-300">
                Anna Marek-Loew - Fullstack Developer - Tech Lead
              </span>
              <div className="flex items-center gap-1">
                {socials.map(({ Icon, link, color }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classNames(
                      'p-1 rounded-md hover:bg-gray-800',
                      color,
                    )}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </header>

            {/* Main IDE Body */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar / Project Tree */}
              <aside className="hidden sm:inline shrink-0 bg-gray-800 p-4 text-sm">
                <p className="text-gray-300 mb-2 uppercase tracking-wide text-xs">
                  Project
                </p>
                <ul className="list-none space-y-1 mr-3">
                  <li className="flex items-center gap-2 text-violet-400">
                    <AiFillFolderOpen /> src
                  </li>
                  {Object.values(SECTIONS).map((section) => (
                    <li key={section} className="flex items-center gap-2 ml-4">
                      <AiFillFileMarkdown />
                      <a
                        href={`#${section}`}
                        className="text-gray-200 hover:text-violet-400 transition-colors"
                      >
                        {SECTIONS_CONFIG[section].fileName}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Editor Area */}
              <main className="flex flex-col w-full bg-gray-900">
                {children}
              </main>
            </div>

            {/* Status Bar */}
            <footer className="h-7 flex items-center justify-between px-4 bg-gray-800 border-t border-gray-600 text-xs text-gray-300">
              <span>TypeScript • UTF-8</span>
              <span>Ln 12, Col 4</span>
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}
