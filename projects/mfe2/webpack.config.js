// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");

// const share = mf.share;

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, '../../tsconfig.json'),
//   ['auth-lib']  
// );

// module.exports = {
//   output: {
//     uniqueName: "mfe2",
//     publicPath: "auto"
//   },
//   optimization: {
//     runtimeChunk: false
//   },  
//   resolve: {
//     alias: {
//       ...sharedMappings.getAliases(),
//     }
//   },
//   experiments: {
//     outputModule: true
//   },  
//   plugins: [
//     new ModuleFederationPlugin({
//         library: { type: "module" },

//         // For remotes (please adjust)
//         name: "mfe2",
//         filename: "remoteEntry.js",  // 2-3K w/ Meta Data
//         exposes: {
//             './ResizeDrag': './projects/mfe2/src/app/components/dragresize/dragresize.module.ts',
            
//         },        
//         shared: share({
//           "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//           "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//           "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//           "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
  
//           // Uncomment for sharing lib of an Angular CLI or Nx workspace
//           ...sharedMappings.getDescriptors()
//         })
        
//     }),
//     // Uncomment for sharing lib of an Angular CLI or Nx workspace
//     sharedMappings.getPlugin(),
//   ],
// };
