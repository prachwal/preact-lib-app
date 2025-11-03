import type { Meta, StoryObj } from '@storybook/preact';
import { PricingCard, type PricingCardProps } from '.';

const meta: Meta<PricingCardProps> = {
  title: 'Components/Special/PricingCard',
  tags: ['autodocs'],
  component: PricingCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<PricingCardProps>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '30px', textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
        <h3>Basic Plan</h3>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px 0' }}>$9.99/mo</div>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
          <li>✓ 10 GB Storage</li>
          <li>✓ Basic Support</li>
          <li>✓ 1 User</li>
        </ul>
        <button style={{ padding: '10px 30px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Choose Plan
        </button>
      </div>
    ),
  },
};

export const Starter: Story = {
  args: {
    children: (
      <div style={{ padding: '30px', textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '8px', background: '#f9f9f9' }}>
        <h3 style={{ color: '#666' }}>Starter</h3>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0', color: '#333' }}>
          $0<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span>
        </div>
        <p style={{ color: '#888', marginBottom: '20px' }}>Perfect for trying out</p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', textAlign: 'left' }}>
          <li style={{ marginBottom: '10px' }}>✓ 5 GB Storage</li>
          <li style={{ marginBottom: '10px' }}>✓ Community Support</li>
          <li style={{ marginBottom: '10px' }}>✓ Limited Features</li>
        </ul>
        <button style={{ padding: '12px 40px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
          Get Started
        </button>
      </div>
    ),
  },
};

export const Professional: Story = {
  args: {
    children: (
      <div style={{ padding: '30px', textAlign: 'center', border: '2px solid #007bff', borderRadius: '8px', background: 'white', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#007bff', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.85rem' }}>
          POPULAR
        </div>
        <h3 style={{ color: '#007bff', marginTop: '10px' }}>Professional</h3>
        <div style={{ fontSize: '3rem', fontWeight: 'bold', margin: '20px 0', color: '#007bff' }}>
          $29<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mo</span>
        </div>
        <p style={{ color: '#666', marginBottom: '20px' }}>For growing businesses</p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', textAlign: 'left' }}>
          <li style={{ marginBottom: '10px' }}>✓ 100 GB Storage</li>
          <li style={{ marginBottom: '10px' }}>✓ Priority Support</li>
          <li style={{ marginBottom: '10px' }}>✓ 10 Users</li>
          <li style={{ marginBottom: '10px' }}>✓ Advanced Analytics</li>
          <li style={{ marginBottom: '10px' }}>✓ Custom Domain</li>
        </ul>
        <button style={{ padding: '12px 40px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%', fontSize: '1rem', fontWeight: 'bold' }}>
          Choose Professional
        </button>
      </div>
    ),
  },
};

export const Enterprise: Story = {
  args: {
    children: (
      <div style={{ padding: '40px', textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '8px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <h3 style={{ color: 'white' }}>Enterprise</h3>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '20px 0' }}>
          Custom
        </div>
        <p style={{ marginBottom: '20px', opacity: 0.9 }}>Tailored for your organization</p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', textAlign: 'left' }}>
          <li style={{ marginBottom: '10px' }}>✓ Unlimited Storage</li>
          <li style={{ marginBottom: '10px' }}>✓ 24/7 Dedicated Support</li>
          <li style={{ marginBottom: '10px' }}>✓ Unlimited Users</li>
          <li style={{ marginBottom: '10px' }}>✓ Advanced Security</li>
          <li style={{ marginBottom: '10px' }}>✓ SLA Guarantee</li>
          <li style={{ marginBottom: '10px' }}>✓ Custom Integrations</li>
        </ul>
        <button style={{ padding: '12px 40px', background: 'white', color: '#764ba2', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%', fontSize: '1rem', fontWeight: 'bold' }}>
          Contact Sales
        </button>
      </div>
    ),
  },
};

export const Annually: Story = {
  args: {
    children: (
      <div style={{ padding: '30px', textAlign: 'center', border: '1px solid #28a745', borderRadius: '8px', background: '#f1f9f3' }}>
        <div style={{ background: '#28a745', color: 'white', padding: '5px 10px', borderRadius: '4px', display: 'inline-block', fontSize: '0.85rem', marginBottom: '10px' }}>
          SAVE 20%
        </div>
        <h3 style={{ color: '#28a745' }}>Annual Plan</h3>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '10px 0', color: '#333' }}>
          $199<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/year</span>
        </div>
        <div style={{ color: '#666', textDecoration: 'line-through', fontSize: '0.9rem', marginBottom: '20px' }}>
          $239.88/year
        </div>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', textAlign: 'left' }}>
          <li style={{ marginBottom: '10px' }}>✓ 50 GB Storage</li>
          <li style={{ marginBottom: '10px' }}>✓ Email Support</li>
          <li style={{ marginBottom: '10px' }}>✓ 5 Users</li>
          <li style={{ marginBottom: '10px' }}>✓ All Basic Features</li>
        </ul>
        <button style={{ padding: '12px 40px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
          Subscribe Annually
        </button>
      </div>
    ),
  },
};

export const Comparison: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1000px' }}>
      <PricingCard>
        <div style={{ padding: '30px', textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
          <h3>Free</h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px 0' }}>$0</div>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '20px' }}>
            <li>✓ 2 GB Storage</li>
            <li>✗ Support</li>
            <li>✓ 1 User</li>
          </ul>
          <button style={{ padding: '10px 30px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
            Sign Up
          </button>
        </div>
      </PricingCard>
      <PricingCard>
        <div style={{ padding: '30px', textAlign: 'center', border: '2px solid #007bff', borderRadius: '8px' }}>
          <h3 style={{ color: '#007bff' }}>Pro</h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px 0', color: '#007bff' }}>$19</div>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '20px' }}>
            <li>✓ 50 GB Storage</li>
            <li>✓ Email Support</li>
            <li>✓ 5 Users</li>
          </ul>
          <button style={{ padding: '10px 30px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
            Get Pro
          </button>
        </div>
      </PricingCard>
      <PricingCard>
        <div style={{ padding: '30px', textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
          <h3>Team</h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px 0' }}>$49</div>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '20px' }}>
            <li>✓ 200 GB Storage</li>
            <li>✓ Priority Support</li>
            <li>✓ 20 Users</li>
          </ul>
          <button style={{ padding: '10px 30px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
            Get Team
          </button>
        </div>
      </PricingCard>
    </div>
  ),
};
