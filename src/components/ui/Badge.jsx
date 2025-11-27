const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-gray-200',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200',
    destructive: 'bg-red-500 text-white hover:bg-red-600 border-red-500',
    outline: 'bg-transparent text-gray-900 hover:bg-gray-100 border-gray-300',
    success: 'bg-green-100 text-green-800 hover:bg-green-200 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200',
    info: 'bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200',
    verified: 'bg-blue-500 text-white hover:bg-blue-600 border-blue-500',
    dark: 'bg-gray-800 text-white hover:bg-gray-900 border-gray-800',
    count: 'bg-red-500 text-white hover:bg-red-600 border-red-500'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;