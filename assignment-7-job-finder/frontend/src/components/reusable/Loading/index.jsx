export default function Loading({ isFullScreen = true, text = '' }) {
  return (
    <div
      className={`${
        isFullScreen
          ? 'fixed w-screen h-screen top-0 z-[9999] bg-gray-500 opacity-40'
          : 'my-16 w-full'
      } flex justify-center item flex-wrap`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className='w-12 h-12 rounded-full inline-block border-t-4 border-t-white border-r-4 border-r-transparent box-border animate-spin after:content-[""] after:box-border after:absolute after:left-0 after:top-0 after:w-12 after:h-12 after:rounded-full after:border-b-4 after:border-b-[#ff3D00] after:border-l-4 after:border-l-transparent' />
        <h2 className="mt-2 w-full text-white text-center font-semibold">
          {text ? text : 'Loading...'}
        </h2>
      </div>
    </div>
  );
}
