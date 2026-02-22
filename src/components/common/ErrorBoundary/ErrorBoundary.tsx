import React, { Component, type ReactNode } from 'react';
import { useTranslations, type TranslationFunction } from '../../../i18n/utils';

interface ErrorBoundaryClassProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  lang?: 'en' | 'es';
  t: TranslationFunction;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundaryClass extends Component<ErrorBoundaryClassProps, State> {
  constructor(props: ErrorBoundaryClassProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const t = this.props.t;

      return (
        <div className="flex flex-col items-center justify-center p-8 bg-base-200 rounded-xl">
          <div className="text-error text-6xl mb-4" aria-hidden="true">⚠</div>
          <h3 className="text-xl font-semibold mb-2">{t('errors.general.title')}</h3>
          <p className="text-base-content/70 text-center mb-4">
            {t('errors.general.description')}
          </p>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => this.setState({ hasError: false })}
          >
            {t('errors.general.retry')}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  lang?: 'en' | 'es';
}

export default function ErrorBoundary(props: ErrorBoundaryProps) {
  const { lang = 'es', ...restProps } = props;
  const t = useTranslations(lang);

  return <ErrorBoundaryClass {...restProps} lang={lang} t={t} />;
}