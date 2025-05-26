export interface MajorCredits{
  brand: 'major';
  credits: number;
}

export interface MinorCredits{
  brand: 'minor';
  credits: number;
}

function sumMajorCredits(subject1: number, subject2: number) : MajorCredits {
  const credits = subject1 + subject2;
  return {
    brand: 'major',
    credits: credits,
  }

}

function sumMinorCredits(subject1: number, subject2: number) : MinorCredits {
  const credits = subject1 + subject2;
  return {
    brand: 'minor',
    credits: credits,
  }
}
