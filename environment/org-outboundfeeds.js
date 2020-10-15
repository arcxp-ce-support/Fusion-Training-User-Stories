module.exports = {
  CONTENT_BASE: 'https://api.{ORG}.arcpublishing.com',
  // VIDEO_BASE: 'https://video-api.{ORG}.arcpublishing.com', // pre Dec 2018
  VIDEO_BASE: 'http://{ORG}-prod.video-api.arcpublishing.com', //post Dec 2018
  resizerKey: '%{ ENCRYPTED RESIZER KEY GOES HERE }',
  BLOCK_DIST_TAG: 'stable',
}
