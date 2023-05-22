'use client'

import { useState } from 'react'
import { classNames } from '../../utils/JoinClassnames'
import { useQuery } from 'react-query'
import { LoadingRequest } from './LoadingRequest'
import { CopyUrl } from './CopyUrl'
import { ArrowIcon } from './ArrowIcon'

export function InputField() {
  const [url, setUrl] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [generateState, setGenerateState] = useState(false)

  const fetchUrl = async () => {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    const data = await res.json()
    return data.result
  }

  const { isLoading, refetch } = useQuery('getUrl', fetchUrl, {
    onSuccess: (data) => {
      setUrl(data.short_link)
      setGenerateState(true)
    },
    enabled: false,
  })
  const handleClick = () => {
    if (isValidUrl(url)) {
      setIsValid(true)
      refetch()
    } else {
      setIsValid(false)
    }
  }

  return isLoading ? (
    <LoadingRequest />
  ) : generateState ? (
    <div className="flex flex-col gap-6 items-center">
      <CopyUrl url={url} />
      <div className="relative">
        <div className="absolute right-8 top-4">
          <ArrowIcon />
        </div>
        <button
          onClick={() => {
            setGenerateState((prev) => !prev)
            setUrl('')
          }}
          className="bg-sky-950 hover:bg-sky-700 pr-6 transition duration-200 text-white rounded-lg  shadow-sm h-12 w-40 ">
          Go Back
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-1">
      <p
        className={classNames(
          isValid ? 'hidden' : 'block',
          'text-sm transition duration-100 text-red-500'
        )}>
        Input a correct URL
      </p>
      <div className="flex flex-row">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-96 h-12 shadow-sm border rounded-lg hove border-sky-950 p-4"
          placeholder="Type Your URL"></input>
        <button
          onClick={handleClick}
          className="bg-sky-950 hover:bg-sky-700 transition duration-200 text-white rounded-lg  shadow-sm h-12 w-40 ml-2">
          Shorten URL
        </button>
      </div>
    </div>
  )
}
function isValidUrl(url: string): boolean {
  const urlPattern = /^(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  return urlPattern.test(url)
}
