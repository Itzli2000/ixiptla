import React from 'react';
import { useTranslations } from '../../../i18n/utils';
import type { ModelErrorProps as BaseModelErrorProps, Language } from '../../../types';

interface ModelErrorProps extends BaseModelErrorProps {
  message?: string;
  variant?: 'default' | 'compact';
}

export default function ModelError({ 
  message, 
  onRetry,
  variant = 'default',
  lang = 'es',
  errorType = 'loadError'
}: ModelErrorProps): JSX.Element {
  const t = useTranslations(lang);
  
  const getErrorMessage = () => {
    if (message) return message;
    
    switch (errorType) {
      case 'failedToLoad':
        return t('errors.model.failedToLoad');
      case 'noModelData':
        return t('errors.model.noModelData');
      case 'initError':
        return t('errors.canvas.initError');
      case 'loadError':
        return t('errors.canvas.loadError');
      case 'interactiveError':
        return t('errors.canvas.interactiveError');
      case 'animationError':
        return t('errors.canvas.animationError');
      default:
        return t('errors.model.failedToLoad');
    }
  };

  const displayMessage = getErrorMessage();
  if (variant === 'compact') {
    return (
      <div className="flex items-center justify-center p-4 bg-base-300/30 rounded-lg">
        <div className="text-center">
          <div className="text-warning text-2xl mb-2">⚠</div>
          <p className="text-sm text-base-content/70">{displayMessage}</p>
          {onRetry && (
            <button 
              className="btn btn-xs btn-outline mt-2"
              onClick={onRetry}
            >
              {t('errors.general.retry')}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[300px] p-8 bg-base-300/20 rounded-xl border border-base-300/50">
      <div className="text-warning text-5xl mb-4">🔧</div>
      <h3 className="text-lg font-semibold mb-2">{t('errors.model.title')}</h3>
      <p className="text-base-content/70 text-center mb-4 max-w-md">
        {displayMessage}
      </p>
      <div className="flex gap-2">
        {onRetry && (
          <button 
            className="btn btn-primary btn-sm"
            onClick={onRetry}
          >
            {t('errors.model.retryLoad')}
          </button>
        )}
        <button 
          className="btn btn-ghost btn-sm"
          onClick={() => window.location.reload()}
        >
          {t('errors.general.reload')}
        </button>
      </div>
    </div>
  );
}