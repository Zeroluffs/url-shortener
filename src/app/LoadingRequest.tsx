'use client'
export function LoadingRequest() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-sky-950"></div>
        <h1 className="text-2xl font-bold text-center animate-pulse">Shortening URL ...</h1>
      </div>
    </div>
  )
}
