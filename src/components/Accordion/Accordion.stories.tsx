import type { Meta, StoryObj } from '@storybook/preact';
import { Accordion, AccordionItem } from '.';

const meta: Meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="What is Preact?">
        <p>Preact is a fast 3kB alternative to React with the same modern API.</p>
      </AccordionItem>
      <AccordionItem title="Why use Preact?">
        <p>Preact provides the thinnest possible Virtual DOM abstraction on top of the DOM.</p>
      </AccordionItem>
      <AccordionItem title="How to get started?">
        <p>You can start using Preact by installing it via npm: npm install preact</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDefaultOpen: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Section 1" defaultOpen>
        <p>This section is open by default.</p>
      </AccordionItem>
      <AccordionItem title="Section 2">
        <p>This section is closed by default.</p>
      </AccordionItem>
      <AccordionItem title="Section 3">
        <p>This section is also closed by default.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Active Section">
        <p>This section can be toggled.</p>
      </AccordionItem>
      <AccordionItem title="Disabled Section" disabled>
        <p>This section is disabled and cannot be opened.</p>
      </AccordionItem>
      <AccordionItem title="Another Active Section">
        <p>This section can also be toggled.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="How do I install the library?">
        <p>You can install it using npm:</p>
        <code>npm install preact-lib-app</code>
      </AccordionItem>
      <AccordionItem title="Is it compatible with React?">
        <p>Yes, Preact is compatible with most React libraries and has the same API.</p>
      </AccordionItem>
      <AccordionItem title="What browsers are supported?">
        <p>Preact supports all modern browsers including Chrome, Firefox, Safari, and Edge.</p>
      </AccordionItem>
      <AccordionItem title="Can I use TypeScript?">
        <p>Yes, this library is built with TypeScript and includes full type definitions.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Features">
        <ul>
          <li>Component library</li>
          <li>TypeScript support</li>
          <li>Storybook documentation</li>
          <li>Comprehensive testing</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Installation">
        <h4>Prerequisites</h4>
        <p>Make sure you have Node.js installed.</p>
        <h4>Steps</h4>
        <ol>
          <li>Run npm install</li>
          <li>Import components</li>
          <li>Start using them</li>
        </ol>
      </AccordionItem>
      <AccordionItem title="Resources">
        <p>Check out these resources:</p>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">GitHub Repository</a></li>
          <li><a href="#">npm Package</a></li>
        </ul>
      </AccordionItem>
    </Accordion>
  ),
};
