import { CONTENT_BASE } from 'fusion:environment';

export default {
  resolve(key) {
    return `${ CONTENT_BASE }/site/v3/navigation/${key["arc-site"]}/?_id=${key.id ? key.id : '/'}&hierarchy=\
${ key.hierarchy ? key.hierarchy : 'default'}`
  },
  schemaName: 'site-navigation',
  params: {id: 'text', hierarchy: 'text'}
}