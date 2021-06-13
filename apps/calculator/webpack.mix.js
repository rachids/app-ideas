let mix = require('laravel-mix');


mix/* .ts('src/app.ts', 'dist') */
    .postCss("src/app.css", "dist", [
        require("tailwindcss"),
    ]);