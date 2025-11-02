import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Stepper from '.';

describe('Stepper', () => {
  const steps = [
    { id: 'step1', label: 'Step 1', description: 'First step' },
    { id: 'step2', label: 'Step 2', description: 'Second step' },
    { id: 'step3', label: 'Step 3', description: 'Third step' },
  ];

  it('renders all steps', () => {
    render(<Stepper steps={steps} currentStep={0} />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<Stepper steps={steps} currentStep={0} />);
    expect(screen.getByText('First step')).toBeInTheDocument();
    expect(screen.getByText('Second step')).toBeInTheDocument();
    expect(screen.getByText('Third step')).toBeInTheDocument();
  });

  it('shows current step as active', () => {
    const { container } = render(<Stepper steps={steps} currentStep={1} />);
    const stepItems = container.querySelectorAll('.stepper-step');
    expect(stepItems[1]).toHaveClass('stepper-step-active');
  });

  it('shows completed steps', () => {
    const { container } = render(<Stepper steps={steps} currentStep={2} />);
    const stepItems = container.querySelectorAll('.stepper-step');
    expect(stepItems[0]).toHaveClass('stepper-step-completed');
    expect(stepItems[1]).toHaveClass('stepper-step-completed');
  });

  it('shows upcoming steps', () => {
    const { container } = render(<Stepper steps={steps} currentStep={0} />);
    const stepItems = container.querySelectorAll('.stepper-step');
    expect(stepItems[1]).toHaveClass('stepper-step-upcoming');
    expect(stepItems[2]).toHaveClass('stepper-step-upcoming');
  });

  it('renders checkmark for completed steps', () => {
    render(<Stepper steps={steps} currentStep={2} />);
    const checkmarks = screen.getAllByText('✓');
    expect(checkmarks).toHaveLength(2); // Steps 0 and 1
  });

  it('renders step numbers for upcoming steps', () => {
    render(<Stepper steps={steps} currentStep={0} />);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders error status when specified', () => {
    const stepsWithError = [
      { id: 'step1', label: 'Step 1', status: 'error' as const },
    ];
    const { container } = render(<Stepper steps={stepsWithError} currentStep={0} />);
    expect(container.querySelector('.stepper-step-error')).toBeInTheDocument();
    expect(screen.getByText('✗')).toBeInTheDocument();
  });

  it('renders custom icons', () => {
    const stepsWithIcons = [
      { id: 'step1', label: 'Step 1', icon: '🏠' },
    ];
    render(<Stepper steps={stepsWithIcons} currentStep={0} />);
    expect(screen.getByText('🏠')).toBeInTheDocument();
  });

  it('renders vertical orientation', () => {
    const { container } = render(
      <Stepper steps={steps} currentStep={0} orientation="vertical" />,
    );
    expect(container.querySelector('.stepper')).toHaveClass('stepper-vertical');
  });

  it('calls onStepClick when clickable step is clicked', async () => {
    const user = userEvent.setup();
    const handleStepClick = vi.fn();
    render(<Stepper steps={steps} currentStep={2} onStepClick={handleStepClick} />);

    const completedStepButton = screen.getByText('Step 1').closest('button');
    await user.click(completedStepButton!);
    expect(handleStepClick).toHaveBeenCalledWith(0);
  });

  it('does not call onStepClick for upcoming steps', () => {
    const handleStepClick = vi.fn();
    render(<Stepper steps={steps} currentStep={0} onStepClick={handleStepClick} />);

    const upcomingStep = screen.getByText('Step 2').closest('button');
    expect(upcomingStep).toBeNull(); // Should be div, not button
  });

  it('applies custom className', () => {
    const { container } = render(
      <Stepper steps={steps} currentStep={0} className="custom-class" />,
    );
    expect(container.querySelector('.stepper')).toHaveClass('stepper', 'custom-class');
  });

  it('renders connectors between steps', () => {
    const { container } = render(<Stepper steps={steps} currentStep={0} />);
    const connectors = container.querySelectorAll('.stepper-connector');
    expect(connectors).toHaveLength(steps.length - 1);
  });
});
