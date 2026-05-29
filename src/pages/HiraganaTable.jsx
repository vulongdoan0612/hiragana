import { useState } from 'react';
import { hiraganaData, GROUPS, BASIC_ROWS, ROW_LABELS } from '../data/hiragana';
import { useProgressStore } from '../store/useProgressStore';
import { useSpeech } from '../hooks/useAudio';

const VOWELS = ['a', 'i', 'u', 'e', 'o'];

const vowelCol = (romaji) => {
  const last = romaji.split('/')[0].slice(-1);
  return VOWELS.indexOf(last);
};

const rowConsonant = (row, cards) => {
  if (row === 'n-special') return 'n';
  const cons = cards[0]?.romaji.split('/')[0].slice(0, -1);
  return cons || '–';
};

const GROUPS_CONFIG = [
  { key: GROUPS.BASIC,       label: 'Cơ Bản' },
  { key: GROUPS.DAKUTEN,     label: 'Dakuten ゛' },
  { key: GROUPS.HANDAKUTEN,  label: 'Handakuten ゜' },
  { key: GROUPS.YOON,        label: 'Âm Ghép' },
];

function KanaCell({ card, isLearned, onSpeak }) {
  if (!card) return <div className="aspect-square" />;
  return (
    <button
      onClick={() => onSpeak(card.kana)}
      className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all active:scale-90 hover:scale-105 ${
        isLearned
          ? 'bg-violet-500/20 border border-violet-500/40'
          : 'bg-white/5 border border-white/10 hover:bg-white/10'
      }`}
    >
      <span className="text-xl leading-none text-white" style={{ fontFamily: 'serif' }}>
        {card.kana}
      </span>
      <span className="text-[9px] text-white/40 font-medium leading-none">
        {card.romaji.split('/')[0]}
      </span>
    </button>
  );
}

function GridTable({ rows, cards, learnedCards, onSpeak }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-6 gap-1.5 text-center mb-1">
        <div />
        {VOWELS.map((v) => (
          <div key={v} className="text-white/25 text-xs font-semibold uppercase tracking-wider">{v}</div>
        ))}
      </div>
      {rows.map((row) => {
        const rowCards = cards.filter((c) => c.row === row);
        const slots = Array(5).fill(null);
        rowCards.forEach((card) => {
          const col = vowelCol(card.romaji);
          if (col >= 0) slots[col] = card;
        });
        return (
          <div key={row} className="grid grid-cols-6 gap-1.5 items-center">
            <div className="text-center text-white/30 text-xs font-semibold">
              {rowConsonant(row, rowCards)}
            </div>
            {slots.map((card, i) => (
              <KanaCell
                key={i}
                card={card}
                isLearned={card ? learnedCards[card.id]?.seen > 0 : false}
                onSpeak={onSpeak}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function YoonTable({ rows, cards, learnedCards, onSpeak }) {
  return (
    <div className="flex flex-col gap-5">
      {rows.map((row) => {
        const rowCards = cards.filter((c) => c.row === row);
        return (
          <div key={row}>
            <p className="text-xs text-white/30 uppercase tracking-wider mb-2">
              {ROW_LABELS[row] ?? row}
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              {rowCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => onSpeak(card.kana)}
                  className={`rounded-xl py-3 flex flex-col items-center gap-1 transition-all active:scale-90 hover:scale-105 ${
                    learnedCards[card.id]?.seen > 0
                      ? 'bg-violet-500/20 border border-violet-500/40'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <span className="text-2xl leading-none text-white" style={{ fontFamily: 'serif' }}>
                    {card.kana}
                  </span>
                  <span className="text-[10px] text-white/40 font-medium">{card.romaji}</span>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function HiraganaTable() {
  const [activeGroup, setActiveGroup] = useState(GROUPS.BASIC);
  const learnedCards = useProgressStore((s) => s.learnedCards);
  const { speak } = useSpeech();

  const onSpeak = (kana) => speak(kana, { force: true });

  const cards = hiraganaData.filter((c) => c.group === activeGroup);
  const rows = [...new Set(cards.map((c) => c.row))];

  const totalSeen = hiraganaData.filter((c) => learnedCards[c.id]?.seen > 0).length;

  return (
    <div className="py-6 flex flex-col gap-5">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">📋 Bảng Chữ Hiragana</h1>
        <p className="text-white/40 text-sm mt-0.5">
          {hiraganaData.length} ký tự · Đã xem {totalSeen} · Nhấn để nghe
        </p>
      </div>

      {/* Group tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4" style={{ scrollbarWidth: 'none' }}>
        {GROUPS_CONFIG.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveGroup(key)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
              activeGroup === key
                ? 'bg-violet-500 text-white'
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Table content */}
      {activeGroup === GROUPS.YOON ? (
        <YoonTable rows={rows} cards={cards} learnedCards={learnedCards} onSpeak={onSpeak} />
      ) : activeGroup === GROUPS.BASIC ? (
        <GridTable rows={BASIC_ROWS} cards={cards} learnedCards={learnedCards} onSpeak={onSpeak} />
      ) : (
        <GridTable rows={rows} cards={cards} learnedCards={learnedCards} onSpeak={onSpeak} />
      )}

      {/* Legend */}
      <div className="flex items-center gap-4 text-xs text-white/30 pt-1">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-white/5 border border-white/10" />
          Chưa xem
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-violet-500/20 border border-violet-500/40" />
          Đã xem
        </div>
      </div>
    </div>
  );
}
