import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  ChevronRight, 
  ChevronDown, 
  Compass,
  Home,
  Menu,
  PieChart,
  User, 
  Settings, 
  CreditCard, 
  LogOut, 
  Users, 
  HelpCircle
} from 'lucide-react';
import { useAuthStore } from "../../store/useAuthStore";

import { DropdownMenu } from "../ui/DropdownMenu";
import { logout } from "../../services/authService";
import { useNavigate } from 'react-router-dom';


function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const [profil, setProfil] = useState(null);
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    setProfil(user) //L'utilisateur connecté
  });

  const navigations = [
    { name: 'Dashboard', icon: Compass, path: '/admin/dashboard' },
    { name: 'Utilisateurs', icon: Compass, path: '/admin/listeutilisateur' },
    { name: 'Voyages', icon: PieChart, path: '/admin/listevoyages' },
  ];


  const userMenuItems = [
    { 
      icon: User, 
      label: 'Mon Profil',
      onClick: () => navigate('/admin/profile')
    },
    { divider: true },
    { 
      icon: LogOut, 
      label: 'Déconnexion', 
      danger: true,
      onClick: async () => await logout()
    },
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
          <Link to="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">KI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">Kiimia</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          {/* Platform Section */}
          <div className="my-4">
            <ul className="space-y-1">
              {navigations.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors ${
                      isActive(item.path) ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600'
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <DropdownMenu
            align="left"
            direction="up"
            trigger={
              <UserProfil user={profil} />
            }
            items={userMenuItems}
          />
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
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
const UserProfil = ({user}) => {
  return(
    <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
      <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-semibold">SK</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
      </div>
      <button className="p-1 hover:bg-gray-200 rounded cursor-pointer">
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  )
}

export default AdminLayout