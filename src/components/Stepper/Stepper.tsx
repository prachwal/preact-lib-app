import type { HTMLAttributes } from 'preact';

export type StepperOrientation = 'horizontal' | 'vertical';
export type StepStatus = 'completed' | 'active' | 'upcoming' | 'error';

export interface Step {
  id: string;
  label: string;
  description?: string;
  status?: StepStatus;
  icon?: string;
}

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  currentStep: number;
  orientation?: StepperOrientation;
  onStepClick?: (stepIndex: number) => void;
}

export const Stepper = ({
  steps,
  currentStep,
  orientation = 'horizontal',
  onStepClick,
  className = '',
  ...props
}: StepperProps) => {
  const baseClass = 'stepper';
  const orientationClass = orientation !== 'horizontal' ? `stepper-${orientation}` : '';
  const containerClasses = [baseClass, orientationClass, className].filter(Boolean).join(' ');

  const getStepStatus = (index: number): StepStatus => {
    const step = steps[index];
    if (step.status) return step.status;
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'active';
    return 'upcoming';
  };

  return (
    <div className={containerClasses} {...props}>
      <ol className="stepper-list">
        {steps.map((step, index) => {
          const status = getStepStatus(index);
          const isClickable = onStepClick && (status === 'completed' || status === 'active');

          const stepClasses = [
            'stepper-step',
            `stepper-step-${status}`,
            isClickable ? 'stepper-step-clickable' : '',
          ]
            .filter(Boolean)
            .join(' ');

          const StepContent = (
            <>
              <div className="stepper-marker">
                {status === 'completed' ? (
                  <span className="stepper-icon">✓</span>
                ) : status === 'error' ? (
                  <span className="stepper-icon">✗</span>
                ) : step.icon ? (
                  <span className="stepper-icon">{step.icon}</span>
                ) : (
                  <span className="stepper-number">{index + 1}</span>
                )}
              </div>
              <div className="stepper-content">
                <div className="stepper-label">{step.label}</div>
                {step.description && (
                  <div className="stepper-description">{step.description}</div>
                )}
              </div>
            </>
          );

          return (
            <li key={step.id} className={stepClasses}>
              {isClickable ? (
                <button
                  type="button"
                  className="stepper-button"
                  onClick={() => onStepClick(index)}
                  aria-current={status === 'active' ? 'step' : undefined}
                >
                  {StepContent}
                </button>
              ) : (
                <div className="stepper-item" aria-current={status === 'active' ? 'step' : undefined}>
                  {StepContent}
                </div>
              )}
              {index < steps.length - 1 && <div className="stepper-connector" />}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Stepper;
