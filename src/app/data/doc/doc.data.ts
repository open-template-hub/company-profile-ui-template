import { Doc } from '../../model/doc/doc.model';
import { PRODUCT_LINES } from '../product/product.data';

const README = '/README.md';

export const DOCS: Doc[] = [];

for (const productLine of PRODUCT_LINES) {
  if (productLine.key !== 'premium') {
    for (const product of productLine.products) {
      DOCS.push({
        key: product.key,
        url: productLine.key + '/' + product.key + README,
        tag: productLine.key,
        imgUri: product.logo,
        title: product.name,
        excerpt: product.description,
        date: '',
      } as Doc);
    }
  }
}
