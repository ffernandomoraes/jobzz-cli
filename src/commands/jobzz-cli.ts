import { GluegunToolbox } from 'gluegun';
    
module.exports = {
  name: 'jobzz-cli',
  run: async (toolbox: GluegunToolbox) => {
   const {
      print: { info },
      filesystem
   } = toolbox;

   const pkg = await filesystem.read('package.json', 'json');

   info(`\n jobzz-cli v${pkg.version}. Thank you for using ❤️\n`);
  },
}
