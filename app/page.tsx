'use client';

import { SECTIONS, SECTIONS_CONFIG } from '@/constants/content';
import { useTailwindBreakpoint } from '@/hooks/useTailwindBreakpoint';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { MdCode, MdOutlineVerticalSplit, MdPreview } from 'react-icons/md';
import Markdown from 'react-markdown';

enum VIEW {
  EDITOR = 'editor',
  PREVIEW = 'preview',
  SPLIT = 'split',
}

export default function Home() {
  const [tab, setTab] = useState<SECTIONS>(SECTIONS.ABOUT_ME);
  const [view, setView] = useState<VIEW>(VIEW.PREVIEW);

  const breakpoint = useTailwindBreakpoint();
  const currentContent = SECTIONS_CONFIG[tab].content;

  useEffect(() => {
    // Handle initial hash on mount
    const hash = window.location.hash.slice(1);
    if (hash && Object.values(SECTIONS).includes(hash as SECTIONS)) {
      setTab(hash as SECTIONS);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && Object.values(SECTIONS).includes(hash as SECTIONS)) {
        setTab(hash as SECTIONS);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if ((breakpoint === 'sm' || breakpoint === 'md') && view === VIEW.SPLIT) {
      setView(VIEW.PREVIEW);
    }
  }, [breakpoint]);

  const components = {
    a: (props: any) => <a {...props} className="underline" target="_blank" />,
    hr: () => <hr className="my-4" />,
    h2: (props: any) => <h2 {...props} className="mt-2 mb-1" />,
    h4: (props: any) => <h4 {...props} className="mt-2 mb-1" />,
    p: (props: any) => <p {...props} className="mb-1" />,
    ...(SECTIONS_CONFIG[tab].components || {}),
  };

  return (
    <>
      {/* Tabs */}
      <div className="h-10 flex items-center bg-gray-800 border-b border-gray-600">
        {Object.values(SECTIONS).map((section) => (
          <div
            key={section}
            className={classNames('px-4 py-2 cursor-pointer text-sm', {
              'bg-gray-900 border-b border-violet-700': tab === section,
              'text-gray-300': tab !== section,
            })}
            onClick={() => {
              window.location.hash = section;
              setTab(section);
            }}
          >
            {SECTIONS_CONFIG[section].fileName}
          </div>
        ))}
      </div>

      {/* Code Editor */}
      <div className="flex overflow-auto">
        {[VIEW.EDITOR, VIEW.SPLIT].includes(view) && (
          <div className="flex-1 p-6 overflow-auto leading-relaxed border-r border-gray-800 text-sm">
            <pre className="text-gray-200 whitespace-pre-wrap">
              <code>{currentContent}</code>
            </pre>
          </div>
        )}

        {[VIEW.PREVIEW, VIEW.SPLIT].includes(view) && (
          <div className="flex-1 p-6 overflow-auto">
            <Markdown components={components}>
              {currentContent.replaceAll('\n\n', '\n&nbsp;\n')}
            </Markdown>
          </div>
        )}
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-10 right-4 flex gap-1 bg-gray-700 rounded-lg p-2">
        <button
          className={classNames(
            'p-1 hover:bg-gray-600 rounded-md text-orange-500 hover:text-white transition-colors',
            {
              'bg-gray-600': view === VIEW.EDITOR,
            },
          )}
          onClick={() => setView(VIEW.EDITOR)}
        >
          <MdCode size={20} />
        </button>
        <button
          className={classNames(
            'hidden sm:inline p-1 hover:bg-gray-600 rounded-md text-yellow-300 hover:text-white transition-colors',
            { 'bg-gray-600': view === VIEW.SPLIT },
          )}
          onClick={() => setView(VIEW.SPLIT)}
        >
          <MdOutlineVerticalSplit size={20} />
        </button>
        <button
          className={classNames(
            'p-1 hover:bg-gray-600 rounded-md text-emerald-500 hover:text-white transition-colors',
            { 'bg-gray-600': view === VIEW.PREVIEW },
          )}
          onClick={() => setView(VIEW.PREVIEW)}
        >
          <MdPreview size={20} />
        </button>
      </div>
    </>
  );
}
