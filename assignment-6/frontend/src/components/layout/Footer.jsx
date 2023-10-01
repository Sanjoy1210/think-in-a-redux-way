import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-6">
      <div className="max-w-5xl mx-auto px-5 py-6 lg:px-0 flex flex-col sm:flex-row  items-center sm:justify-between gap-2 border-t text-sm text-slate-400">
        <div>Copyright 2022 JS Devs.</div>
        <div>
          <Link
            to="https://sanjoy.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Personal website.
          </Link>
        </div>
      </div>
    </footer>
  );
}
