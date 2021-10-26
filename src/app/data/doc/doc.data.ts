import { Doc } from '../../model/doc/doc.model';
import { PRODUCT_LINES } from '../product/product.data';

const README = '/README.md';

export const DOCS: Doc[] = [];

for ( const productLine of PRODUCT_LINES ) {
  if ( productLine.key !== 'premium' ) {
    for ( const product of productLine.products ) {
      DOCS.push( { url: productLine.key + '/' + product.key + README } );
    }
  }
}
