'use client';

import { SECTIONS, SECTIONS_CONFIG } from '@/constants/content';
import { projects } from '@/constants/projects';
import { useTailwindBreakpoint } from '@/hooks/useTailwindBreakpoint';
import classNames from 'classnames';
import remarkGfm from 'remark-gfm';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa6';
import { MdCode, MdOutlineVerticalSplit, MdPreview } from 'react-icons/md';
import Markdown from 'react-markdown';

export function rehypeWebsiteInfo() {
  return (tree: Node) => {
    visit(tree, 'element', (node: any) => {
      if (
        node.tagName === 'p' &&
        node.children.some(
          (child: Record<string, any>) => child?.value === '<WebsiteInfo>',
        ) &&
        node.children.some(
          (child: Record<string, any>) => child?.value === '</WebsiteInfo>',
        )
      ) {
        node.tagName = 'WebsiteInfo';
      }
    });
  };
}

enum VIEW {
  EDITOR = 'editor',
  PREVIEW = 'preview',
  SPLIT = 'split',
}

export default function PortfolioPage() {
  const pathname = usePathname();
  const [view, setView] = useState<VIEW>(VIEW.PREVIEW);

  const breakpoint = useTailwindBreakpoint();

  // Determine current tab based on pathname
  const getCurrentTab = (): SECTIONS => {
    const path = pathname === '/' ? '/about-me' : pathname;
    const section = path.slice(1) as SECTIONS;
    return Object.values(SECTIONS).includes(section)
      ? section
      : SECTIONS.ABOUT_ME;
  };

  const tab = getCurrentTab();
  const currentContent = SECTIONS_CONFIG[tab].content;

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
    WebsiteInfo: (props: any) => {
      try {
        const [_, websiteName] = props.children.filter((t: string) => t.trim());
        if (!websiteName) return '';
        const projectWebsiteInfo = projects[websiteName];
        return (
          <div className="flex gap-2 my-2 text-sm">
            <a href={projectWebsiteInfo.website} target="_blank">
              <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-600">
                <FaLink /> Website
              </button>
            </a>
            <a href={projectWebsiteInfo.github} target="_blank">
              <button className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-600">
                <AiFillGithub /> GitHub
              </button>
            </a>
          </div>
        );
      } catch (e) {
        return '';
      }
    },
    ...(SECTIONS_CONFIG[tab].components || {}),
  };

  return (
    <>
      {/* Tabs */}
      <div className="h-10 flex items-center bg-gray-800 border-b border-gray-600">
        {Object.values(SECTIONS).map((section) => (
          <Link
            key={section}
            href={`/${section}`}
            className={classNames('px-4 py-2 cursor-pointer text-sm', {
              'bg-gray-900 border-b border-violet-700': tab === section,
              'text-gray-300': tab !== section,
            })}
          >
            {SECTIONS_CONFIG[section].fileName}
          </Link>
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
            <Markdown
              components={components}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeWebsiteInfo]}
            >
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
