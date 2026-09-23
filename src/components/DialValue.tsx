import React, { useEffect, useRef, useState } from 'react';

interface DialValueProps {
  value: string | number | null | undefined;
  className?: string;
  style?: React.CSSProperties;
}

export const DialValue: React.FC<DialValueProps> = ({ value, className = '', style }) => {
  const [currVal, setCurrVal] = useState<string | number | null | undefined>(value);
  const [prevVal, setPrevVal] = useState<string | number | null | undefined>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      setCurrVal(value);
      return;
    }

    if (value !== currVal) {
      setPrevVal(currVal);
      setCurrVal(value);
      setIsAnimating(true);

      const timer = setTimeout(() => {
        setIsAnimating(false);
        setPrevVal(null);
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [value, currVal]);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        ...style
      }}
    >
      {/* Exiting previous value moving down */}
      {isAnimating && prevVal !== null && prevVal !== undefined && (
        <span
          className={`${className} dial-exit-down`}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          {prevVal}
        </span>
      )}

      {/* Entering current value coming from top to center */}
      <span
        className={`${className} ${isAnimating ? 'dial-enter-top' : ''}`}
        style={{
          position: 'relative',
          userSelect: 'none'
        }}
      >
        {currVal !== null && currVal !== undefined ? currVal : ''}
      </span>
    </div>
  );
};
