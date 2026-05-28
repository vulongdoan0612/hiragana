import { useCallback, useRef } from 'react';
import { useSettingsStore } from '../store/useSettingsStore';

export const useSpeech = () => {
  const autoPlay = useSettingsStore((s) => s.autoPlayAudio);
  const utteranceRef = useRef(null);

  const speak = useCallback((text, { force = false } = {}) => {
    if (!('speechSynthesis' in window)) return;
    if (!force && !autoPlay) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ja-JP';
    utter.rate = 0.85;
    utter.pitch = 1.1;
    const voices = window.speechSynthesis.getVoices();
    const jpVoice = voices.find((v) => v.lang.startsWith('ja'));
    if (jpVoice) utter.voice = jpVoice;
    utteranceRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, [autoPlay]);

  const stop = useCallback(() => window.speechSynthesis?.cancel(), []);

  return { speak, stop };
};

export const useSound = () => {
  const enabled = useSettingsStore((s) => s.cardFlipSound);

  const play = useCallback((type) => {
    if (!enabled) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const sounds = {
      correct: { freq: 523.25, type: 'sine', duration: 0.15, gainVal: 0.3 },
      wrong:   { freq: 220,    type: 'sawtooth', duration: 0.2, gainVal: 0.2 },
      flip:    { freq: 800,    type: 'sine', duration: 0.05, gainVal: 0.15 },
      success: { freq: 659.25, type: 'sine', duration: 0.3, gainVal: 0.3 },
    };

    const s = sounds[type] || sounds.flip;
    osc.type = s.type;
    osc.frequency.setValueAtTime(s.freq, ctx.currentTime);
    gain.gain.setValueAtTime(s.gainVal, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + s.duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + s.duration);
  }, [enabled]);

  return { play };
};
