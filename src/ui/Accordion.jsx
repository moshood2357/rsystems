import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Accordion({ type = 'single', collapsible = false, children, className }) {
  const [openItem, setOpenItem] = useState(collapsible ? null : React.Children.toArray(children)[0]?.props?.value);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const { value } = child.props;
        const isOpen = openItem === value;

        const onToggle = () => {
          if (isOpen && collapsible) {
            setOpenItem(null);
          } else {
            setOpenItem(value);
          }
        };

        return React.cloneElement(child, { isOpen, onToggle });
      })}
    </div>
  );
}

export function AccordionItem({ children, isOpen, onToggle, className }) {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { isOpen, onToggle });
      })}
    </div>
  );
}

export function AccordionTrigger({ children, onToggle, isOpen, className }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full flex justify-between items-center py-3 text-left text-gray-800 font-medium focus:outline-none ${className}`}
    >
      {children}
      <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
}

export function AccordionContent({ children, isOpen, className }) {
  if (!isOpen) return null;
  return <div className={`pb-4 text-gray-600 ${className}`}>{children}</div>;
}

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';

