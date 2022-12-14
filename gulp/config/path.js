import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`;
const sourceFolder = `./source`;

export const path = {
  build: {
    image: `${buildFolder}/`,
    style: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/`,
  },
  source: {
    image: `${sourceFolder}/scss/*.{jpg,png}`,
    style: `${sourceFolder}/scss/style.scss`,
    html: `${sourceFolder}/**/*.html`,
    files: [
      `${sourceFolder}/**/*.*`,
      `!${sourceFolder}/**/*.html`,
      `!${sourceFolder}/scss/**/*.scss`,
      `!${sourceFolder}/image/*.{jpg,png}`,
    ],
  },
  watch: {
    image: `${sourceFolder}/scss/*.{jpg,png}`,
    style: `${sourceFolder}/**/*.scss`,
    html: `${sourceFolder}/**/*.html`,
    files: [
      `${sourceFolder}/**/*.*`,
      `!${sourceFolder}/**/*.html`,
      `!${sourceFolder}/**/*.scss`,
      `!${sourceFolder}/image/*.{jpg,png}`,
    ],
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  sourceFolder: sourceFolder,
  rootFolder: rootFolder,
}
