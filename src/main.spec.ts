import { anagram, beeramid, palyndrome, pyramid, alternateSort } from '@/main';

describe('Anagram', () => {
  it('should return true', () => {
    expect(anagram('study', 'dusty')).toStrictEqual(true);
  });

  it('should return false because of length', () => {
    expect(anagram('example', 'false')).toStrictEqual(false);
  });

  it('should return false because of letters', () => {
    expect(anagram('example', 'bananas')).toStrictEqual(false);
  });

  it('fixed test', () => {
    expect(anagram('ABCD', 'DABC')).toStrictEqual(true);
    expect(anagram('AABB', 'BBAA')).toStrictEqual(true);
    expect(anagram('AAAB', 'AAB')).toStrictEqual(false);
    expect(anagram('AAAB', 'AABB')).toStrictEqual(false);
    expect(anagram('AAAB', 'AABC')).toStrictEqual(false);
    expect(anagram('ACBA', 'ABBC')).toStrictEqual(false);
    expect(anagram('A', 'B')).toStrictEqual(false);
  });
});

describe('Palyndrome', () => {
  it('should return true', () => {
    expect(palyndrome('natan')).toStrictEqual(true);
  });

  it('should return false', () => {
    expect(palyndrome('example')).toStrictEqual(false);
  });
});

describe('Pyramid', () => {
  it('should return a pyramid', () => {
    expect(pyramid(3)).toStrictEqual('\n  #  \n ### \n#####\n');
  });
});

describe('Beeramid', () => {
  it('Fixed tests', () => {
    expect(beeramid(9, 2)).toStrictEqual(1);
    expect(beeramid(10, 2)).toStrictEqual(2);
    expect(beeramid(11, 2)).toStrictEqual(2);
    expect(beeramid(21, 1.5)).toStrictEqual(3);
    expect(beeramid(454, 5)).toStrictEqual(5);
    expect(beeramid(455, 5)).toStrictEqual(6);
    expect(beeramid(4, 4)).toStrictEqual(1);
    expect(beeramid(3, 4)).toStrictEqual(0);
    expect(beeramid(0, 4)).toStrictEqual(0);
    expect(beeramid(-1, 4)).toStrictEqual(0);
    expect(beeramid(-70, 3.7)).toStrictEqual(0);
  });
});

describe('Alternate sort', () => {
  it('Should be different', () => {
    const randoms = Array.from({ length: 100 }, () =>
      Array.from({ length: Math.random() * 10 }, () =>
        Math.floor(Math.random() * 10),
      ),
    );

    for (const array of randoms) {
      const returned = alternateSort(array);

      expect(returned.length).toEqual(array.length);
      expect(returned).toBeInstanceOf(Array);
    }
  });
});
