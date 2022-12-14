import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {title: 'Skill', type: 'skill'}
      ]
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url'
    },
  ],
})
