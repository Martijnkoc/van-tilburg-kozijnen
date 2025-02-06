import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary', () => {
  const originalConsoleError = console.error;
  
  beforeAll(() => {
    console.error = vi.fn();
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  it('renders children when there is no error', () => {
    const { container } = render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>
    );
    
    expect(container).toHaveTextContent('Test Content');
  });

  it('renders error message when there is an error', () => {
    const ThrowError = () => {
      throw new Error('Test error');
      return null;
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Er is iets misgegaan/i)).toBeInTheDocument();
    expect(screen.getByText(/Probeer de pagina te verversen/i)).toBeInTheDocument();
  });
});
