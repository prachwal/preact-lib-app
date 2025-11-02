import type { Meta, StoryObj } from '@storybook/preact';
import { Stepper, type StepperProps } from '.';
import { useState } from 'preact/hooks';

const meta: Meta<StepperProps> = {
  title: 'Components/Navigation/Stepper',
  tags: ['autodocs'],
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<StepperProps>;

const sampleSteps = [
  { id: 'step1', label: 'Account', description: 'Create your account' },
  { id: 'step2', label: 'Profile', description: 'Set up your profile' },
  { id: 'step3', label: 'Preferences', description: 'Choose your preferences' },
  { id: 'step4', label: 'Complete', description: 'Review and finish' },
];

export const Default: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 1,
  },
};

export const FirstStep: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 0,
  },
};

export const LastStep: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 3,
  },
};

export const WithError: Story = {
  args: {
    steps: [
      { id: 'step1', label: 'Account', status: 'completed' },
      { id: 'step2', label: 'Profile', status: 'error', description: 'Fix validation errors' },
      { id: 'step3', label: 'Preferences', status: 'upcoming' },
    ],
    currentStep: 1,
  },
};

export const Vertical: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 1,
    orientation: 'vertical',
  },
};

export const WithIcons: Story = {
  args: {
    steps: [
      { id: 'step1', label: 'Cart', icon: '🛒', status: 'completed' },
      { id: 'step2', label: 'Shipping', icon: '📦', status: 'active' },
      { id: 'step3', label: 'Payment', icon: '💳', status: 'upcoming' },
      { id: 'step4', label: 'Confirmation', icon: '✅', status: 'upcoming' },
    ],
    currentStep: 1,
  },
};

export const Interactive: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    return (
      <div>
        <Stepper steps={sampleSteps} currentStep={currentStep} onStepClick={setCurrentStep} />
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}>Previous</button>
          <span style={{ margin: '0 1rem' }}>Step {currentStep + 1} of {sampleSteps.length}</span>
          <button onClick={() => setCurrentStep(Math.min(sampleSteps.length - 1, currentStep + 1))}>
            Next
          </button>
        </div>
      </div>
    );
  },
};

export const Simple: Story = {
  args: {
    steps: [
      { id: 'step1', label: 'Information' },
      { id: 'step2', label: 'Confirmation' },
      { id: 'step3', label: 'Complete' },
    ],
    currentStep: 1,
  },
};
