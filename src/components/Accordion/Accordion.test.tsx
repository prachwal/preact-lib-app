import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Accordion, { AccordionItem } from '.';

describe('Accordion', () => {
  it('renders with children', () => {
    const { container } = render(
      <Accordion>
        <AccordionItem title="Test">Content</AccordionItem>
      </Accordion>
    );
    expect(container.querySelector('.accordion')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Accordion className="custom">
        <AccordionItem title="Test">Content</AccordionItem>
      </Accordion>
    );
    expect(container.querySelector('.accordion')).toHaveClass('accordion', 'custom');
  });
});

describe('AccordionItem', () => {
  it('renders with title', () => {
    render(<AccordionItem title="Test Title">Content</AccordionItem>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('is closed by default', () => {
    render(<AccordionItem title="Test">Hidden content</AccordionItem>);
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('opens when defaultOpen is true', () => {
    render(<AccordionItem title="Test" defaultOpen>Visible content</AccordionItem>);
    expect(screen.getByText('Visible content')).toBeInTheDocument();
  });

  it('toggles content when clicked', async () => {
    const user = userEvent.setup();
    render(<AccordionItem title="Test Title">Toggle content</AccordionItem>);
    
    // Initially closed
    expect(screen.queryByText('Toggle content')).not.toBeInTheDocument();
    
    // Click to open
    const button = screen.getByRole('button', { name: /Test Title/i });
    await user.click(button);
    expect(screen.getByText('Toggle content')).toBeInTheDocument();
    
    // Click to close
    await user.click(button);
    expect(screen.queryByText('Toggle content')).not.toBeInTheDocument();
  });

  it('shows correct icon when closed', () => {
    render(<AccordionItem title="Test">Content</AccordionItem>);
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('shows correct icon when open', () => {
    render(<AccordionItem title="Test" defaultOpen>Content</AccordionItem>);
    expect(screen.getByText('−')).toBeInTheDocument();
  });

  it('has correct aria-expanded attribute', async () => {
    const user = userEvent.setup();
    render(<AccordionItem title="Test">Content</AccordionItem>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders as disabled', () => {
    render(<AccordionItem title="Test" disabled>Content</AccordionItem>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    render(<AccordionItem title="Test" disabled>Content</AccordionItem>);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('has disabled class when disabled', () => {
    const { container } = render(<AccordionItem title="Test" disabled>Content</AccordionItem>);
    expect(container.querySelector('.accordion-item')).toHaveClass('accordion-item-disabled');
  });

  it('has open class on header when expanded', () => {
    const { container } = render(<AccordionItem title="Test" defaultOpen>Content</AccordionItem>);
    expect(container.querySelector('.accordion-header')).toHaveClass('accordion-header-open');
  });

  it('renders multiple items independently', async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem title="Item 1">Content 1</AccordionItem>
        <AccordionItem title="Item 2">Content 2</AccordionItem>
        <AccordionItem title="Item 3">Content 3</AccordionItem>
      </Accordion>
    );
    
    // Open first item
    await user.click(screen.getByRole('button', { name: /Item 1/i }));
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
    
    // Open second item (first should remain open)
    await user.click(screen.getByRole('button', { name: /Item 2/i }));
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  });
});
