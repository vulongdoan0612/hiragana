import { useSettingsStore } from '../store/useSettingsStore';
import {
  hiraganaData,
  groupLabels as hiraganaGroupLabels,
  ROW_LABELS as hiraganaRowLabels,
  BASIC_ROWS as hiraganaBasicRows,
  characterOfTheDay as hiraganaCharacterOfTheDay,
  GROUPS,
} from '../data/hiragana';
import {
  katakanaData,
  groupLabels as katakanaGroupLabels,
  ROW_LABELS as katakanaRowLabels,
  BASIC_ROWS as katakanaBasicRows,
  characterOfTheDay as katakanaCharacterOfTheDay,
} from '../data/katakana';

export function useCourseData() {
  const course = useSettingsStore((s) => s.selectedCourse);
  const isKatakana = course === 'katakana';

  return {
    course,
    isKatakana,
    courseData: isKatakana ? katakanaData : hiraganaData,
    groupLabels: isKatakana ? katakanaGroupLabels : hiraganaGroupLabels,
    ROW_LABELS: isKatakana ? katakanaRowLabels : hiraganaRowLabels,
    BASIC_ROWS: isKatakana ? katakanaBasicRows : hiraganaBasicRows,
    characterOfTheDay: isKatakana ? katakanaCharacterOfTheDay : hiraganaCharacterOfTheDay,
    GROUPS,
    courseName: isKatakana ? 'Katakana' : 'Hiragana',
    courseEmoji: isKatakana ? '🔷' : '🌸',
  };
}
