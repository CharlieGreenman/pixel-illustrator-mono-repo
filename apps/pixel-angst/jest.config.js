module.exports = {
  name: 'pixel-angst',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pixel-angst/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
