import type { Meta, StoryObj } from '@storybook/preact';
import { Search, type SearchProps } from '.';

const meta: Meta<SearchProps> = {
  title: 'Components/Special/Search',
  tags: ['autodocs'],
  component: Search,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<SearchProps>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithResults: Story = {
  args: {
    placeholder: 'Search products...',
    results: [
      { id: 1, text: 'Laptop Computer' },
      { id: 2, text: 'Wireless Mouse' },
      { id: 3, text: 'Mechanical Keyboard' },
      { id: 4, text: 'USB-C Cable' },
      { id: 5, text: 'External Monitor' },
    ],
    onSelect: (result) => console.log('Selected:', result),
  },
};

export const WithMetadata: Story = {
  args: {
    placeholder: 'Search documentation...',
    results: [
      { id: 1, text: 'Getting Started', meta: 'Introduction' },
      { id: 2, text: 'Installation Guide', meta: 'Setup' },
      { id: 3, text: 'API Reference', meta: 'Documentation' },
      { id: 4, text: 'Troubleshooting', meta: 'Help' },
      { id: 5, text: 'Best Practices', meta: 'Guide' },
    ],
    onSelect: (result) => console.log('Selected:', result),
  },
};

export const Loading: Story = {
  args: {
    placeholder: 'Search users...',
    loading: true,
    value: 'john',
  },
};

export const NoResults: Story = {
  args: {
    placeholder: 'Search...',
    value: 'xyz123abc',
    results: [],
  },
};

export const NoClearButton: Story = {
  args: {
    placeholder: 'Search without clear button...',
    showClear: false,
    results: [
      { id: 1, text: 'Result 1' },
      { id: 2, text: 'Result 2' },
    ],
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Type to search movies, shows, or actors...',
    results: [
      { id: 1, text: 'The Matrix', meta: 'Movie (1999)' },
      { id: 2, text: 'Breaking Bad', meta: 'TV Series (2008-2013)' },
      { id: 3, text: 'Tom Hanks', meta: 'Actor' },
      { id: 4, text: 'The Dark Knight', meta: 'Movie (2008)' },
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const allItems = [
      { id: 1, text: 'Apple', meta: 'Fruit' },
      { id: 2, text: 'Banana', meta: 'Fruit' },
      { id: 3, text: 'Carrot', meta: 'Vegetable' },
      { id: 4, text: 'Date', meta: 'Fruit' },
      { id: 5, text: 'Eggplant', meta: 'Vegetable' },
      { id: 6, text: 'Fig', meta: 'Fruit' },
      { id: 7, text: 'Grapes', meta: 'Fruit' },
      { id: 8, text: 'Honeydew', meta: 'Fruit' },
    ];

    return (
      <Search
        placeholder="Search for fruits and vegetables..."
        onInput={(value) => {
          console.log('Search value:', value);
        }}
        results={allItems.slice(0, 5)}
        onSelect={(result) => {
          alert(`You selected: ${result.text} (${result.meta})`);
        }}
      />
    );
  },
};
