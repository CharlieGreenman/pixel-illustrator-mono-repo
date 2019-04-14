module.exports = {
  name: 'pixel-angst-common-ui',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/pixel-angst/common/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
