import type { HTMLAttributes } from 'preact';
import { useState } from 'preact/hooks';

export type TabsVariant = 'underline' | 'boxed' | 'pills';
export type TabsOrientation = 'horizontal' | 'vertical';

export interface Tab {
  id: string;
  label: string;
  content?: any;
  disabled?: boolean;
  icon?: string;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: Tab[];
  defaultTab?: string;
  activeTab?: string;
  variant?: TabsVariant;
  orientation?: TabsOrientation;
  onChange?: (tabId: string) => void;
}

export const Tabs = ({
  tabs,
  defaultTab,
  activeTab: controlledActiveTab,
  variant = 'underline',
  orientation = 'horizontal',
  onChange,
  className = '',
  ...props
}: TabsProps) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab || tabs[0]?.id);
  const activeTab = controlledActiveTab ?? internalActiveTab;

  const handleTabClick = (tabId: string) => {
    const tab = tabs.find((t) => t.id === tabId);
    if (tab?.disabled) return;

    if (!controlledActiveTab) {
      setInternalActiveTab(tabId);
    }
    onChange?.(tabId);
  };

  const baseClass = 'tabs';
  const variantClass = `tabs-${variant}`;
  const orientationClass = orientation !== 'horizontal' ? `tabs-${orientation}` : '';

  const containerClasses = [baseClass, variantClass, orientationClass, className]
    .filter(Boolean)
    .join(' ');

  const currentTab = tabs.find((t) => t.id === activeTab);

  return (
    <div className={containerClasses} {...props}>
      <div className="tabs-list" role="tablist" aria-orientation={orientation}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          const tabClasses = [
            'tabs-tab',
            isActive ? 'tabs-tab-active' : '',
            tab.disabled ? 'tabs-tab-disabled' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              className={tabClasses}
              onClick={() => handleTabClick(tab.id)}
              disabled={tab.disabled}
            >
              {tab.icon && <span className="tabs-icon">{tab.icon}</span>}
              {tab.label}
            </button>
          );
        })}
      </div>
      {currentTab?.content && (
        <div
          className="tabs-panel"
          role="tabpanel"
          id={`panel-${currentTab.id}`}
          aria-labelledby={`tab-${currentTab.id}`}
        >
          {currentTab.content}
        </div>
      )}
    </div>
  );
};

export default Tabs;
