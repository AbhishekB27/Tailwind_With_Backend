/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './public/**/*.html',
      './views/**/*.ejs', // Add the path to your .ejs files
    ],

theme: {
extend: {},
},
plugins: [
{
tailwindcss: {},
autoprefixer: {},
},
],
};
