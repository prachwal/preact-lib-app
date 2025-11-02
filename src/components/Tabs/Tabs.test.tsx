import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Tabs from '.';

describe('Tabs', () => {
  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
    { id: 'tab3', label: 'Tab 3', content: <div>Content 3</div> },
  ];

  it('renders all tabs', () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('renders first tab as active by default', () => {
    render(<Tabs tabs={tabs} />);
    const firstTab = screen.getByText('Tab 1').closest('button');
    expect(firstTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('renders default tab when specified', () => {
    render(<Tabs tabs={tabs} defaultTab="tab2" />);
    const secondTab = screen.getByText('Tab 2').closest('button');
    expect(secondTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('switches tabs on click', async () => {
    const user = userEvent.setup();
    render(<Tabs tabs={tabs} />);

    await user.click(screen.getByText('Tab 2'));
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('calls onChange when tab is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Tabs tabs={tabs} onChange={handleChange} />);

    await user.click(screen.getByText('Tab 2'));
    expect(handleChange).toHaveBeenCalledWith('tab2');
  });

  it('disables clicking on disabled tabs', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const tabsWithDisabled = [
      { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
      { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div>, disabled: true },
    ];
    render(<Tabs tabs={tabsWithDisabled} onChange={handleChange} />);

    const disabledTab = screen.getByText('Tab 2').closest('button');
    expect(disabledTab).toBeDisabled();
    await user.click(disabledTab!);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders with underline variant', () => {
    const { container } = render(<Tabs tabs={tabs} variant="underline" />);
    expect(container.querySelector('.tabs')).toHaveClass('tabs-underline');
  });

  it('renders with boxed variant', () => {
    const { container } = render(<Tabs tabs={tabs} variant="boxed" />);
    expect(container.querySelector('.tabs')).toHaveClass('tabs-boxed');
  });

  it('renders with pills variant', () => {
    const { container } = render(<Tabs tabs={tabs} variant="pills" />);
    expect(container.querySelector('.tabs')).toHaveClass('tabs-pills');
  });

  it('renders with vertical orientation', () => {
    const { container } = render(<Tabs tabs={tabs} orientation="vertical" />);
    expect(container.querySelector('.tabs')).toHaveClass('tabs-vertical');
    const tablist = container.querySelector('[role="tablist"]');
    expect(tablist).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders tabs with icons', () => {
    const tabsWithIcons = [
      { id: 'tab1', label: 'Home', icon: '🏠', content: <div>Home</div> },
    ];
    render(<Tabs tabs={tabsWithIcons} />);
    expect(screen.getByText('🏠')).toBeInTheDocument();
  });

  it('works in controlled mode', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Tabs tabs={tabs} activeTab="tab2" onChange={handleChange} />);

    expect(screen.getByText('Content 2')).toBeInTheDocument();
    await user.click(screen.getByText('Tab 1'));
    expect(handleChange).toHaveBeenCalledWith('tab1');
    // Content should still be tab2 because we didn't update activeTab prop
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Tabs tabs={tabs} className="custom-class" />);
    expect(container.querySelector('.tabs')).toHaveClass('tabs', 'custom-class');
  });
});
