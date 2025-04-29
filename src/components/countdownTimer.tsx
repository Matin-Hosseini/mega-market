'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CountdownTimerProps {
  targetTime: Date | string;
  onComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetTime,
  onComplete,
}) => {
  const target =
    typeof targetTime === 'string' ? new Date(targetTime) : targetTime;
  const frameRef = useRef<number | null>(null);
  const prevDisplayedTimeRef = useRef<number>(-1);
  const [displayTime, setDisplayTime] = useState<number>(() =>
    Math.max(Math.floor((target.getTime() - Date.now()) / 1000), 0),
  );

  const update = () => {
    const now = Date.now();
    const secondsLeft = Math.max(
      Math.floor((target.getTime() - now) / 1000),
      0,
    );

    if (secondsLeft !== prevDisplayedTimeRef.current) {
      prevDisplayedTimeRef.current = secondsLeft;
      setDisplayTime(secondsLeft);
    }

    if (secondsLeft > 0) {
      frameRef.current = requestAnimationFrame(update);
    } else {
      if (onComplete) onComplete();
    }
  };

  useEffect(() => {
    frameRef.current = requestAnimationFrame(update);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [targetTime]);

  // Optional: format into hh:mm:ss
  const format = (totalSeconds: number): string => {
    const h = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return <div>{format(displayTime)}</div>;
};

export default CountdownTimer;
