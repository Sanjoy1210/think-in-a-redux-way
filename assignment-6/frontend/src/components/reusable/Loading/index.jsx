import PropTypes from 'prop-types';

export default function Loading({ title, isFullScreen = false }) {
  return (
    <div
      className={`${
        isFullScreen
          ? 'fixed top-0 z-[9999] w-screen h-screen bg-white'
          : 'my-16 w-full'
      } flex flex-wrap items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className={`w-12 h-12 border-[5px] border-gray-200 border-b-red-500 rounded-full inline-block box-border animate-spin`}
        />
        <h2 className="mt-2 w-full text-center font-semibold">
          {title ? title : 'Loading...'}
        </h2>
      </div>
    </div>
  );
}

Loading.propTypes = {
  title: PropTypes.string,
  isFullScreen: PropTypes.bool,
};
