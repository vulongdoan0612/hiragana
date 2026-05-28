export const sortByDifficulty = (cards, learnedCards) => {
  return [...cards].sort((a, b) => {
    const da = learnedCards[a.id]?.difficulty ?? 0;
    const db = learnedCards[b.id]?.difficulty ?? 0;
    const la = learnedCards[a.id]?.lastSeen ?? 0;
    const lb = learnedCards[b.id]?.lastSeen ?? 0;
    if (da !== db) return db - da;
    return la - lb;
  });
};

export const getQuizChoices = (correct, allCards, count = 4) => {
  const others = allCards.filter((c) => c.id !== correct.id);
  const shuffled = [...others].sort(() => Math.random() - 0.5).slice(0, count - 1);
  const choices = [...shuffled, correct].sort(() => Math.random() - 0.5);
  return choices;
};

export const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
