import type { Meta, StoryObj } from '@storybook/preact';
import { Testimonial, type TestimonialProps } from '.';

const meta: Meta<TestimonialProps> = {
  title: 'Components/Special/Testimonial',
  tags: ['autodocs'],
  component: Testimonial,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<TestimonialProps>;

export const Default: Story = {
  args: {
    quote: 'This product has completely transformed the way we work. Highly recommended!',
    author: 'John Doe',
    title: 'CEO',
    company: 'Tech Corp',
  },
};

export const WithAvatar: Story = {
  args: {
    quote: 'Outstanding service and support. The team went above and beyond to help us succeed.',
    author: 'Jane Smith',
    title: 'Product Manager',
    company: 'Innovation Labs',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
};

export const WithRating: Story = {
  args: {
    quote: 'Five stars all the way! Best investment we made this year.',
    author: 'Mike Johnson',
    title: 'CTO',
    company: 'StartupXYZ',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
  },
};

export const FourStars: Story = {
  args: {
    quote: 'Great product with room for improvement in some areas, but overall very satisfied.',
    author: 'Sarah Williams',
    title: 'Marketing Director',
    company: 'Digital Agency',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 4,
  },
};

export const Simple: Story = {
  args: {
    quote: 'Simple, effective, and exactly what we needed.',
    author: 'Alex Turner',
    rating: 5,
  },
};

export const Inline: Story = {
  args: {
    quote: 'This is a shorter inline testimonial without card styling.',
    author: 'Emily Chen',
    title: 'Designer',
    inline: true,
  },
};

export const LongQuote: Story = {
  args: {
    quote: 'I have been using this product for over a year now, and I must say it has exceeded all my expectations. The team behind it is incredibly responsive, and the features keep getting better with each update. It has not only saved us countless hours but also improved our overall productivity significantly. I would recommend this to anyone looking for a reliable solution.',
    author: 'Robert Davis',
    title: 'Operations Manager',
    company: 'Enterprise Solutions Inc.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
  },
};

export const NoCompany: Story = {
  args: {
    quote: 'As a freelancer, this tool has been invaluable in managing my projects.',
    author: 'Lisa Anderson',
    title: 'Freelance Developer',
    avatar: 'https://i.pravatar.cc/150?img=10',
    rating: 5,
  },
};

export const MinimalInfo: Story = {
  args: {
    quote: 'Simply the best!',
    author: 'Chris Brown',
  },
};

export const Collection: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px' }}>
      <Testimonial
        quote="Game changer for our team!"
        author="Alice Johnson"
        title="Team Lead"
        avatar="https://i.pravatar.cc/150?img=1"
        rating={5}
      />
      <Testimonial
        quote="Incredible support and great features."
        author="Bob Wilson"
        title="Developer"
        avatar="https://i.pravatar.cc/150?img=2"
        rating={5}
      />
      <Testimonial
        quote="Best decision we made this quarter."
        author="Carol Martinez"
        title="VP of Engineering"
        company="Tech Giants"
        avatar="https://i.pravatar.cc/150?img=4"
        rating={4}
      />
    </div>
  ),
};
