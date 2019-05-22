import { GluegunToolbox } from 'gluegun';
    
module.exports = {
  name: 'generate:component',
  description: 'Creating React component (Typescript)',
  alias: ['gc'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { success, error },
    } = toolbox;

    const name = parameters.first;
    const target = parameters.second;
    const folder = target ? `${target}/${name}` : `src/components/${name}`;

    if (!name) {
      error(`Ops, enter the name of the component.`);
      return;
    }

    await generate({
      template: 'component.ts.ejs',
      target: `${folder}/index.tsx`,
      props: { name },
    });

    success(`\n Ohoo! Component ${name} successfully created in ${folder}/ 🔥 🔥 🔥 \n`);
  },
}
