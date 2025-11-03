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
        <div style={{ background: '#e3f2fd', padding: '20px', textAlign: 'center' }}>Item 1</div>
        <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center' }}>Item 2</div>
        <div style={{ background: '#e8f5e9', padding: '20px', textAlign: 'center' }}>Item 3</div>
        <div style={{ background: '#fff3e0', padding: '20px', textAlign: 'center' }}>Item 4</div>
        <div style={{ background: '#fce4ec', padding: '20px', textAlign: 'center' }}>Item 5</div>
        <div style={{ background: '#e0f7fa', padding: '20px', textAlign: 'center' }}>Item 6</div>
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
        <div style={{ background: '#ffebee', padding: '30px', textAlign: 'center' }}>Column 1</div>
        <div style={{ background: '#e8eaf6', padding: '30px', textAlign: 'center' }}>Column 2</div>
        <div style={{ background: '#f1f8e9', padding: '30px', textAlign: 'center' }}>Column 3</div>
        <div style={{ background: '#fff8e1', padding: '30px', textAlign: 'center' }}>Column 4</div>
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
        <div style={{ background: '#e3f2fd', padding: '20px', textAlign: 'center' }}>1</div>
        <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center' }}>2</div>
        <div style={{ background: '#e8f5e9', padding: '20px', textAlign: 'center' }}>3</div>
        <div style={{ background: '#fff3e0', padding: '20px', textAlign: 'center' }}>4</div>
        <div style={{ background: '#fce4ec', padding: '20px', textAlign: 'center' }}>5</div>
        <div style={{ background: '#e0f7fa', padding: '20px', textAlign: 'center' }}>6</div>
        <div style={{ background: '#ffebee', padding: '20px', textAlign: 'center' }}>7</div>
        <div style={{ background: '#e8eaf6', padding: '20px', textAlign: 'center' }}>8</div>
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
        <div style={{ background: '#e3f2fd', padding: '20px', textAlign: 'center' }}>
          <h3>Card 1</h3>
          <p>Responsive grid item</p>
        </div>
        <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center' }}>
          <h3>Card 2</h3>
          <p>Responsive grid item</p>
        </div>
        <div style={{ background: '#e8f5e9', padding: '20px', textAlign: 'center' }}>
          <h3>Card 3</h3>
          <p>Responsive grid item</p>
        </div>
        <div style={{ background: '#fff3e0', padding: '20px', textAlign: 'center' }}>
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
        <div style={{ background: '#e3f2fd', padding: '20px', textAlign: 'center', minWidth: '200px' }}>Auto 1</div>
        <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center', minWidth: '200px' }}>Auto 2</div>
        <div style={{ background: '#e8f5e9', padding: '20px', textAlign: 'center', minWidth: '200px' }}>Auto 3</div>
        <div style={{ background: '#fff3e0', padding: '20px', textAlign: 'center', minWidth: '200px' }}>Auto 4</div>
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
        <div style={{ background: '#e3f2fd', padding: '20px', textAlign: 'center', border: '1px solid #333' }}>No Gap 1</div>
        <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center', border: '1px solid #333' }}>No Gap 2</div>
        <div style={{ background: '#e8f5e9', padding: '20px', textAlign: 'center', border: '1px solid #333' }}>No Gap 3</div>
      </>
    ),
  },
};
