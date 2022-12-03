export const server = (done) => {
  app.plugins.browser.init({
    server: {
      baseDir: `${app.path.build.files}`
    },
    notify: false,
    ui: false,
    port: 3000,
  });
  done();
}
