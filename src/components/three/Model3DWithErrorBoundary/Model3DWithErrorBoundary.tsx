import React, { Component, type ReactNode } from 'react';
import { Model3D } from '../Model3D/Model3D';
import { Model3DFallback } from '../Model3DFallback/Model3DFallback';
import ModelError from '../../common/ModelError/ModelError';

interface Props {
  modelPath: string;
  scale?: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  lang?: 'en' | 'es';
}

interface State {
  hasError: boolean;
  error?: Error;
  retryCount: number;
}

export default class Model3DWithErrorBoundary extends Component<Props, State> {
  private retryTimer: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false, 
      retryCount: 0 
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Model3D Error:', error, errorInfo);
    
    // Auto-retry logic for loading failures
    if (this.state.retryCount < 2) {
      this.retryTimer = setTimeout(() => {
        this.setState({ 
          hasError: false, 
          error: undefined,
          retryCount: this.state.retryCount + 1 
        });
      }, 1000 + this.state.retryCount * 500);
    }
  }

  override componentWillUnmount() {
    if (this.retryTimer) {
      clearTimeout(this.retryTimer);
    }
  }

  handleManualRetry = () => {
    this.setState({ 
      hasError: false, 
      error: undefined, 
      retryCount: 0 
    });
  }

  override render() {
    if (this.state.hasError) {
      // Show fallback during auto-retry
      if (this.state.retryCount < 2) {
        return (
          <Model3DFallback 
            scale={this.props.scale}
            position={this.props.position}
          />
        );
      }

      // Show error after max retries
      return (
        <group>
          <Model3DFallback 
            scale={this.props.scale}
            position={this.props.position}
          />
          {/* Invisible error handler for potential 2D overlay */}
          <mesh visible={false}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshBasicMaterial transparent opacity={0} />
          </mesh>
        </group>
      );
    }

    return (
      <Model3D 
        modelPath={this.props.modelPath}
        scale={this.props.scale}
        position={this.props.position}
        rotation={this.props.rotation}
        lang={this.props.lang}
      />
    );
  }
}