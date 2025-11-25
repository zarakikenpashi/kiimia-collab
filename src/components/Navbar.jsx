import { Bus, Handshake, Headset, Route } from "lucide-react"
import { Link, NavLink } from "react-router"
import { Logo } from "./ui/Logo";

export const Navbar = () => {
  const links = [
    {
      title: "Voyager",
      href: "/voyager",
      icon: <Bus className="size-5" />,
    },
    {
      title: "Suivre un trajet",
      href: "/trajet",
      icon: <Route className="size-5" />,
    },
    {
      title: "Service client",
      href: "/serviceclient",
      icon: <Headset className="size-5" />,
    },
    {
      title: "Partenaire",
      href: "/partenaire",
      icon: <Handshake className="size-5" />,
    },
  ];

  return (
    <nav className="fixed z-20 w-full px-2">
      <div className="mx-auto mt-2 px-6 transition-all duration-300 max-w-7xl rounded-2xl lg:px-5">
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
                <a className="flex items-center space-x-2">
                  <Logo className="w-48 h-auto" />

                        
                </a>
                      <button
                    aria-label="Open Menu"
                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-menu in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200"
                    >
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line></svg>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200"
                    >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>
            </div>
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                <ul className="flex gap-8 text-sm">
                  {
                    links.map(({title,icon,href}) => (
                      <NavItem key={title} icon={icon} href={href} title={title} />
                    ))
                  }
                </ul>
            </div>
            <div className=" 
                in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 
                hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 
                shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 
                lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none 
                dark:shadow-none dark:lg:bg-transparent
              "
            >
              <div className="lg:hidden">
                  <ul className="space-y-6 text-base">
                    {
                      links.map(({title,icon,href}) => (
                        <NavItem key={title} icon={icon} href={href} title={title} />
                      ))
                    }
                  </ul>
              </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Link
                    className="text-foreground cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium shadow-sm shadow-black/15 border border-primary duration-200 hover:bg-primary hover:text-foreground h-8 rounded-md px-3 text-xs"
                    to="/auth"
                  >
                    <span>Se connecter</span>
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}


const NavItem = ({icon, href, title}) => {
  return(
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          `
            text-white border-b-2 border-transparent
            hover:border-b-primary hover:text-primary
            transition-colors duration-200 flex gap-2 items-center pb-1
            ${isActive ? "border-b-muted text-muted" : ""}
          `
        }
      >
        <span>
          {icon}
        </span>
        <span>
          {title}
        </span>
      </NavLink>
    </li>
  )
}