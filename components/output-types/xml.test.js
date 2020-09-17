const XmlOutput = require('@wpmedia/feeds-xml-output')

it('Generate xml content', () => {
  const output = {children: [{title: 'feed title'}]}
  const xml = XmlOutput.XmlOutput(output)
  expect(xml).toBe('<?xml version="1.0" encoding="UTF-8"?><title>feed title</title>')
})
