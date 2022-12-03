import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`;
const sourceFolder = `./source`;

export const path = {
  build: {
    style: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/`,
  },
  source: {
    style: `${sourceFolder}/scss/style.scss`,
    html: `${sourceFolder}/**/*.html`,
    files: [
      `${sourceFolder}/*.ico`,
      `${sourceFolder}/*.webmanifest`,
      `${sourceFolder}/js/*`,
      `${sourceFolder}/admin/**`,
      `${sourceFolder}/fonts/**`
    ],
  },
  watch: {
    style: `${sourceFolder}/**/*.scss`,
    html: `${sourceFolder}/**/*.html`,
    files: [
      `${sourceFolder}/*.ico`,
      `${sourceFolder}/*.webmanifest`,
      `${sourceFolder}/js/*`,
      `${sourceFolder}/admin/**`,
      `${sourceFolder}/fonts/**`
    ],
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  sourceFolder: sourceFolder,
  rootFolder: rootFolder,
  ftp: ''
}
