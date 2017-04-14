/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }

  afterInstall(/* options */) {
    return this.addBowerPackageToProject('drag-drop-polyfill', '2.0.0-beta.3');
  }
};
