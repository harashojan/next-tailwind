import type { FC, ReactNode } from "react";

import { ErrorBoundary } from "react-error-boundary";

import type { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

/**
 * @package
 */
export const LayoutErrorBoundary: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};
