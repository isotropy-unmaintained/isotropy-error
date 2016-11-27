export default class IsotropyError extends Error {

  constructor(code, message) {
    const url = `https://www.isotropy.org/errors/${code}`;
    super(`${code}; ${message} See ${url} for more information.`);
    this.code = code;
    this.url = url;
  }

}
