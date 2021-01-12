const ocr = require("tesseract.js");

let LOGGER = { logger: (m) => console.log(m) };
let LANG = "spa";
let read_image = () => {
    let [image] = process.argv.slice(2);
    console.log(image);
    ocr.recognize(image, LANG, LOGGER).then(({ data: { text } }) => {
        console.log(text);
    });
};

read_image();