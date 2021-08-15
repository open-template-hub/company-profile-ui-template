import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CATEGORIES, CATEGORIES_MAP } from '../../util/constant';

@Injectable( {
  providedIn: 'root'
} )
export class CategoryService {
  search( q: string ) {
    const categories = [];
    q = '^' + q;
    const re = new RegExp( q, 'gi' );
    for ( const category of CATEGORIES ) {
      if ( re.test( category.name ) && !categories.includes( { category } ) ) {
        categories.push( { category } );
      }
      for ( const subCategory of category.payload?.subCategories ) {
        if ( subCategory.name.match( re ) && !categories.includes( { category, subCategory } ) ) {
          categories.push( { category, subCategory } );
        }
        for ( const leafCategory of subCategory.leafCategories ) {
          if ( leafCategory?.name.match( re ) && !categories.includes( { category, subCategory, leafCategory } ) ) {
            categories.push( { category, subCategory, leafCategory } );
          }
        }
      }
    }
    return of( categories );
  }

  getCategoryIdFromCategories( categories ) {
    const idList = [];
    for ( const category of categories ) {
      const payload: any = {};

      if ( category.category ) {
        payload.category = category.category.id;
      }

      if ( category.subCategory ) {
        payload.subCategory = category.subCategory.id;
      }

      if ( category.leafCategory ) {
        payload.leafCategory = category.leafCategory.id;
      }

      idList.push( payload );
    }
    return of( idList );
  }

  getAllCategories() {
    const categories = [];
    for ( const category of CATEGORIES ) {
      if ( !categories.includes( category ) ) {
        categories.push( { name: category.name, id: category.id } );
      }
    }
    return of( categories );
  }

  getSubCategories( categoryId: number ) {
    const categories = [];

    CATEGORIES_MAP.get( categoryId ).subCategories.forEach( ( category: any, id: number ) => {
      categories.push( { name: category.name, id } );
    } )

    return of( categories );
  }

  getLeafCategories( categoryId: number, subCategoryId: number ) {
    const categories = [];

    CATEGORIES_MAP.get( categoryId ).subCategories.get( subCategoryId ).leafCategories.forEach( ( category: any, id: number ) => {
      categories.push( { name: category.name, id } );
    } )

    return of( categories );
  }

  getCategoriesFromId( categories: any ): any {
    const result = [];
    if ( categories )
      for ( const category of categories ) {
        result.push( this.getCategoryFromId( category.category, category.subCategory, category.leafCategory ) );
      }
    return of( result );
  }

  getCategoryFromId( categoryId, subCategoryId, leafCategoryId ): any {
    const categories: any = {};

    categories.category = {
      name: CATEGORIES_MAP.get( categoryId )?.name,
      id: categoryId
    };

    if ( subCategoryId ) {
      categories.subCategory = {
        name: CATEGORIES_MAP.get( categoryId ).subCategories.get( subCategoryId )?.name,
        id: subCategoryId
      };
    }

    if ( leafCategoryId ) {
      categories.leafCategory = {
        name: CATEGORIES_MAP.get( categoryId ).subCategories.get( subCategoryId ).leafCategories?.get( leafCategoryId ).name,
        id: leafCategoryId
      };
    }

    return categories;
  }
}
