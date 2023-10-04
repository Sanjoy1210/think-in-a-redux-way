export default function Loader() {
  return (
    <div className="book-card animate-pulse">
      <div className="h-[240px] w-[170px] flex items-center justify-center bg-gray-400 opacity-40">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="h-8 bg-gray-400 opacity-40" />

        <div className="space-y-2 mt-4 h-full">
          <div className="space-y-1">
            <div className="bg-gray-400 opacity-40 h-5" />
            <div className="bg-gray-400 opacity-40 h-5" />
            <div className="bg-gray-400 opacity-40 h-5" />
          </div>
          <p className="h-5 bg-gray-400 opacity-40"></p>

          <div className="w-1/2 bg-gray-400 opacity-40 h-4" />

          <p className="h-7 bg-slate-400 opacity-40 w-2/5" />
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
