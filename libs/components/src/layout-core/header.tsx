export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <span className="text-white font-bold">
            Simple Blog Project [Nx, MicroFrontend, Next.js]
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
