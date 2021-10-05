var url = 'https://opentemplatehub.com';

var exposedRoutemap = [
  {
    path: '',
    children: [
      { path: '/about', children: null },
      { path: '/contact-us', children: null },
      { path: '/branding', children: null },
      { path: '/terms', children: null },
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
            path: '/user-interfaces',
            children: [
              { path: '/company-profile-ui-template', children: null },
              { path: '/web-ui-template', children: null },
              { path: '/mobile-ui-template', children: null },
            ],
          },
          {
            path: '/cli-generators',
            children: [
              { path: '/server-generator', children: null },
              { path: '/app-generator', children: null },
            ],
          },
          {
            path: '/premium',
            children: [{ path: '/orchestration-server', children: null }],
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

function getSitemap(path, routes) {
  var sitemapStr = '';
  routes.forEach((r) => {
    var nUrl = path + r.path;
    sitemapStr +=
      '<url><loc>' + nUrl + '</loc><lastmod>2021-09-30</lastmod></url>';
    if (r.children && r.children.length > 0) {
      sitemapStr += getSitemap(nUrl, r.children);
    }
  });
  return sitemapStr;
}

var sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
sitemap += getSitemap(url, exposedRoutemap);
sitemap += '</urlset>';

console.log(sitemap);
