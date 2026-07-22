import { Link, NavLink } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Site name — far left */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
        >
          Atema
        </Link>

        {/* Nav links — far right */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}