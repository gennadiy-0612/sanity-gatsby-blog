export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '604f23c2294def06d236b361',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bibt278w',
                  apiId: '37f21222-a539-48b0-9e08-0932e4b0e5eb'
                },
                {
                  buildHookId: '604f23c299765a416f0fcf78',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rwbd6qry',
                  apiId: '00476db1-3a43-4e89-8b56-5677fa23309f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gennadiy-0612/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rwbd6qry.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
