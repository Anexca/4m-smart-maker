import Spinner from '@/components/atoms/spinner'

const LoadingScreen = () => {
  return (
    <div className="hs-overlay size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none flex justify-center">
      <div className="mt-7 opacity-100 duration-500 ease-out transition-all min-h-[calc(100%-3.5rem)] flex items-center">
        <Spinner />
        <p className="mx-5">Loading..</p>
      </div>
    </div>
  )
}

export default LoadingScreen
