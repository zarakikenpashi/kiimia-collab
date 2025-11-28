import { useState, useRef, useEffect } from 'react';

export const DropdownMenu = ({ trigger, items, align = 'left', direction = 'down' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [actualDirection, setActualDirection] = useState(direction);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && menuRef.current && dropdownRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const triggerRect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Vérifier l'espace disponible en bas
      const spaceBelow = viewportHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      // Déterminer la direction verticale
      if (direction === 'auto') {
        if (spaceBelow < menuRect.height && spaceAbove > spaceBelow) {
          setActualDirection('up');
        } else {
          setActualDirection('down');
        }
      } else {
        setActualDirection(direction);
      }
    }
  }, [isOpen, direction]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <div 
          ref={menuRef}
          className={`absolute bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 min-w-[220px] animate-in fade-in duration-200
            ${align === 'right' ? 'right-0' : align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'}
            ${actualDirection === 'up' 
              ? 'bottom-full mb-2 slide-in-from-bottom-2' 
              : actualDirection === 'left'
              ? 'right-full mr-2 top-0 slide-in-from-right-2'
              : actualDirection === 'right'
              ? 'left-full ml-2 top-0 slide-in-from-left-2'
              : 'top-full mt-2 slide-in-from-top-2'
            }
          `}
        >
          {items.map((item, index) => {
            if (item.divider) {
              return <div key={index} className="h-px bg-gray-200 my-2" />;
            }

            const Icon = item.icon;
            
            return (
              <button
                key={index}
                onClick={() => {
                  if (item.onClick) item.onClick();
                  if (!item.toggle) setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors duration-150
                  ${item.danger 
                    ? 'text-red-600 hover:bg-red-50' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <span className="flex items-center gap-3">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="text-sm font-medium">{item.label}</span>
                </span>
                {item.shortcut && (
                  <span className="text-xs text-gray-400 font-mono">{item.shortcut}</span>
                )}
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};