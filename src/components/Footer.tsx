export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        {/* Left: copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Atema Consultancy WLL. All rights reserved. CR No. , Kingdom of Bahrain.
        </p>

        {/* Right: links */}
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="https://github.com/Amena-sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
            LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
            Instagram
            </a>
          </li>
          <li>
            <a
              href="mailto:hello@example.com"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
            Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}