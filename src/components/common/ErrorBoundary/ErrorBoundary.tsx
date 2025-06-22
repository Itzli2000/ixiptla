import React, { Component, type ReactNode } from 'react';
import { useTranslations } from '../../../i18n/utils';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  lang?: 'en' | 'es';
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
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

      const lang = this.props.lang || 'es';
      const t = useTranslations(lang);

      return (
        <div className="flex flex-col items-center justify-center p-8 bg-base-200 rounded-xl">
          <div className="text-error text-6xl mb-4">⚠</div>
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