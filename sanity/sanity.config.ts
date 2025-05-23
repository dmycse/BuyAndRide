import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'
import { defaultDocumentNode } from './structure/defaultDocumentNode';


export default defineConfig({
  name: 'default',
  title: 'buyandride',

  projectId: 'anea6r0x',
  dataset: 'production',
  apiVersion: 'v2025-02-19',

  plugins: [
    structureTool({structure, defaultDocumentNode}), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
