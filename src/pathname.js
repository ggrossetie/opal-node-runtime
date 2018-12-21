/* Generated by Opal 0.11.99.dev */
Opal.modules["corelib/comparable"] = function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $truthy = Opal.truthy;

  Opal.add_stubs(['$===', '$>', '$<', '$equal?', '$<=>', '$normalize', '$raise', '$class']);
  return (function($base, $parent_nesting) {
    function $Comparable() {};
    var self = $Comparable = $module($base, 'Comparable', $Comparable);

    var def = self.prototype, $nesting = [self].concat($parent_nesting), $Comparable_normalize$1, $Comparable_$eq_eq$2, $Comparable_$gt$3, $Comparable_$gt_eq$4, $Comparable_$lt$5, $Comparable_$lt_eq$6, $Comparable_between$ques$7, $Comparable_clamp$8;

    
    Opal.defs(self, '$normalize', $Comparable_normalize$1 = function $$normalize(what) {
      var self = this;

      
      if ($truthy($$($nesting, 'Integer')['$==='](what))) {
        return what};
      if ($truthy($rb_gt(what, 0))) {
        return 1};
      if ($truthy($rb_lt(what, 0))) {
        return -1};
      return 0;
    }, $Comparable_normalize$1.$$arity = 1);
    
    Opal.def(self, '$==', $Comparable_$eq_eq$2 = function(other) {
      var self = this, cmp = nil;

      try {
        
        if ($truthy(self['$equal?'](other))) {
          return true};
        
      if (self["$<=>"] == Opal.Kernel["$<=>"]) {
        return false;
      }

      // check for infinite recursion
      if (self.$$comparable) {
        delete self.$$comparable;
        return false;
      }
    ;
        if ($truthy((cmp = self['$<=>'](other)))) {
        } else {
          return false
        };
        return $$($nesting, 'Comparable').$normalize(cmp) == 0;
      } catch ($err) {
        if (Opal.rescue($err, [$$($nesting, 'StandardError')])) {
          try {
            return false
          } finally { Opal.pop_exception() }
        } else { throw $err; }
      }
    }, $Comparable_$eq_eq$2.$$arity = 1);
    
    Opal.def(self, '$>', $Comparable_$gt$3 = function(other) {
      var self = this, cmp = nil;

      
      if ($truthy((cmp = self['$<=>'](other)))) {
      } else {
        self.$raise($$($nesting, 'ArgumentError'), "" + "comparison of " + (self.$class()) + " with " + (other.$class()) + " failed")
      };
      return $$($nesting, 'Comparable').$normalize(cmp) > 0;
    }, $Comparable_$gt$3.$$arity = 1);
    
    Opal.def(self, '$>=', $Comparable_$gt_eq$4 = function(other) {
      var self = this, cmp = nil;

      
      if ($truthy((cmp = self['$<=>'](other)))) {
      } else {
        self.$raise($$($nesting, 'ArgumentError'), "" + "comparison of " + (self.$class()) + " with " + (other.$class()) + " failed")
      };
      return $$($nesting, 'Comparable').$normalize(cmp) >= 0;
    }, $Comparable_$gt_eq$4.$$arity = 1);
    
    Opal.def(self, '$<', $Comparable_$lt$5 = function(other) {
      var self = this, cmp = nil;

      
      if ($truthy((cmp = self['$<=>'](other)))) {
      } else {
        self.$raise($$($nesting, 'ArgumentError'), "" + "comparison of " + (self.$class()) + " with " + (other.$class()) + " failed")
      };
      return $$($nesting, 'Comparable').$normalize(cmp) < 0;
    }, $Comparable_$lt$5.$$arity = 1);
    
    Opal.def(self, '$<=', $Comparable_$lt_eq$6 = function(other) {
      var self = this, cmp = nil;

      
      if ($truthy((cmp = self['$<=>'](other)))) {
      } else {
        self.$raise($$($nesting, 'ArgumentError'), "" + "comparison of " + (self.$class()) + " with " + (other.$class()) + " failed")
      };
      return $$($nesting, 'Comparable').$normalize(cmp) <= 0;
    }, $Comparable_$lt_eq$6.$$arity = 1);
    
    Opal.def(self, '$between?', $Comparable_between$ques$7 = function(min, max) {
      var self = this;

      
      if ($rb_lt(self, min)) {
        return false};
      if ($rb_gt(self, max)) {
        return false};
      return true;
    }, $Comparable_between$ques$7.$$arity = 2);
    
    Opal.def(self, '$clamp', $Comparable_clamp$8 = function $$clamp(min, max) {
      var self = this, cmp = nil;

      
      cmp = min['$<=>'](max);
      if ($truthy(cmp)) {
      } else {
        self.$raise($$($nesting, 'ArgumentError'), "" + "comparison of " + (min.$class()) + " with " + (max.$class()) + " failed")
      };
      if ($truthy($rb_gt($$($nesting, 'Comparable').$normalize(cmp), 0))) {
        self.$raise($$($nesting, 'ArgumentError'), "min argument must be smaller than max argument")};
      if ($truthy($rb_lt($$($nesting, 'Comparable').$normalize(self['$<=>'](min)), 0))) {
        return min};
      if ($truthy($rb_gt($$($nesting, 'Comparable').$normalize(self['$<=>'](max)), 0))) {
        return max};
      return self;
    }, $Comparable_clamp$8.$$arity = 2);
  })($nesting[0], $nesting)
};

/* Generated by Opal 0.11.99.dev */
Opal.modules["pathname"] = function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send, $module = Opal.module;

  Opal.add_stubs(['$require', '$include', '$quote', '$===', '$to_s', '$path', '$respond_to?', '$to_path', '$is_a?', '$nil?', '$raise', '$class', '$==', '$attr_reader', '$!', '$relative?', '$chop_basename', '$basename', '$=~', '$new', '$source', '$[]', '$rindex', '$sub', '$absolute?', '$expand_path', '$plus', '$unshift', '$length', '$!=', '$empty?', '$first', '$shift', '$+', '$join', '$dirname', '$pop', '$reverse_each', '$directory?', '$extname', '$<=>', '$nonzero?', '$proc', '$casecmp', '$cleanpath', '$inspect', '$include?', '$fill', '$map', '$entries']);
  
  self.$require("corelib/comparable");
  (function($base, $super, $parent_nesting) {
    function $Pathname(){};
    var self = $Pathname = $klass($base, $super, 'Pathname', $Pathname);

    var def = self.prototype, $nesting = [self].concat($parent_nesting), $Pathname_initialize$1, $Pathname_$eq_eq$2, $Pathname_absolute$ques$3, $Pathname_relative$ques$4, $Pathname_chop_basename$5, $Pathname_root$ques$6, $Pathname_parent$7, $Pathname_sub$8, $Pathname_cleanpath$9, $Pathname_to_path$10, $Pathname_hash$11, $Pathname_expand_path$12, $Pathname_$plus$13, $Pathname_plus$14, $Pathname_join$15, $Pathname_split$17, $Pathname_dirname$18, $Pathname_basename$19, $Pathname_directory$ques$20, $Pathname_extname$21, $Pathname_$lt_eq_gt$22, $Pathname$23, $Pathname$24, $Pathname_relative_path_from$25, $Pathname_entries$26;

    def.path = nil;
    
    self.$include($$($nesting, 'Comparable'));
    Opal.const_set($nesting[0], 'SEPARATOR_PAT', new RegExp($$($nesting, 'Regexp').$quote($$$($$($nesting, 'File'), 'SEPARATOR'))));
    
    Opal.def(self, '$initialize', $Pathname_initialize$1 = function $$initialize(path) {
      var self = this;

      
      if ($truthy($$($nesting, 'Pathname')['$==='](path))) {
        self.path = path.$path().$to_s()
      } else if ($truthy(path['$respond_to?']("to_path"))) {
        self.path = path.$to_path()
      } else if ($truthy(path['$is_a?']($$($nesting, 'String')))) {
        self.path = path
      } else if ($truthy(path['$nil?']())) {
        self.$raise($$($nesting, 'TypeError'), "no implicit conversion of nil into String")
      } else {
        self.$raise($$($nesting, 'TypeError'), "" + "no implicit conversion of " + (path.$class()) + " into String")
      };
      if (self.path['$==']("\u0000")) {
        return self.$raise($$($nesting, 'ArgumentError'))
      } else {
        return nil
      };
    }, $Pathname_initialize$1.$$arity = 1);
    self.$attr_reader("path");
    
    Opal.def(self, '$==', $Pathname_$eq_eq$2 = function(other) {
      var self = this;

      return other.$path()['$=='](self.path)
    }, $Pathname_$eq_eq$2.$$arity = 1);
    
    Opal.def(self, '$absolute?', $Pathname_absolute$ques$3 = function() {
      var self = this;

      return self['$relative?']()['$!']()
    }, $Pathname_absolute$ques$3.$$arity = 0);
    
    Opal.def(self, '$relative?', $Pathname_relative$ques$4 = function() {
      var $a, $b, $c, self = this, path = nil, r = nil;

      
      path = self.path;
      while ($truthy((r = self.$chop_basename(path)))) {
        $c = r, $b = Opal.to_ary($c), (path = ($b[0] == null ? nil : $b[0])), $c
      };
      return path['$==']("");
    }, $Pathname_relative$ques$4.$$arity = 0);
    
    Opal.def(self, '$chop_basename', $Pathname_chop_basename$5 = function $$chop_basename(path) {
      var self = this, base = nil;

      
      base = $$($nesting, 'File').$basename(path);
      if ($truthy($$($nesting, 'Regexp').$new("" + "^" + ($$$($$($nesting, 'Pathname'), 'SEPARATOR_PAT').$source()) + "?$")['$=~'](base))) {
        return nil
      } else {
        return [path['$[]'](0, path.$rindex(base)), base]
      };
    }, $Pathname_chop_basename$5.$$arity = 1);
    
    Opal.def(self, '$root?', $Pathname_root$ques$6 = function() {
      var self = this;

      return self.path['$==']("/")
    }, $Pathname_root$ques$6.$$arity = 0);
    
    Opal.def(self, '$parent', $Pathname_parent$7 = function $$parent() {
      var self = this, new_path = nil;

      
      new_path = self.path.$sub(/\/([^\/]+\/?$)/, "");
      if (new_path['$==']("")) {
        new_path = (function() {if ($truthy(self['$absolute?']())) {
          return "/"
        } else {
          return "."
        }; return nil; })()};
      return $$($nesting, 'Pathname').$new(new_path);
    }, $Pathname_parent$7.$$arity = 0);
    
    Opal.def(self, '$sub', $Pathname_sub$8 = function $$sub($a) {
      var $post_args, args, self = this;

      
      
      $post_args = Opal.slice.call(arguments, 0, arguments.length);
      
      args = $post_args;;
      return $$($nesting, 'Pathname').$new($send(self.path, 'sub', Opal.to_a(args)));
    }, $Pathname_sub$8.$$arity = -1);
    
    Opal.def(self, '$cleanpath', $Pathname_cleanpath$9 = function $$cleanpath() {
      var self = this;

      return Opal.normalize(self.path)
    }, $Pathname_cleanpath$9.$$arity = 0);
    
    Opal.def(self, '$to_path', $Pathname_to_path$10 = function $$to_path() {
      var self = this;

      return self.path
    }, $Pathname_to_path$10.$$arity = 0);
    
    Opal.def(self, '$hash', $Pathname_hash$11 = function $$hash() {
      var self = this;

      return self.path
    }, $Pathname_hash$11.$$arity = 0);
    
    Opal.def(self, '$expand_path', $Pathname_expand_path$12 = function $$expand_path() {
      var self = this;

      return $$($nesting, 'Pathname').$new($$($nesting, 'File').$expand_path(self.path))
    }, $Pathname_expand_path$12.$$arity = 0);
    
    Opal.def(self, '$+', $Pathname_$plus$13 = function(other) {
      var self = this;

      
      if ($truthy($$($nesting, 'Pathname')['$==='](other))) {
      } else {
        other = $$($nesting, 'Pathname').$new(other)
      };
      return $$($nesting, 'Pathname').$new(self.$plus(self.path, other.$to_s()));
    }, $Pathname_$plus$13.$$arity = 1);
    
    Opal.def(self, '$plus', $Pathname_plus$14 = function $$plus(path1, path2) {
      var $a, $b, $c, self = this, prefix2 = nil, index_list2 = nil, basename_list2 = nil, r2 = nil, basename2 = nil, prefix1 = nil, r1 = nil, basename1 = nil, suffix2 = nil;

      
      prefix2 = path2;
      index_list2 = [];
      basename_list2 = [];
      while ($truthy((r2 = self.$chop_basename(prefix2)))) {
        
        $c = r2, $b = Opal.to_ary($c), (prefix2 = ($b[0] == null ? nil : $b[0])), (basename2 = ($b[1] == null ? nil : $b[1])), $c;
        index_list2.$unshift(prefix2.$length());
        basename_list2.$unshift(basename2);
      };
      if ($truthy(prefix2['$!='](""))) {
        return path2};
      prefix1 = path1;
      while ($truthy(true)) {
        
        while ($truthy(($truthy($c = basename_list2['$empty?']()['$!']()) ? basename_list2.$first()['$=='](".") : $c))) {
          
          index_list2.$shift();
          basename_list2.$shift();
        };
        if ($truthy((r1 = self.$chop_basename(prefix1)))) {
        } else {
          break;
        };
        $c = r1, $b = Opal.to_ary($c), (prefix1 = ($b[0] == null ? nil : $b[0])), (basename1 = ($b[1] == null ? nil : $b[1])), $c;
        if (basename1['$=='](".")) {
          continue;};
        if ($truthy(($truthy($b = ($truthy($c = basename1['$==']("..")) ? $c : basename_list2['$empty?']())) ? $b : basename_list2.$first()['$!=']("..")))) {
          
          prefix1 = $rb_plus(prefix1, basename1);
          break;;};
        index_list2.$shift();
        basename_list2.$shift();
      };
      r1 = self.$chop_basename(prefix1);
      if ($truthy(($truthy($a = r1['$!']()) ? new RegExp($$($nesting, 'SEPARATOR_PAT'))['$=~']($$($nesting, 'File').$basename(prefix1)) : $a))) {
        while ($truthy(($truthy($b = basename_list2['$empty?']()['$!']()) ? basename_list2.$first()['$==']("..") : $b))) {
          
          index_list2.$shift();
          basename_list2.$shift();
        }};
      if ($truthy(basename_list2['$empty?']()['$!']())) {
        
        suffix2 = path2['$[]'](Opal.Range.$new(index_list2.$first(), -1, false));
        if ($truthy(r1)) {
          return $$($nesting, 'File').$join(prefix1, suffix2)
        } else {
          return $rb_plus(prefix1, suffix2)
        };
      } else if ($truthy(r1)) {
        return prefix1
      } else {
        return $$($nesting, 'File').$dirname(prefix1)
      };
    }, $Pathname_plus$14.$$arity = 2);
    
    Opal.def(self, '$join', $Pathname_join$15 = function $$join($a) {try {

      var $post_args, args, $$16, self = this, result = nil;

      
      
      $post_args = Opal.slice.call(arguments, 0, arguments.length);
      
      args = $post_args;;
      if ($truthy(args['$empty?']())) {
        return self};
      result = args.$pop();
      if ($truthy($$($nesting, 'Pathname')['$==='](result))) {
      } else {
        result = $$($nesting, 'Pathname').$new(result)
      };
      if ($truthy(result['$absolute?']())) {
        return result};
      $send(args, 'reverse_each', [], ($$16 = function(arg){var self = $$16.$$s || this;

      
        
        if (arg == null) {
          arg = nil;
        };
        if ($truthy($$($nesting, 'Pathname')['$==='](arg))) {
        } else {
          arg = $$($nesting, 'Pathname').$new(arg)
        };
        result = $rb_plus(arg, result);
        if ($truthy(result['$absolute?']())) {
          Opal.ret(result)
        } else {
          return nil
        };}, $$16.$$s = self, $$16.$$arity = 1, $$16));
      return $rb_plus(self, result);
      } catch ($returner) { if ($returner === Opal.returner) { return $returner.$v } throw $returner; }
    }, $Pathname_join$15.$$arity = -1);
    
    Opal.def(self, '$split', $Pathname_split$17 = function $$split() {
      var self = this;

      return [self.$dirname(), self.$basename()]
    }, $Pathname_split$17.$$arity = 0);
    
    Opal.def(self, '$dirname', $Pathname_dirname$18 = function $$dirname() {
      var self = this;

      return $$($nesting, 'Pathname').$new($$($nesting, 'File').$dirname(self.path))
    }, $Pathname_dirname$18.$$arity = 0);
    
    Opal.def(self, '$basename', $Pathname_basename$19 = function $$basename() {
      var self = this;

      return $$($nesting, 'Pathname').$new($$($nesting, 'File').$basename(self.path))
    }, $Pathname_basename$19.$$arity = 0);
    
    Opal.def(self, '$directory?', $Pathname_directory$ques$20 = function() {
      var self = this;

      return $$($nesting, 'File')['$directory?'](self.path)
    }, $Pathname_directory$ques$20.$$arity = 0);
    
    Opal.def(self, '$extname', $Pathname_extname$21 = function $$extname() {
      var self = this;

      return $$($nesting, 'File').$extname(self.path)
    }, $Pathname_extname$21.$$arity = 0);
    
    Opal.def(self, '$<=>', $Pathname_$lt_eq_gt$22 = function(other) {
      var self = this;

      return self.$path()['$<=>'](other.$path())
    }, $Pathname_$lt_eq_gt$22.$$arity = 1);
    Opal.alias(self, "eql?", "==");
    Opal.alias(self, "===", "==");
    Opal.alias(self, "to_str", "to_path");
    Opal.alias(self, "to_s", "to_path");
    Opal.const_set($nesting[0], 'SAME_PATHS', (function() {if ($truthy($$$($$($nesting, 'File'), 'FNM_SYSCASE')['$nonzero?']())) {
      return $send(self, 'proc', [], ($Pathname$23 = function(a, b){var self = $Pathname$23.$$s || this;

      
        
        if (a == null) {
          a = nil;
        };
        
        if (b == null) {
          b = nil;
        };
        return a.$casecmp(b)['$=='](0);}, $Pathname$23.$$s = self, $Pathname$23.$$arity = 2, $Pathname$23))
    } else {
      return $send(self, 'proc', [], ($Pathname$24 = function(a, b){var self = $Pathname$24.$$s || this;

      
        
        if (a == null) {
          a = nil;
        };
        
        if (b == null) {
          b = nil;
        };
        return a['$=='](b);}, $Pathname$24.$$s = self, $Pathname$24.$$arity = 2, $Pathname$24))
    }; return nil; })());
    
    Opal.def(self, '$relative_path_from', $Pathname_relative_path_from$25 = function $$relative_path_from(base_directory) {
      var $a, $b, $c, self = this, dest_directory = nil, dest_prefix = nil, dest_names = nil, r = nil, basename = nil, base_prefix = nil, base_names = nil, relpath_names = nil;

      
      dest_directory = self.$cleanpath().$to_s();
      base_directory = base_directory.$cleanpath().$to_s();
      dest_prefix = dest_directory;
      dest_names = [];
      while ($truthy((r = self.$chop_basename(dest_prefix)))) {
        
        $c = r, $b = Opal.to_ary($c), (dest_prefix = ($b[0] == null ? nil : $b[0])), (basename = ($b[1] == null ? nil : $b[1])), $c;
        if ($truthy(basename['$!=']("."))) {
          dest_names.$unshift(basename)};
      };
      base_prefix = base_directory;
      base_names = [];
      while ($truthy((r = self.$chop_basename(base_prefix)))) {
        
        $c = r, $b = Opal.to_ary($c), (base_prefix = ($b[0] == null ? nil : $b[0])), (basename = ($b[1] == null ? nil : $b[1])), $c;
        if ($truthy(basename['$!=']("."))) {
          base_names.$unshift(basename)};
      };
      if ($truthy($$($nesting, 'SAME_PATHS')['$[]'](dest_prefix, base_prefix))) {
      } else {
        self.$raise($$($nesting, 'ArgumentError'), "" + "different prefix: " + (dest_prefix.$inspect()) + " and " + (base_directory.$inspect()))
      };
      while ($truthy(($truthy($b = ($truthy($c = dest_names['$empty?']()['$!']()) ? base_names['$empty?']()['$!']() : $c)) ? $$($nesting, 'SAME_PATHS')['$[]'](dest_names.$first(), base_names.$first()) : $b))) {
        
        dest_names.$shift();
        base_names.$shift();
      };
      if ($truthy(base_names['$include?'](".."))) {
        self.$raise($$($nesting, 'ArgumentError'), "" + "base_directory has ..: " + (base_directory.$inspect()))};
      base_names.$fill("..");
      relpath_names = $rb_plus(base_names, dest_names);
      if ($truthy(relpath_names['$empty?']())) {
        return $$($nesting, 'Pathname').$new(".")
      } else {
        return $$($nesting, 'Pathname').$new($send($$($nesting, 'File'), 'join', Opal.to_a(relpath_names)))
      };
    }, $Pathname_relative_path_from$25.$$arity = 1);
    return (Opal.def(self, '$entries', $Pathname_entries$26 = function $$entries() {
      var $$27, self = this;

      return $send($$($nesting, 'Dir').$entries(self.path), 'map', [], ($$27 = function(f){var self = $$27.$$s || this;

      
        
        if (f == null) {
          f = nil;
        };
        return self.$class().$new(f);}, $$27.$$s = self, $$27.$$arity = 1, $$27))
    }, $Pathname_entries$26.$$arity = 0), nil) && 'entries';
  })($nesting[0], null, $nesting);
  return (function($base, $parent_nesting) {
    function $Kernel() {};
    var self = $Kernel = $module($base, 'Kernel', $Kernel);

    var def = self.prototype, $nesting = [self].concat($parent_nesting), $Kernel_Pathname$28;

    
    Opal.def(self, '$Pathname', $Kernel_Pathname$28 = function $$Pathname(path) {
      var self = this;

      return $$($nesting, 'Pathname').$new(path)
    }, $Kernel_Pathname$28.$$arity = 1)
  })($nesting[0], $nesting);
};
