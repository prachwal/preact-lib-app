import type { Meta, StoryObj } from '@storybook/preact';
import { Timeline, type TimelineProps } from '.';

const meta: Meta<TimelineProps> = {
  title: 'Components/Special/Timeline',
  tags: ['autodocs'],
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<TimelineProps>;

export const Default: Story = {
  args: {
    items: [
      {
        timestamp: '2024-01-15',
        content: 'Project started and initial planning completed',
      },
      {
        timestamp: '2024-02-01',
        content: 'First milestone achieved - MVP development',
      },
      {
        timestamp: '2024-03-10',
        content: 'Beta testing phase initiated with select users',
      },
      {
        timestamp: '2024-04-20',
        content: 'Official launch and public release',
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        timestamp: '9:00 AM',
        icon: '🚀',
        content: 'Project kickoff meeting',
      },
      {
        timestamp: '11:30 AM',
        icon: '💡',
        content: 'Brainstorming session for new features',
      },
      {
        timestamp: '2:00 PM',
        icon: '✅',
        content: 'Completed code review and merged PR',
      },
      {
        timestamp: '4:30 PM',
        icon: '🎯',
        content: 'Sprint planning for next iteration',
      },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal' as const,
    items: [
      {
        timestamp: 'Q1 2024',
        icon: '📋',
        content: 'Planning',
      },
      {
        timestamp: 'Q2 2024',
        icon: '⚙️',
        content: 'Development',
      },
      {
        timestamp: 'Q3 2024',
        icon: '🧪',
        content: 'Testing',
      },
      {
        timestamp: 'Q4 2024',
        icon: '🚀',
        content: 'Launch',
      },
    ],
  },
};

export const DetailedTimeline: Story = {
  args: {
    items: [
      {
        timestamp: 'January 2024',
        icon: '🎓',
        content: (
          <div>
            <h3>Graduated from University</h3>
            <p>Bachelor's degree in Computer Science</p>
          </div>
        ),
      },
      {
        timestamp: 'March 2024',
        icon: '💼',
        content: (
          <div>
            <h3>Started New Job</h3>
            <p>Senior Frontend Developer at Tech Corp</p>
          </div>
        ),
      },
      {
        timestamp: 'June 2024',
        icon: '🏆',
        content: (
          <div>
            <h3>Won Hackathon</h3>
            <p>First place in annual company hackathon</p>
          </div>
        ),
      },
    ],
  },
};
