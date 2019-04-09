import generatePathMap from '../../src/nextConfig';
// Mocks
import { MOCK_TOC, MOCK_PATH_MAP } from '../mocks';

describe('nextConfig Generator', () => {
  test('generatePathMap returns a function', () => {
    const pathMapFn = generatePathMap(MOCK_TOC);
    expect(typeof pathMapFn).toBe('function');
  });

  test('generatePathMap Creates a correct path map', async () => {
    const pathMapFn= generatePathMap(MOCK_TOC);
    const pathMap = await pathMapFn();
    expect(pathMap).toEqual(MOCK_PATH_MAP);
  });
});