import Codesandbox from './Codesandbox'
import clsx from 'clsx'

const components = {
  Grid: ({ children }) => (
    <ul className="grid grid-cols-3 gap-4 text-sm text-gray-700 grid-list">{children}</ul>
  ),
  Callout: ({ children }) => children,
  Bleed: ({ children }) => children,
  Codesandbox,
  Heading: ({ children, id, level }) => {
    const Comp = level === 2 ? 'h2' : 'h3'

    return (
      <a
        href={`#${id}`}
        className={clsx('heading', level === 2 ? 'text-3xl mb-10 mt-4' : 'text-xl mb-3')}
      >
        <Comp id={id}>{children}</Comp>
      </a>
    )
  },
  ul: ({ children }) => <ul className="px-4 mb-8">{children}</ul>,
  ol: ({ children }) => <ol className="px-4 mb-8">{children}</ol>,
  li: ({ children }) => <li className="mb-8 text-lg leading-8 text-gray-700">{children}</li>,
  inlineCode: ({ children }) => (
    <code className="px-1 font-mono text-sm text-purple-800 bg-purple-100">{children}</code>
  ),
  p: ({ children }) => <p className="mb-8 text-lg leading-8 text-gray-700">{children}</p>,
  blockquote: ({ children }) => (
    <blockquote className="mb-8 text-lg leading-8 pl-4 border-l-4 border-gray-600">
      {children}
    </blockquote>
  ),
  table: ({ children }) => {
    return (
      <div className="flex flex-col my-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="divide-y divide-gray-200"> {children}</table>
            </div>
          </div>
        </div>
      </div>
    )
  },
  a: (props) => {
    if (props.href.startsWith('https://')) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      )
    }
    return <a href={props.href}>{props.children}</a>
  },
}

export default components
