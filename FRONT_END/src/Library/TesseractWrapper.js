if (typeof window !== 'undefined') {
    const _instance = window ? require("tesseract.js/dist/tesseract") : require('tesseract.js');
    exports.Tesseract = _instance;
  }