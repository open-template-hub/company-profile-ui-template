const url = 'https://opentemplatehub.com';

const exposedRouteMap = [
  {
    path: '',
    children: [
      { path: '/about', children: null },
      { path: '/contact-us', children: null },
      { path: '/branding', children: null },
      { path: '/blog', children: null },
      { path: '/docs', children: null },
      { path: '/partners', children: null },
      { path: '/customers', children: null },
      { path: '/terms', children: null },
      { path: '/sitemap', children: null },
      {
        path: '/product',
        children: [
          {
            path: '/servers',
            children: [
              { path: '/auth-server-template', children: null },
              { path: '/payment-server-template', children: null },
              { path: '/file-storage-server-template', children: null },
              { path: '/analytics-server-template', children: null },
              { path: '/business-logic-server-template', children: null },
            ],
          },
          {
            path: '/user-interface',
            children: [
              { path: '/company-profile-ui-template', children: null },
              { path: '/web-ui-template', children: null },
              { path: '/mobile-ui-template', children: null },
            ],
          },
          {
            path: '/generator',
            children: [
              { path: '/server-generator', children: null },
              { path: '/app-generator', children: null },
            ],
          },
          {
            path: '/premium',
            children: [ { path: '/orchestration-server', children: null } ],
          },
          {
            path: '/services',
            children: [
              { path: '/software-consultancy', children: null },
              { path: '/software-integration', children: null },
              { path: '/quality-assurance', children: null },
            ],
          },
        ],
      },
    ],
  },
];

const today = new Date().toISOString().split( 'T' )[ 0 ];

function getSitemap( path, routes ) {
  let sitemapStr = '';
  routes.forEach( ( r ) => {
    const nUrl = path + r.path;
    sitemapStr +=
        '<url><loc>' + nUrl + '</loc><lastmod>' + today + '</lastmod></url>';
    if ( r.children && r.children.length > 0 ) {
      sitemapStr += getSitemap( nUrl, r.children );
    }
  } );
  return sitemapStr;
}

let sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
sitemap += getSitemap( url, exposedRouteMap );
sitemap += '</urlset>';

console.log( sitemap );
