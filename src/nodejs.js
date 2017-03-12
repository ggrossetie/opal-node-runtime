/* Generated by Opal 0.11.0.dev */
Opal.modules["nodejs/kernel"] = function(Opal) {
  var TMP_$$$eq_3, TMP_$$_4, self = Opal.top, $scope = Opal, $scopes = [Opal], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$to_str', '$new', '$to_s']);
  
  Opal.exit = process.exit;
  (function($base, $visibility_scopes) {
    var $Kernel, self = $Kernel = $module($base, 'Kernel');

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope), TMP_Kernel_caller_1, TMP_Kernel_node_require_2;

    
    Opal.cdecl($scope, 'NODE_REQUIRE', require);
    Opal.defn(self, '$caller', TMP_Kernel_caller_1 = function $$caller() {
      var self = this;

      
      var stack;
      try {
        var err = Error("my error");
        throw err;
      } catch(e) {
        stack = e.stack;
      }
      return stack.$split("\n").slice(3);
    
    }, TMP_Kernel_caller_1.$$arity = 0);
    Opal.defn(self, '$node_require', TMP_Kernel_node_require_2 = function $$node_require(path) {
      var self = this;

      return Opal.const_get($scopes, 'NODE_REQUIRE', true, true)(path.$to_str())
    }, TMP_Kernel_node_require_2.$$arity = 1);
  })($scope.base, $scopes);
  Opal.cdecl($scope, 'ARGV', process.argv.slice(2));
  Opal.cdecl($scope, 'ENV', Opal.const_get($scopes, 'Object', true, true).$new());
  Opal.defs(Opal.const_get($scopes, 'ENV', true, true), '$[]=', TMP_$$$eq_3 = function(name, value) {
    var self = this;

    return process.env[name.$to_s()] = value.$to_s()
  }, TMP_$$$eq_3.$$arity = 2);
  return Opal.defs(Opal.const_get($scopes, 'ENV', true, true), '$[]', TMP_$$_4 = function(name) {
    var self = this;

    return process.env[name] || nil
  }, TMP_$$_4.$$arity = 1);
};

/* Generated by Opal 0.11.0.dev */
Opal.modules["nodejs/file"] = function(Opal) {
  var self = Opal.top, $scope = Opal, $scopes = [Opal], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$raise', '$warn', '$include', '$node_require', '$size', '$respond_to?', '$path', '$join', '$call', '$exist?', '$new', '$close', '$match', '$gsub', '$attr_reader']);
  
  
  var warnings = {};
  function handle_unsupported_feature(message) {
    switch (Opal.config.unsupported_features_severity) {
    case 'error':
      Opal.const_get($scopes, 'Kernel', true, true).$raise(Opal.const_get($scopes, 'NotImplementedError', true, true), message)
      break;
    case 'warning':
      warn(message)
      break;
    default: // ignore
      // noop
    }
  }
  function warn(string) {
    if (warnings[string]) {
      return;
    }
    warnings[string] = true;
    self.$warn(string);
  }
  function executeIOAction(action) {
    try {
      return action();
    } catch (error) {
      if (error.code === 'EACCES' ||
          error.code === 'EISDIR' ||
          error.code === 'EMFILE' ||
          error.code === 'ENOENT' ||
          error.code === 'EPERM') {
        throw Opal.IOError.$new(error.message)
      }
      throw error;
    }
  }
;
  (function($base, $super, $visibility_scopes) {
    function $File(){};
    var self = $File = $klass($base, $super, 'File', $File);

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope), $a, TMP_File_read_1, TMP_File_write_2, TMP_File_exist$q_3, TMP_File_realpath_4, TMP_File_join_5, TMP_File_directory$q_6, TMP_File_file$q_7, TMP_File_size_8, TMP_File_open_9, TMP_File_stat_10, TMP_File_mtime_11, TMP_File_initialize_12, TMP_File_write_13, TMP_File_flush_14, TMP_File_close_15, TMP_File_mtime_16;
    if (self.__fs__ == null) self.__fs__ = nil;
    if (self.__path__ == null) self.__path__ = nil;

    def.fd = def.path = nil;
    
    self.$include(Opal.const_get([Opal.const_get([Opal.Object.$$scope], 'IO', true, true).$$scope], 'Writable', true, true));
    self.$include(Opal.const_get([Opal.const_get([Opal.Object.$$scope], 'IO', true, true).$$scope], 'Readable', true, true));
    self.__fs__ = self.$node_require("fs");
    self.__path__ = self.$node_require("path");
    var __fs__ = self.__fs__;
    var __path__ = self.__path__;
    if ((($a = __path__.sep !== Opal.const_get($scopes, 'Separator', true, true)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
      
      Opal.cdecl($scope, 'ALT_SEPARATOR', Opal.const_get($scopes, 'Separator', true, true));
      Opal.cdecl($scope, 'Separator', Opal.cdecl($scope, 'SEPARATOR', __path__.sep));};
    Opal.defs(self, '$read', TMP_File_read_1 = function $$read(path) {
      var self = this;

      return executeIOAction(function(){return __fs__.readFileSync(path).toString()})
    }, TMP_File_read_1.$$arity = 1);
    Opal.defs(self, '$write', TMP_File_write_2 = function $$write(path, data) {
      var self = this;

      
      executeIOAction(function(){return __fs__.writeFileSync(path, data)});
      return data.$size();
    }, TMP_File_write_2.$$arity = 2);
    Opal.defs(self, '$exist?', TMP_File_exist$q_3 = function(path) {
      var $a, self = this;

      
      if ((($a = path['$respond_to?']("path")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        path = path.$path()};
      return executeIOAction(function(){return __fs__.existsSync(path)});
    }, TMP_File_exist$q_3.$$arity = 1);
    Opal.defs(self, '$realpath', TMP_File_realpath_4 = function $$realpath(pathname, dir_string, cache) {
      var self = this, $iter = TMP_File_realpath_4.$$p, block = $iter || nil;

      if (dir_string == null) {
        dir_string = nil;
      }
      if (cache == null) {
        cache = nil;
      }
      if ($iter) TMP_File_realpath_4.$$p = null;
      
      if (dir_string !== false && dir_string !== nil && dir_string != null) {
        pathname = self.$join(dir_string, pathname)};
      if ((block !== nil)) {
        return 
      __fs__.realpath(pathname, cache, function(error, realpath){
        if (error) Opal.IOError.$new(error.message)
        else block.$call(realpath)
      })
      
        } else {
        return executeIOAction(function(){return __fs__.realpathSync(pathname, cache)})
      };
    }, TMP_File_realpath_4.$$arity = -2);
    Opal.defs(self, '$join', TMP_File_join_5 = function $$join($a_rest) {
      var self = this, paths;

      var $args_len = arguments.length, $rest_len = $args_len - 0;
      if ($rest_len < 0) { $rest_len = 0; }
      paths = new Array($rest_len);
      for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
        paths[$arg_idx - 0] = arguments[$arg_idx];
      }
      return __path__.join.apply(__path__, paths)
    }, TMP_File_join_5.$$arity = -1);
    Opal.defs(self, '$directory?', TMP_File_directory$q_6 = function(path) {
      var $a, self = this;

      
      if ((($a = self['$exist?'](path)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return nil
      };
      return executeIOAction(function(){return !!__fs__.lstatSync(path).isDirectory()});
    }, TMP_File_directory$q_6.$$arity = 1);
    Opal.defs(self, '$file?', TMP_File_file$q_7 = function(path) {
      var $a, self = this;

      
      if ((($a = self['$exist?'](path)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return nil
      };
      return executeIOAction(function(){return !!__fs__.lstatSync(path).isFile()});
    }, TMP_File_file$q_7.$$arity = 1);
    Opal.defs(self, '$size', TMP_File_size_8 = function $$size(path) {
      var $a, self = this;

      
      if ((($a = self['$exist?'](path)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return nil
      };
      return executeIOAction(function(){return __fs__.lstatSync(path).size});
    }, TMP_File_size_8.$$arity = 1);
    Opal.defs(self, '$open', TMP_File_open_9 = function $$open(path, flags) {
      var self = this, $iter = TMP_File_open_9.$$p, $yield = $iter || nil, file = nil;

      if ($iter) TMP_File_open_9.$$p = null;
      
      file = self.$new(path, flags);
      if (($yield !== nil)) {
        
        return (function() { try {
        return Opal.yield1($yield, file);
        } finally {
          file.$close()
        }; })();
        } else {
        return file
      };
    }, TMP_File_open_9.$$arity = 2);
    Opal.defs(self, '$stat', TMP_File_stat_10 = function $$stat(path) {
      var $a, self = this;

      
      if ((($a = path['$respond_to?']("path")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        path = path.$path()};
      return Opal.const_get([Opal.const_get($scopes, 'File', true, true).$$scope], 'Stat', true, true).$new(path);
    }, TMP_File_stat_10.$$arity = 1);
    Opal.defs(self, '$mtime', TMP_File_mtime_11 = function $$mtime(path) {
      var self = this;

      return executeIOAction(function(){return __fs__.statSync(path).mtime})
    }, TMP_File_mtime_11.$$arity = 1);
    Opal.defn(self, '$initialize', TMP_File_initialize_12 = function $$initialize(path, flags) {
      var $a, self = this, binary_flag_regexp = nil, encoding_flag_regexp = nil;

      if (flags == null) {
        flags = "r";
      }
      
      binary_flag_regexp = /b/;
      encoding_flag_regexp = /:(.*)/;
      if ((($a = flags.$match(binary_flag_regexp)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        handle_unsupported_feature("Binary flag (b) is unsupported by Node.js openSync method, removing flag.")};
      flags = flags.$gsub(binary_flag_regexp, "");
      if ((($a = flags.$match(encoding_flag_regexp)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        handle_unsupported_feature("Encoding flag (:encoding) is unsupported by Node.js openSync method, removing flag.")};
      flags = flags.$gsub(encoding_flag_regexp, "");
      self.path = path;
      self.flags = flags;
      return (self.fd = executeIOAction(function(){return __fs__.openSync(path, flags)}));
    }, TMP_File_initialize_12.$$arity = -2);
    self.$attr_reader("path");
    Opal.defn(self, '$write', TMP_File_write_13 = function $$write(string) {
      var self = this;

      executeIOAction(function(){return __fs__.writeSync(self.fd, string)})
    }, TMP_File_write_13.$$arity = 1);
    Opal.defn(self, '$flush', TMP_File_flush_14 = function $$flush() {
      var self = this;

      executeIOAction(function(){return __fs__.fsyncSync(self.fd)})
    }, TMP_File_flush_14.$$arity = 0);
    Opal.defn(self, '$close', TMP_File_close_15 = function $$close() {
      var self = this;

      executeIOAction(function(){return __fs__.closeSync(self.fd)})
    }, TMP_File_close_15.$$arity = 0);
    return (Opal.defn(self, '$mtime', TMP_File_mtime_16 = function $$mtime() {
      var self = this;

      return executeIOAction(function(){return __fs__.statSync(self.path).mtime})
    }, TMP_File_mtime_16.$$arity = 0), nil) && 'mtime';
  })($scope.base, Opal.const_get($scopes, 'IO', true, true), $scopes);
  return (function($base, $super, $visibility_scopes) {
    function $Stat(){};
    var self = $Stat = $klass($base, $super, 'Stat', $Stat);

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope), TMP_Stat_initialize_17, TMP_Stat_file$q_18, TMP_Stat_mtime_19;
    if (self.__fs__ == null) self.__fs__ = nil;

    def.path = nil;
    
    self.__fs__ = self.$node_require("fs");
    var __fs__ = self.__fs__;
    Opal.defn(self, '$initialize', TMP_Stat_initialize_17 = function $$initialize(path) {
      var self = this;

      return (self.path = path)
    }, TMP_Stat_initialize_17.$$arity = 1);
    Opal.defn(self, '$file?', TMP_Stat_file$q_18 = function() {
      var self = this;

      return executeIOAction(function(){return __fs__.statSync(self.path).isFile()})
    }, TMP_Stat_file$q_18.$$arity = 0);
    return (Opal.defn(self, '$mtime', TMP_Stat_mtime_19 = function $$mtime() {
      var self = this;

      return executeIOAction(function(){return __fs__.statSync(self.path).mtime})
    }, TMP_Stat_mtime_19.$$arity = 0), nil) && 'mtime';
  })(Opal.const_get($scopes, 'File', true, true), null, $scopes);
};

/* Generated by Opal 0.11.0.dev */
Opal.modules["nodejs/dir"] = function(Opal) {
  var self = Opal.top, $scope = Opal, $scopes = [Opal], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$node_require']);
  return (function($base, $super, $visibility_scopes) {
    function $Dir(){};
    var self = $Dir = $klass($base, $super, 'Dir', $Dir);

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope);
    if (self.__glob__ == null) self.__glob__ = nil;
    if (self.__fs__ == null) self.__fs__ = nil;

    
    self.__glob__ = self.$node_require("glob");
    self.__fs__ = self.$node_require("fs");
    var __glob__ = self.__glob__;
    var __fs__ = self.__fs__;
    return (function(self, $visibility_scopes) {
      var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat(self), TMP_$$_1, TMP_pwd_2, TMP_mkdir_3, TMP_entries_4;

      
      Opal.defn(self, '$[]', TMP_$$_1 = function(glob) {
        var self = this;

        return __glob__.sync(glob)
      }, TMP_$$_1.$$arity = 1);
      Opal.defn(self, '$pwd', TMP_pwd_2 = function $$pwd() {
        var self = this;

        return process.cwd()
      }, TMP_pwd_2.$$arity = 0);
      Opal.defn(self, '$mkdir', TMP_mkdir_3 = function $$mkdir(path) {
        var self = this;

        return __fs__.mkdirSync(path)
      }, TMP_mkdir_3.$$arity = 1);
      Opal.defn(self, '$entries', TMP_entries_4 = function $$entries(dirname) {
        var self = this;

        
        var result = [];
        var entries = __fs__.readdirSync(dirname);
        for (var i = 0; i < entries.length; i++) {
          result.push(entries[i]);
        }
        return result;
      
      }, TMP_entries_4.$$arity = 1);
      return Opal.alias(self, "getwd", "pwd");
    })(Opal.get_singleton_class(self), $scopes);
  })($scope.base, null, $scopes)
};

/* Generated by Opal 0.11.0.dev */
Opal.modules["nodejs/io"] = function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var TMP_4, TMP_5, self = Opal.top, $scope = Opal, $scopes = [Opal], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $gvars = Opal.gvars, $send = Opal.send, $writer = nil;

  Opal.add_stubs(['$node_require', '$attr_reader', '$size', '$to_enum', '$read', '$chomp', '$each_line', '$lambda', '$write_proc=', '$-', '$tty=']);
  
  (function($base, $super, $visibility_scopes) {
    function $IO(){};
    var self = $IO = $klass($base, $super, 'IO', $IO);

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope), TMP_IO_initialize_1, TMP_IO_read_2, TMP_IO_each_line_3;
    if (self.__fs__ == null) self.__fs__ = nil;

    def.eof = def.path = nil;
    
    self.__fs__ = self.$node_require("fs");
    var __fs__ = self.__fs__;
    self.$attr_reader("eof");
    self.$attr_reader("lineno");
    Opal.defn(self, '$initialize', TMP_IO_initialize_1 = function $$initialize() {
      var self = this;

      
      self.eof = false;
      return (self.lineno = 0);
    }, TMP_IO_initialize_1.$$arity = 0);
    Opal.defn(self, '$read', TMP_IO_read_2 = function $$read() {
      var $a, self = this, res = nil;

      if ((($a = self.eof) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return ""
        } else {
        
        res = __fs__.readFileSync(self.path).toString();
        self.eof = true;
        self.lineno = res.$size();
        return res;
      }
    }, TMP_IO_read_2.$$arity = 0);
    return (Opal.defn(self, '$each_line', TMP_IO_each_line_3 = function $$each_line(separator) {
      var $a, self = this, $iter = TMP_IO_each_line_3.$$p, block = $iter || nil, lines = nil;
      if ($gvars["/"] == null) $gvars["/"] = nil;

      if (separator == null) {
        separator = $gvars["/"];
      }
      if ($iter) TMP_IO_each_line_3.$$p = null;
      
      if ((($a = self.eof) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return (function() {if ((block !== nil)) {
          return self
          } else {
          return [].$to_enum()
        }; return nil; })()};
      if ((block !== nil)) {
        
        lines = Opal.const_get($scopes, 'File', true, true).$read(self.path);
        
        self.eof = false;
        self.lineno = 0;
        var chomped  = lines.$chomp(),
            trailing = lines.length != chomped.length,
            splitted = chomped.split(separator);
        for (var i = 0, length = splitted.length; i < length; i++) {
          self.lineno += 1;
          if (i < length - 1 || trailing) {
            Opal.yield1(block, splitted[i] + separator);
          }
          else {
            Opal.yield1(block, splitted[i]);
          }
        }
        self.eof = true;
      ;
        return self;
        } else {
        return self.$read().$each_line()
      };
    }, TMP_IO_each_line_3.$$arity = -1), nil) && 'each_line';
  })($scope.base, null, $scopes);
  
  $writer = [$send(self, 'lambda', [], (TMP_4 = function(string){var self = TMP_4.$$s || this;
if (string == null) string = nil;
  return process.stdout.write(string)}, TMP_4.$$s = self, TMP_4.$$arity = 1, TMP_4))];
  $send(Opal.const_get($scopes, 'STDOUT', true, true), 'write_proc=', Opal.to_a($writer));
  $writer[$rb_minus($writer["length"], 1)];;
  
  $writer = [$send(self, 'lambda', [], (TMP_5 = function(string){var self = TMP_5.$$s || this;
if (string == null) string = nil;
  return process.stderr.write(string)}, TMP_5.$$s = self, TMP_5.$$arity = 1, TMP_5))];
  $send(Opal.const_get($scopes, 'STDERR', true, true), 'write_proc=', Opal.to_a($writer));
  $writer[$rb_minus($writer["length"], 1)];;
  
  $writer = [true];
  $send(Opal.const_get($scopes, 'STDOUT', true, true), 'tty=', Opal.to_a($writer));
  $writer[$rb_minus($writer["length"], 1)];;
  
  $writer = [true];
  $send(Opal.const_get($scopes, 'STDERR', true, true), 'tty=', Opal.to_a($writer));
  return $writer[$rb_minus($writer["length"], 1)];;
};

/* Generated by Opal 0.11.0.dev */
Opal.modules["nodejs"] = function(Opal) {
  var self = Opal.top, $scope = Opal, $scopes = [Opal], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module;

  Opal.add_stubs(['$require']);
  
  (function($base, $visibility_scopes) {
    var $NodeJS, self = $NodeJS = $module($base, 'NodeJS');

    var def = self.$$proto, $scope = self.$$scope, $scopes = $visibility_scopes.slice().concat($scope);

    nil
  })($scope.base, $scopes);
  self.$require("nodejs/kernel");
  self.$require("nodejs/file");
  self.$require("nodejs/dir");
  return self.$require("nodejs/io");
};
