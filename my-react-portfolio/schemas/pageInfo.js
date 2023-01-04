import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'string'
    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{title: 'Social media', type: 'social'}]
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file'
    }
  ],
})
