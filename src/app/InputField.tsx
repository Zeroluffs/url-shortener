'use client'

import { useState } from 'react'
import { classNames } from '../../utils/JoinClassnames'
import { useQuery } from 'react-query'
import { LoadingRequest } from './LoadingRequest'
import { CopyUrl } from './CopyUrl'

export function InputField() {
  const [url, setUrl] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [generateState, setGenerateState] = useState(false)

  const fetchUrl = async () => {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    const data = await res.json()
    return data.result
  }

  const { data, isLoading, error, refetch } = useQuery('getUrl', fetchUrl, {
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

  const GenerateState = () => {
    if (!generateState) {
      return (
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
    } else {
      return <CopyUrl url={url} />
    }
  }

  return isLoading ? <LoadingRequest /> : <GenerateState />
}
function isValidUrl(url: string): boolean {
  const urlPattern = /^(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  return urlPattern.test(url)
}
