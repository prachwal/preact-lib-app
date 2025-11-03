import type { Meta, StoryObj } from '@storybook/preact';
import { Header, type HeaderProps } from '.';

const meta: Meta<HeaderProps> = {
  title: 'Components/Layout/Header',
  tags: ['autodocs'],
  component: Header,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  args: {
    logo: <h1 style={{ margin: 0 }}>Brand</h1>,
  },
};

export const WithNavigation: Story = {
  args: {
    logo: <h1 style={{ margin: 0 }}>MyApp</h1>,
    nav: (
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    ),
  },
};

export const WithActions: Story = {
  args: {
    logo: <h1 style={{ margin: 0 }}>Platform</h1>,
    nav: (
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#products">Products</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#docs">Docs</a></li>
      </ul>
    ),
    actions: (
      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={{ padding: '8px 16px', background: 'transparent', border: '1px solid #333', borderRadius: '4px', cursor: 'pointer' }}>
          Sign In
        </button>
        <button style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </div>
    ),
  },
};

export const Fixed: Story = {
  args: {
    position: 'fixed',
    logo: <h1 style={{ margin: 0 }}>FixedHeader</h1>,
    nav: (
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
    ),
  },
};

export const Sticky: Story = {
  args: {
    position: 'sticky',
    logo: <h1 style={{ margin: 0 }}>StickyNav</h1>,
    nav: (
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
      </ul>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    logo: <span style={{ fontWeight: 'bold' }}>Compact</span>,
    nav: (
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.9rem' }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    logo: <h1 style={{ margin: 0, fontSize: '2rem' }}>LargeBrand</h1>,
    nav: (
      <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0, fontSize: '1.1rem' }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    ),
  },
};

export const WithSearch: Story = {
  args: {
    logo: <h1 style={{ margin: 0 }}>SearchSite</h1>,
    nav: (
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#trending">Trending</a></li>
      </ul>
    ),
    actions: (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input 
          type="search" 
          placeholder="Search..." 
          style={{ 
            padding: '6px 12px', 
            border: '1px solid #ccc', 
            borderRadius: '20px',
            width: '200px'
          }} 
        />
        <button style={{ padding: '6px 12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Profile
        </button>
      </div>
    ),
  },
};

export const ECommerce: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.5rem' }}>🛍️</span>
        <h1 style={{ margin: 0 }}>ShopNow</h1>
      </div>
    ),
    nav: (
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#new">New Arrivals</a></li>
        <li><a href="#men">Men</a></li>
        <li><a href="#women">Women</a></li>
        <li><a href="#sale">Sale</a></li>
      </ul>
    ),
    actions: (
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', fontSize: '1.2rem' }}>
        <a href="#search">🔍</a>
        <a href="#account">👤</a>
        <a href="#favorites">❤️</a>
        <a href="#cart" style={{ position: 'relative' }}>
          🛒
          <span style={{ 
            position: 'absolute', 
            top: '-5px', 
            right: '-5px', 
            background: 'red', 
            color: 'white', 
            borderRadius: '50%', 
            padding: '2px 6px', 
            fontSize: '0.7rem' 
          }}>
            3
          </span>
        </a>
      </div>
    ),
  },
};

export const Dashboard: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.5rem' }}>📊</span>
        <h1 style={{ margin: 0 }}>Dashboard</h1>
      </div>
    ),
    nav: (
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    ),
    actions: (
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <button style={{ background: 'transparent', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>
          🔔
        </button>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          background: '#007bff', 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          JD
        </div>
      </div>
    ),
  },
};
