import type { Meta, StoryObj } from '@storybook/preact';
import { Footer, type FooterProps } from '.';

const meta: Meta<FooterProps> = {
  title: 'Components/Layout/Footer',
  tags: ['autodocs'],
  component: Footer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<FooterProps>;

export const Default: Story = {
  args: {
    copyright: '© 2024 Company Name. All rights reserved.',
  },
};

export const WithLogo: Story = {
  args: {
    logo: (
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        MyCompany
      </div>
    ),
    copyright: '© 2024 MyCompany. All rights reserved.',
  },
};

export const WithSections: Story = {
  args: {
    logo: <h2>Brand</h2>,
    sections: (
      <>
        <div style={{ padding: '0 20px' }}>
          <h4>Product</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#updates">Updates</a></li>
          </ul>
        </div>
        <div style={{ padding: '0 20px' }}>
          <h4>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
        <div style={{ padding: '0 20px' }}>
          <h4>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#status">Status</a></li>
          </ul>
        </div>
      </>
    ),
    copyright: '© 2024 Brand. All rights reserved.',
  },
};

export const WithSocial: Story = {
  args: {
    logo: <h2>TechCorp</h2>,
    social: (
      <div style={{ display: 'flex', gap: '15px', fontSize: '1.5rem' }}>
        <a href="#facebook" aria-label="Facebook">📘</a>
        <a href="#twitter" aria-label="Twitter">🐦</a>
        <a href="#linkedin" aria-label="LinkedIn">💼</a>
        <a href="#instagram" aria-label="Instagram">📷</a>
      </div>
    ),
    copyright: '© 2024 TechCorp. All rights reserved.',
  },
};

export const Complete: Story = {
  args: {
    logo: (
      <div>
        <h2 style={{ marginBottom: '10px' }}>StartupXYZ</h2>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>Building the future of technology</p>
      </div>
    ),
    sections: (
      <>
        <div style={{ padding: '0 20px' }}>
          <h4>Product</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#releases">Releases</a></li>
          </ul>
        </div>
        <div style={{ padding: '0 20px' }}>
          <h4>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press Kit</a></li>
          </ul>
        </div>
        <div style={{ padding: '0 20px' }}>
          <h4>Resources</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#guides">Guides</a></li>
            <li><a href="#api">API Reference</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
        </div>
        <div style={{ padding: '0 20px' }}>
          <h4>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#cookies">Cookies</a></li>
            <li><a href="#licenses">Licenses</a></li>
          </ul>
        </div>
      </>
    ),
    social: (
      <div style={{ display: 'flex', gap: '15px', fontSize: '1.5rem' }}>
        <a href="#facebook" aria-label="Facebook">📘</a>
        <a href="#twitter" aria-label="Twitter">🐦</a>
        <a href="#linkedin" aria-label="LinkedIn">💼</a>
        <a href="#github" aria-label="GitHub">⚙️</a>
        <a href="#youtube" aria-label="YouTube">📺</a>
      </div>
    ),
    copyright: (
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <span>© 2024 StartupXYZ. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    copyright: (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        © 2024 Minimal Inc.
      </div>
    ),
  },
};

export const Newsletter: Story = {
  args: {
    logo: <h2>NewsletterCo</h2>,
    sections: (
      <>
        <div style={{ padding: '0 20px' }}>
          <h4>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div style={{ padding: '0 20px', minWidth: '300px' }}>
          <h4>Subscribe to our newsletter</h4>
          <form style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                flex: 1, 
                padding: '8px', 
                border: '1px solid #ccc', 
                borderRadius: '4px' 
              }} 
            />
            <button 
              type="submit"
              style={{ 
                padding: '8px 20px', 
                background: '#007bff', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </>
    ),
    copyright: '© 2024 NewsletterCo. All rights reserved.',
  },
};
