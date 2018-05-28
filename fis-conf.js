fis.hook('relative');

fis.set('project.ignore', [
  'output/**',
  'dist/**',
  'node_modules/**',
  '.git/**',
  'package.json',
  'package-lock.json',
  'jsconfig.json',
  '.gitignore',
  'dev.bat',
  'fis-conf.js',
  'README.md',
  'src/{common,widgets}/**',
]);

fis.match('/src/(**)', {
  release: '/$1'
});

fis.match('*.{scss,css}', {
  parser: fis.plugin('node-sass'),
  rExt: '.css'
});

fis.match('*.{ts,js}', {
  parser: fis.plugin('typescript'),
  rExt: '.js'
});

fis.media('prod')
  // .match('**.{js, ts}', {
  //   optimizer: fis.plugin('uglify-js')
  // })
  // .match('**.{css, scss}', {
  //   optimizer: fis.plugin('clean-css')
  // })
  .match('*.png', {
    optimizer: fis.plugin('png-compressor'),
  })
  // .match('*.js', {
  //   packTo: 'js/script.js'
  // })
  .match('**', {
    relative: true
  });