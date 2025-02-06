'use client';

import React, {
  useEffect,
  useState,
  // useEffect,
} from 'react';

import {
  Log,
} from './log';
import {
  Button,
} from './button';
import {
  genLines,
} from '@/lib';

export function Generator() {
  // waves to be process
  const [
    waves,
    setWaves,
  ] = useState<string[][]>([]);

  // total lines
  const lines = waves.flat().join('').match(/\n/g);

  // total chars
  const chars = waves.flat().join('');

  // console.log(waves);
  // console.log(lines ? lines.length : 0);
  // console.log(chars.length);

  // add new wave
  const addWave = () => {
    const wave: string[] = [];

    const total = 10;
    for (let i = 0; i < total; i++) {
      wave.push(genLines());
    }

    setWaves((oldValue) => {
      const stacks = [
        ...oldValue,
        wave,
      ];

      return stacks;
    })
  };

  // text flow
  const [
    flow,
    setFlow,
  ] = useState('');
  // wait time (ms)
  const [
    wait,
    setWait,
  ] = useState(0);
  // tick count
  const [
    tick,
    setTick,
  ] = useState(0);

  // tick time (ms)
  const tickTime = 200;
  // tick length
  const tickLength = 4;
  // split parts
  const parts = 100;
  // timeout time (ms)
  const timeout = 10 * 1000;

  // tick timer
  useEffect(() => {
    if (wait >= timeout) {
      return;
    }

    const timer = setInterval(() => {
      if (flow.length < chars.length) {
        const rest = chars.length - flow.length;

        const length = rest > (tickLength * parts)
            ? Math.ceil(rest / parts)
            : tickLength;
        // console.log(length);

        setFlow((oldValue) => oldValue.concat(chars.substring(oldValue.length, oldValue.length + length)));

        setTick((oldValue) => oldValue + 1);

        // reset if not end
        setWait(0);
      } else {
        // wait until timeout
        setWait((oldValue) => oldValue + tickTime);
      }
    }, tickTime);

    return () => clearInterval(timer);
  }, [
    wait,
    timeout,
    chars,
    flow,
    tickTime,
  ]);

  return (
    <div>
      <div className="flex gap-4 mt-5">
        <Button>运行</Button>
        <Button
            onClick={ () => addWave() }>追加</Button>
        <Button>重置</Button>
      </div>
      <ul className="font-mono">
        <li>waves: { waves.length || 0 }</li>
        <li>lines: { lines ? lines.length : 0 }</li>
        <li>chars: { chars ? chars.length : 0 }</li>
        <li>flows: { flow.length }</li>
        <li>ticks: { tick }</li>
        <li>timeout(ms): { wait }/{ timeout }</li>
      </ul>
      <Log text={ flow } />
    </div>
  );
}
