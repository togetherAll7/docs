import { Img } from '@/components/mdx'

import cn from '@/lib/cn'

export type CSB = {
  id: string
  title: string
  screenshot_url: string
  description: string
  tags: string[]
}

export function Codesandbox({
  id,
  title = '',
  description = '',
  screenshot_url,
  tags = [],
  //
  hideTitle = false,
  embed = false,
}: CSB & {
  hideTitle: boolean
  embed: boolean
}) {
  return (
    <>
      {embed ? (
        <iframe
          src={`https://codesandbox.io/embed/${id}`}
          className="h-[500px] w-full"
          title={title}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      ) : (
        <a
          href={`https://codesandbox.io/s/${id}`}
          target="_blank"
          rel="noreferrer"
          className="mb-2 block"
        >
          {screenshot_url && <Img src={screenshot_url} alt={title} width={1763} height={926} />}
        </a>
      )}

      {!hideTitle && (
        <>
          <h6 className={cn('mt-2 text-xs text-on-surface-variant')}>{title}</h6>
          {description && <p className={cn('mt-1')}>{description}</p>}
          {tags.length > 0 && (
            <div>
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className={cn(
                    'mt-2 inline-block rounded px-1 py-1 text-xs',
                    i !== tags.length - 1 && 'mr-1',
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}
