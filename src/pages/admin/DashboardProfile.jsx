import React, { useState } from 'react';
import { 
  LayoutDashboard, ShoppingBag, ShoppingCart, Users, User, Truck, 
  Store, Utensils, CreditCard, RefreshCcw, Ticket, FileText, 
  Calendar, HelpCircle, Briefcase, Bell, ChevronDown, Star, 
  MapPin, Pencil, Eye, EyeOff, Globe, LogOut
} from 'lucide-react';

const DashboardProfile = () => {
  // Définition de la couleur primaire pour réutilisation facile dans les styles inline si besoin,
  // mais ici nous utiliserons principalement les classes arbitraires Tailwind (JIT).
  const primaryColorClass = "text-[rgb(255,78,0)]";
  const primaryBgClass = "bg-[rgb(255,78,0)]";

  return (
    <div className="min-h-screen bg-stone-50 flex font-sans text-stone-800 selection:bg-[rgb(255,78,0)] selection:text-white">
      
      {/* --- Sidebar (Navigation) --- */}
      <aside className="w-64 bg-white border-r border-stone-200 hidden md:flex flex-col fixed h-full z-10">
        <div className="p-6 flex items-center gap-2">
          {/* Logo Brand Icon */}
          <div className={`${primaryBgClass} text-white p-1.5 rounded-lg shadow-lg shadow-orange-500/30`}>
            <ShoppingBag size={20} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-extrabold text-stone-900 tracking-tight">4takeaway</span>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 space-y-8 py-4 scrollbar-hide">
          {/* Main Group */}
          <div className="space-y-1">
            <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem icon={<ShoppingCart size={20} />} label="Live Order" />
            <NavItem icon={<ShoppingBag size={20} />} label="Order" />
          </div>

          {/* Users Group */}
          <div>
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 px-3">Users</h3>
            <div className="space-y-1">
              <NavItem icon={<Users size={20} />} label="Employees" />
              <NavItem icon={<User size={20} />} label="Customers" />
              <NavItem icon={<Truck size={20} />} label="Drivers" />
            </div>
          </div>

          {/* Admin Group */}
          <div>
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 px-3">Admin</h3>
            <div className="space-y-1">
              <NavItem icon={<Store size={20} />} label="Store" active />
              <NavItem icon={<Utensils size={20} />} label="Food Menu" />
              <NavItem icon={<CreditCard size={20} />} label="Finance" />
              <NavItem icon={<RefreshCcw size={20} />} label="Subscription" />
              <NavItem icon={<Ticket size={20} />} label="Coupon" />
              <NavItem icon={<FileText size={20} />} label="Pages" />
              <NavItem icon={<Calendar size={20} />} label="Events" />
              <NavItem icon={<HelpCircle size={20} />} label="FAQ" />
              <NavItem icon={<Briefcase size={20} />} label="Job Offers" />
            </div>
          </div>
        </nav>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 md:ml-64">
        
        {/* Header */}
        <header className="bg-white h-16 border-b border-stone-200 flex items-center justify-between px-8 sticky top-0 z-20 bg-white/80 backdrop-blur-md">
          <h1 className="text-2xl font-bold text-stone-900">Profile</h1>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 text-stone-500 hover:text-[rgb(255,78,0)] transition-colors">
              <Globe size={20} />
              <span className="text-sm font-medium">EN</span>
            </button>
            
            <button className="relative text-stone-500 hover:text-[rgb(255,78,0)] transition-colors">
              <Bell size={20} />
              {/* Notification Badge derived from primary */}
              <span className={`absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ${primaryBgClass} ring-2 ring-white transform translate-x-1/2 -translate-y-1/2`}></span>
            </button>
            
            <div className="flex items-center gap-2 cursor-pointer group">
              {/* Avatar Initials derived form primary (light tint) */}
              <div className="h-9 w-9 rounded-full bg-[rgb(255,78,0)]/10 flex items-center justify-center text-xs font-bold text-[rgb(255,78,0)] border border-[rgb(255,78,0)]/20 group-hover:bg-[rgb(255,78,0)] group-hover:text-white transition-all">
                BM
              </div>
              <ChevronDown size={16} className="text-stone-400 group-hover:text-stone-600" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Profile Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 flex flex-col items-center text-center relative overflow-hidden">
                {/* Decorative background element */}
                <div className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[rgb(255,78,0)]/10 to-transparent`}></div>
                
                <div className="relative mb-4 mt-4">
                  <div className="p-1 bg-white rounded-[1.2rem] shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                      alt="Profile" 
                      className="w-32 h-32 rounded-2xl object-cover"
                    />
                  </div>
                  <button className={`absolute bottom-0 right-0 ${primaryBgClass} text-white p-2.5 rounded-xl hover:bg-orange-700 transition shadow-lg shadow-orange-500/20 border-[3px] border-white`}>
                    <Pencil size={14} strokeWidth={2.5} />
                  </button>
                </div>

                <h2 className="text-xl font-bold text-stone-900">Esther Howard</h2>
                
                <div className="flex items-start justify-center gap-2 mt-2 text-stone-500 text-sm">
                  <MapPin size={16} className={`shrink-0 mt-0.5 ${primaryColorClass}`} />
                  <p className="max-w-[200px] leading-snug">Hubertusstraße 149, 41239 Mönchengladbach</p>
                </div>

                <div className="flex items-center justify-between w-full mt-6 px-4 py-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="flex items-center gap-1.5">
                    {/* Star color derived from primary */}
                    <Star className={`${primaryColorClass} fill-[rgb(255,78,0)]`} size={18} />
                    <span className="font-bold text-stone-900">5.0</span>
                    <span className="text-stone-400 text-sm">(1)</span>
                  </div>
                  <span className={`text-xs font-bold bg-[rgb(255,78,0)]/10 text-[rgb(255,78,0)] px-2.5 py-1 rounded-md`}>Sponsored</span>
                </div>

                <div className="w-full mt-6 pt-6 border-t border-stone-100">
                  <button className="flex items-center justify-center gap-2 text-stone-400 hover:text-[rgb(255,78,0)] text-sm font-medium group transition-colors">
                    <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Close Account
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Edit Forms (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* User Information Section */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
                <div className="mb-6 pb-4 border-b border-stone-100">
                  <h2 className="text-lg font-bold text-stone-900">Profile Settings</h2>
                  <p className="text-sm text-stone-500 mt-1">Manage your public profile information</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <InputField label="Name" defaultValue="Santi chai" />
                    <InputField label="Email" defaultValue="s.kaensopha@swiss-marketing-systems.com" type="email" />
                    <InputField label="Phone" defaultValue="02746565684" />
                  </div>

                  <div className="pt-2">
                    {/* Button using Primary Color */}
                    <button type="button" className={`${primaryBgClass} hover:opacity-90 text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-orange-500/20 active:scale-95`}>
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>

              {/* Password Section */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
                <div className="mb-6 pb-4 border-b border-stone-100">
                   <h2 className="text-lg font-bold text-stone-900">Security</h2>
                   <p className="text-sm text-stone-500 mt-1">Update your password to keep your account safe</p>
                </div>

                <form className="space-y-5">
                  <PasswordInput label="Current Password" placeholder="•••••••••••••••" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <PasswordInput label="New Password" placeholder="New Password" />
                    <PasswordInput label="Confirm New Password" placeholder="Confirm New Password" />
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Composants Réutilisables ---

const NavItem = ({ icon, label, active = false }) => (
  <a 
    href="#" 
    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium group
      ${active 
        ? 'bg-[rgb(255,78,0)]/10 text-[rgb(255,78,0)]' 
        : 'text-stone-500 hover:bg-stone-100 hover:text-stone-900'
      }`}
  >
    <span className={`${active ? 'text-[rgb(255,78,0)]' : 'text-stone-400 group-hover:text-[rgb(255,78,0)]'} transition-colors`}>
      {icon}
    </span>
    {label}
  </a>
);

const InputField = ({ label, type = "text", defaultValue, placeholder }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold text-stone-700">{label}</label>
    <input 
      type={type} 
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm 
      focus:outline-none focus:ring-2 focus:ring-[rgb(255,78,0)]/20 focus:border-[rgb(255,78,0)] focus:bg-white 
      transition-all placeholder:text-stone-400"
    />
  </div>
);

const PasswordInput = ({ label, placeholder }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-2 relative">
      <label className="text-sm font-semibold text-stone-700">{label}</label>
      <div className="relative">
        <input 
          type={show ? "text" : "password"} 
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm 
          focus:outline-none focus:ring-2 focus:ring-[rgb(255,78,0)]/20 focus:border-[rgb(255,78,0)] focus:bg-white 
          transition-all placeholder:text-stone-400"
        />
        <button 
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[rgb(255,78,0)] transition-colors"
        >
          {show ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>
    </div>
  );
};

export default DashboardProfile;