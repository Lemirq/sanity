import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structureTool} from 'sanity/structure'
export default defineConfig({
  name: 'default',
  title: 'react-website',

  projectId: 'zvfxtzrz',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) => {
        return S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Visible Projects')
              .child(
                S.document()
                  .schemaType('visible-projects')
                  .documentId('1c653656-be5f-4e44-b7e6-2b250ffaa339'),
              ),
            S.listItem()
              .title('About Section')
              .child(S.document().schemaType('about').documentId('about')),
            ...S.documentTypeListItems().filter(
              (listItem) => !['about', 'visible-projects'].includes(listItem.getId() || ''),
            ),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
