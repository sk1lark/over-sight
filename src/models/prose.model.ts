export interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface ProseFragment {
  id: number;
  text: string;
  initialDelay: number;
  typingSpeed: number;
  perspective?: 'first-person' | 'third-person';
  className?: string;
  clearPrevious?: boolean;
}
