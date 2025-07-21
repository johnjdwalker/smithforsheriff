
import React, { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
  value: number;
  duration?: number; // ms
  decimals?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  value,
  duration = 1200,
  decimals = 0,
  className = "",
  prefix = "",
  suffix = "",
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startValue = useRef(0);

  useEffect(() => {
    let start: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = startValue.current + (value - startValue.current) * progress;
      setDisplayValue(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
        startValue.current = value;
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

export default CountUpNumber;

