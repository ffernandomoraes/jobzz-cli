import { GluegunToolbox } from 'gluegun';
    
module.exports = {
  name: 'generate:page',
  description: 'Creating pages in React (Typescript)',
  alias: ['gp'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { success, error },
    } = toolbox;

    const name = parameters.first;
    const target = parameters.second;
    const folder = target ? `${target}/${name}` : `src/pages/${name}`;

    if (!name) {
      error(`Ops, enter the name of the page.`);
      return;
    }

    await generate({
      template: 'page.ts.ejs',
      target: `${folder}/index.tsx`,
      props: { name },
    });

    await generate({
      template: 'styles.ts.ejs',
      target: `${folder}/styles.ts`,
      props: { name },
    });

    success(`\n Ohoo! Page ${name} and Styles successfully created in ${folder}/ 🔥 🔥 🔥 \n`);
  },
}
