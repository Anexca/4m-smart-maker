const Spinner = () => {
  return (
    <div
      className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-white"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner
