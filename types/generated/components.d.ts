import type { Schema, Struct } from '@strapi/strapi';

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    description: '';
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    alt_de: Schema.Attribute.Text & Schema.Attribute.Required;
    alt_en: Schema.Attribute.Text & Schema.Attribute.Required;
    alt_pl: Schema.Attribute.Text & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.image': ImageImage;
    }
  }
}
