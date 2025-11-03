import type { Meta, StoryObj } from '@storybook/preact';
import { GridSystem, type GridSystemProps } from '.';

const meta: Meta<GridSystemProps> = {
  title: 'Components/Layout/GridSystem',
  tags: ['autodocs'],
  component: GridSystem,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<GridSystemProps>;

export const Default: Story = {
  args: {
    cols: '3',
    gap: '4',
    children: (
      <>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>Item 1</div>
        <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>Item 2</div>
        <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>Item 3</div>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>Item 4</div>
        <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>Item 5</div>
        <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>Item 6</div>
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    cols: '2',
    gap: '6',
    children: (
      <>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '30px', textAlign: 'center', borderRadius: '4px' }}>Column 1</div>
        <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '30px', textAlign: 'center', borderRadius: '4px' }}>Column 2</div>
        <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '30px', textAlign: 'center', borderRadius: '4px' }}>Column 3</div>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '30px', textAlign: 'center', borderRadius: '4px' }}>Column 4</div>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    cols: '4',
    gap: '4',
    children: (
      <>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>1</div>
        <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>2</div>
        <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>3</div>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>4</div>
        <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>5</div>
        <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>6</div>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>7</div>
        <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>8</div>
      </>
    ),
  },
};

export const ResponsiveGrid: Story = {
  args: {
    cols: '1',
    mdCols: '2',
    lgCols: '4',
    gap: '4',
    children: (
      <>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>
          <h3>Card 1</h3>
          <p>Responsive grid item</p>
        </div>
        <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>
          <h3>Card 2</h3>
          <p>Responsive grid item</p>
        </div>
        <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>
          <h3>Card 3</h3>
          <p>Responsive grid item</p>
        </div>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', borderRadius: '4px' }}>
          <h3>Card 4</h3>
          <p>Responsive grid item</p>
        </div>
      </>
    ),
  },
};

export const AutoFit: Story = {
  args: {
    variant: 'auto-fit',
    gap: '4',
    children: (
      <>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', minWidth: '200px', borderRadius: '4px' }}>Auto 1</div>
        <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', minWidth: '200px', borderRadius: '4px' }}>Auto 2</div>
        <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', minWidth: '200px', borderRadius: '4px' }}>Auto 3</div>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', minWidth: '200px', borderRadius: '4px' }}>Auto 4</div>
      </>
    ),
  },
};

export const NoGap: Story = {
  args: {
    cols: '3',
    gap: '0',
    children: (
      <>
        <div style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', border: '1px solid var(--color-border)', borderRadius: '4px' }}>No Gap 1</div>
        <div style={{ background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', border: '1px solid var(--color-border)', borderRadius: '4px' }}>No Gap 2</div>
        <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: '20px', textAlign: 'center', border: '1px solid var(--color-border)', borderRadius: '4px' }}>No Gap 3</div>
      </>
    ),
  },
};
