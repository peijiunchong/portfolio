import {defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'courseTitle',
      title: 'CourseTitle',
      type: 'string'
    },
    {
      name: 'schoolImage',
      title: 'SchoolImage',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'school',
      title: 'School',
      type: 'string'
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date'
    },
    {
        name: 'dateEnded',
        title: 'dateEnded',
        type: 'date'
    },
    {
      name: 'isCurrentlyStudyingHere',
      title: 'IsCurrentlyStudyingHere',
      type: 'boolean'
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{title: 'Points', type: 'string'}]
    },
  ],
})
