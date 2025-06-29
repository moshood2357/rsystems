import React, { useState } from 'react';

export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const childType = child.type.displayName || child.type.name;

        if (childType === 'TabsList') {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }

        if (childType === 'TabsContent') {
          return React.cloneElement(child, { activeTab });
        }

        return child;
      })}
    </div>
  );
}

export function TabsList({ children, activeTab, setActiveTab, className }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const childType = child.type.displayName || child.type.name;

        if (childType === 'TabsTrigger') {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }

        return child;
      })}
    </div>
  );
}

export function TabsTrigger({ value, children, activeTab, setActiveTab, className }) {
  const isActive = activeTab === value;

  const handleClick = () => {
    if (typeof setActiveTab === 'function') {
      setActiveTab(value);
    } else {
      console.error('setActiveTab is not a function');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} px-4 py-2 text-sm font-medium transition-colors focus:outline-none ${
        isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-blue-600'
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, activeTab, children, className }) {
  if (value !== activeTab) return null;
  return <div className={className}>{children}</div>;
}

Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';
