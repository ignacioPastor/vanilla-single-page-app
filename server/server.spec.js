const { getFileNameFromUrl } = require('./utils');

describe('Test getFileNameFromUrl function', () => {
  it('Retrieve normal route file', () => {
    const nameFile = getFileNameFromUrl('/js/route.js');
    expect(nameFile).toBe('route.js');
  });

  it('Just file', () => {
    const nameFile = getFileNameFromUrl('route.js');
    expect(nameFile).toBe('route.js');
  });

  it('Dash file', () => {
    const nameFile = getFileNameFromUrl('/route.js');
    expect(nameFile).toBe('route.js');
  });

  it('Empty route', () => {
    const nameFile = getFileNameFromUrl('/');
    expect(nameFile).toBe('');
  });

  it('Empty string', () => {
    const nameFile = getFileNameFromUrl('');
    expect(nameFile).toBe('');
  });

  it('Null', () => {
    const nameFile = getFileNameFromUrl(null);
    expect(nameFile).toBe('');
  });
});
