export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e40cbc74f520ed436e7fd27',
                  title: 'Sanity Studio',
                  name: 'landing-pages-baseline-studio',
                  apiId: '7d18f401-dfea-4055-a8fc-8ec53db8c212'
                },
                {
                  buildHookId: '5e40cbc76e99cd2a28725c98',
                  title: 'Landing pages Website',
                  name: 'landing-pages-baseline',
                  apiId: '37b72b03-3d86-43ff-9b56-68d0a8ff6e5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SpacemanPete/landing-pages-baseline',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landing-pages-baseline.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
