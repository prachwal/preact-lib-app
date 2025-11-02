import type { Meta, StoryObj } from '@storybook/preact';
import { Pagination, type PaginationProps } from '.';
import { useState } from 'preact/hooks';

const meta: Meta<PaginationProps> = {
  title: 'Components/Navigation/Pagination',
  tags: ['autodocs'],
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    showFirstLast: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<PaginationProps>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const WithFirstLast: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: true,
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 10,
    totalPages: 50,
    maxVisiblePages: 7,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    showFirstLast: true,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    showFirstLast: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Pagination size="sm" currentPage={3} totalPages={10} />
      <Pagination size="md" currentPage={3} totalPages={10} />
      <Pagination size="lg" currentPage={3} totalPages={10} />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div>
        <p style={{ marginBottom: '1rem' }}>Current page: {page}</p>
        <Pagination
          currentPage={page}
          totalPages={20}
          onChange={setPage}
          showFirstLast
        />
      </div>
    );
  },
};

export const CompactView: Story = {
  args: {
    currentPage: 15,
    totalPages: 100,
    maxVisiblePages: 5,
    showFirstLast: true,
  },
};
