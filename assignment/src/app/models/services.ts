export interface Question{
    AnswerId?: string;
    Answer?: Array<Answers>;
    Id?: string;
    Marks?: number;
    Text?: string;
  }
  
export interface Answers{
    Id?: string;
    text?: string;
  }