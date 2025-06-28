import React, { Component, type ReactNode } from 'react';
import es from '../../../i18n/languages/es.json';
import en from '../../../i18n/languages/en.json';

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

  private getTranslation(key: string, lang: 'en' | 'es'): string {
    const translations = lang === 'es' ? es : en;
    const keys = key.split('.');
    let value: unknown = translations;
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if path doesn't exist
      }
    }
    
    return typeof value === 'string' ? value : key;
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

      return (
        <div className="flex flex-col items-center justify-center p-8 bg-base-200 rounded-xl">
          <div className="text-error text-6xl mb-4">⚠</div>
          <h3 className="text-xl font-semibold mb-2">{this.getTranslation('errors.general.title', lang)}</h3>
          <p className="text-base-content/70 text-center mb-4">
            {this.getTranslation('errors.general.description', lang)}
          </p>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => this.setState({ hasError: false })}
          >
            {this.getTranslation('errors.general.retry', lang)}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}