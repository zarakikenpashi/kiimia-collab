// import { useState } from "react";
// import { Outlet, Link, useLocation } from "react-router-dom";
// import { Home, Truck, ShoppingCart, BarChart2, Menu } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  ChevronRight, 
  ChevronDown, 
  Layers, 
  Box, 
  FileText, 
  Settings, 
  Compass,
  PieChart,
  Plane,
  MoreHorizontal,
  Home,
  Menu,
  Cpu,
  Zap,
  Database,
  Code,
  BarChart,
  Users,
  Mail,
  Target
} from 'lucide-react';
// function CompanyLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Dashboard", path: "/compagnie", icon: <Home size={20} /> },
//     { name: "Trajets", path: "/compagnie/trajets", icon: <Truck size={20} /> },
//     { name: "Orders", path: "/compagnie/orders", icon: <ShoppingCart size={20} /> },
//     { name: "Stats", path: "/compagnie/stats", icon: <BarChart2 size={20} /> },
//   ];

//   return (
//     <div className="flex h-screen bg-base-100">
//       {/* Sidebar */}
//       <AnimatePresence>
//         {(sidebarOpen || window.innerWidth >= 768) && (
//           <motion.aside
//             initial={{ x: -280, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -280, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto bg-white border-r border-gray-200 shadow-md md:static md:flex-shrink-0"
//           >
//             <div className="flex items-center justify-center h-16 border-b border-gray-100">
//               <h1 className="text-xl font-semibold text-gray-800">Company</h1>
//             </div>
//             <nav className="flex flex-col p-4 space-y-1">
//               {navLinks.map((link) => {
//                 const active = location.pathname === link.path;
//                 return (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className={`flex items-center px-3 py-2 rounded-lg text-gray-700 transition-colors hover:bg-primary hover:text-primary-content ${
//                       active ? "bg-primary text-primary-content font-medium" : ""
//                     }`}
//                     onClick={() => setSidebarOpen(false)}
//                   >
//                     <span className="mr-3">{link.icon}</span>
//                     {link.name}
//                   </Link>
//                 );
//               })}
//             </nav>
//           </motion.aside>
//         )}
//       </AnimatePresence>

//       {/* Main content */}
//       <div className="flex flex-col flex-1 md:ml-64">
//         {/* Topbar */}
//         <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-100 shadow-sm">
//           <button
//             className="md:hidden btn btn-ghost btn-square"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//           >
//             <Menu size={24} />
//           </button>
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-800 font-medium">Hello, Company!</span>
//             <div className="avatar">
//               <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//                 <img src="https://i.pravatar.cc/150?img=32" alt="avatar" />
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Main content */}
//         <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default CompanyLayout


function CompanyLayout() {
  const [openMenus, setOpenMenus] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleMenu = (menuName) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const platformItems = [
    { 
      name: 'Playground', 
      icon: Compass, 
      path: '/playground',
      submenu: [
        { name: 'Chat Interface', icon: Zap, path: '/playground/chat' },
        { name: 'Code Editor', icon: Code, path: '/playground/code' },
        { name: 'API Tester', icon: Database, path: '/playground/api' }
      ]
    },
    { 
      name: 'Models', 
      icon: Box, 
      path: '/models',
      submenu: [
        { name: 'Language Models', icon: Cpu, path: '/models/language' },
        { name: 'Image Models', icon: Layers, path: '/models/image' },
        { name: 'Audio Models', icon: Zap, path: '/models/audio' }
      ]
    },
    { 
      name: 'Documentation', 
      icon: FileText, 
      path: '/documentation',
      submenu: [
        { name: 'Getting Started', icon: Zap, path: '/documentation/getting-started' },
        { name: 'API Reference', icon: Code, path: '/documentation/api-reference' },
        { name: 'Tutorials', icon: FileText, path: '/documentation/tutorials' },
        { name: 'Examples', icon: Database, path: '/documentation/examples' }
      ]
    },
    { 
      name: 'Settings', 
      icon: Settings, 
      path: '/settings',
      submenu: [
        { name: 'Profile', icon: Users, path: '/settings/profile' },
        { name: 'Billing', icon: BarChart, path: '/settings/billing' },
        { name: 'API Keys', icon: Code, path: '/settings/api-keys' },
        { name: 'Team', icon: Users, path: '/settings/team' }
      ]
    }
  ];

  const projects = [
    { name: 'Design Engineering', icon: Compass, path: '/projects/design' },
    { name: 'Sales & Marketing', icon: PieChart, path: '/projects/sales' },
    { name: 'Travel', icon: Plane, path: '/projects/travel' },
    { name: 'More', icon: MoreHorizontal, path: '/projects/more' }
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-0'
        } bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">Acme Inc</span>
              <span className="text-xs text-gray-500">Enterprise</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          {/* Platform Section */}
          <div className="mb-6">
            <ul className="space-y-1">
              {platformItems.map((item) => (
                <li key={item.name}>
                  <div>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors ${
                        isActive(item.path) ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-gray-500" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight 
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          openMenus[item.name] ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Submenu */}
                    {openMenus[item.name] && (
                      <ul className="mt-1 ml-7 space-y-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <Link
                              to={subitem.path}
                              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors ${
                                isActive(subitem.path) ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600'
                              }`}
                            >
                              <subitem.icon className="w-3.5 h-3.5" />
                              <span>{subitem.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">SK</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">shadcn</p>
              <p className="text-xs text-gray-500 truncate">m@example.com</p>
            </div>
            <button className="p-1 hover:bg-gray-200 rounded">
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded-md">
              <Home className="w-4 h-4 text-gray-600" />
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{location.pathname}</span>
          </nav>
        </header>

        {/* Content Area with Outlet */}
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default CompanyLayout