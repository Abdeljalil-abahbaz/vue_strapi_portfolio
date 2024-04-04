import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsContact extends Schema.Component {
  collectionName: 'components_components_contacts';
  info: {
    displayName: 'contact';
    icon: 'phone';
    description: '';
  };
  attributes: {
    phone: Attribute.String;
    email: Attribute.Email;
  };
}

export interface ComponentsHobby extends Schema.Component {
  collectionName: 'components_components_hobbies';
  info: {
    displayName: 'Hobby';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface ComponentsLanguage extends Schema.Component {
  collectionName: 'components_components_languages';
  info: {
    displayName: 'language';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    percent: Attribute.Integer;
    color: Attribute.String;
  };
}

export interface ComponentsLinks extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Links';
    icon: 'link';
    description: '';
  };
  attributes: {
    linkedin: Attribute.RichText;
    facebook: Attribute.RichText;
    cv: Attribute.RichText;
    github: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.contact': ComponentsContact;
      'components.hobby': ComponentsHobby;
      'components.language': ComponentsLanguage;
      'components.links': ComponentsLinks;
    }
  }
}
