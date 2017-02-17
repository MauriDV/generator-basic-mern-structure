var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args,opts){
    super(args,opts);
    this.option('babel');

    this.argument("appname",{type:String,required:true});

    this.log(this.options.appname);
  }
  writing(){
    this.fs.copyTpl(
      this.templatePath('www'),
      this.destinationPath(this.options.appname+'/bin/www')
    );
    this.fs.copyTpl(
      this.templatePath('client/index.jade'),
      this.destinationPath(this.options.appname+'/client/index.jade')
    );
    this.fs.copyTpl(
      this.templatePath('client/main.js'),
      this.destinationPath(this.options.appname+'/client/main.js')
    );
    this.fs.copyTpl(
      this.templatePath('client/components/Hola.jsx'),
      this.destinationPath(this.options.appname+'/client/components/Hola.jsx')
    );
    this.fs.copyTpl(
      this.templatePath('server/server.js'),
      this.destinationPath(this.options.appname+'/server/server.js')
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath(this.options.appname+'/webpack.config.js')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(this.options.appname+'/package.json')
    );
  }

  end(){
    var new_dir = process.cwd()+'/'+this.options.appname;
    process.chdir(new_dir);
    this.installDependencies({bower:false,npm:true});
  }

};
