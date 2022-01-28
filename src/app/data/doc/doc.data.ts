import { Doc } from '../../model/doc/doc.model';
import { URLS } from '../navigation/navigation.data';
import { PRODUCT_LINES } from '../product/product.data';

const README = '/README.md';

export const DOCS: Doc[] = [];

for (const productLine of PRODUCT_LINES) {
  if (productLine.key !== 'premium') {
    for (const product of productLine.products) {
      if (product.url === URLS.maintenance) {
        continue;
      }
      DOCS.push({
        key: product.key,
        url: product.url === URLS.maintenance ? URLS.maintenance : productLine.key + '/' + product.key + README,
        tag: productLine.key,
        imgUri: product.logo,
        title: product.name,
        excerpt: product.description,
        date: '',
      } as Doc);
    }
  }
}
