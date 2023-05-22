'use client'
import { useState } from 'react'
import { classNames } from '../../utils/JoinClassnames'
interface CopyUrlProps {
  url: string
}

export function CopyUrl({ url }: CopyUrlProps) {
  const [copyState, setCopyState] = useState(false)
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col items-center gap-8 md:gap-0 md:flex-row">
        <div className="w-80 md:w-96 h-12 bg-slate-100 shadow-sm border rounded-lg hove border-sky-950 flex items-center px-3">
          {url}
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(url)
            setCopyState(true)
          }}
          disabled={copyState}
          className={classNames(
            copyState ? 'bg-green-600 ' : 'bg-sky-950 hover:bg-sky-700',
            'transition duration-200 text-white rounded-lg  shadow-sm h-12 w-64 ml-2'
          )}>
          {copyState ? 'Copied!' : 'Copy To Clipboard'}
        </button>
      </div>
    </div>
  )
}
