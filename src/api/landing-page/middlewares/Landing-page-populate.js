'use strict';

/**
 * `Landing-page-populate` middleware
 */
const populate = {
      MetaData: {
      populate:{
      MetaImage:{
      populate: true, 
      fields: ['name', 'alternativeText', "url"],
      },
      }
      },
      blocks:{
      populate:{
      Link:{
      populate: true,
      },
      image:{
       fields: ['name', 'alternativeText', "url"],
      },
      card:{
      populate:{
      imagecard:{
        fields: ['name', 'alternativeText', "url"],
      },
      }
      },
      plan:{
      populate:["services", "pricingButton"],
       },
    form:{
    populate:["FormInput" , "FormButton"],
    },
    }
    },
  

};
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In Landing-page-populate middleware.');
    ctx.query={
      populate,
      ...ctx.query,
    }

    await next();
  };
};
