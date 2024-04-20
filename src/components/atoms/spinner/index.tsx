const Spinner = () => {
  return (
    <div
      className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-white"
      role="status"
    >
      <p className="sr-only">Loading...</p>
    </div>
  )
}

export default Spinner
