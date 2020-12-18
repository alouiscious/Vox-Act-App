# encode User #1's id in a JWT
encoded = encode_token(id: 1)
# we need to get id:1 out of the token with 
decoded = decode_token(encoded)
# decode token needs to be able to decode the token created by encode_token and return id: 1
# encode_token
User.find_by_id(decoded[:id]) #? not sure it will look exactly like that
# 'super secret' should be your rails secret key base
# check rails credentials by running 
`EDITOR="code --wait" rails credentials:edit`
# replace "super secret" with 
Rails.application.credentials.config[:secret_key_base]
# that secret will be used to decode the token as well
# when you test this, you'll want to paste in your encode_token and decode_token methods into the rails console

# encode and decode and try client-side local cookie jwt storage.

# Cors: settings
include credential for login actions
add origins to CORS.rb statement
tested localhost, client ip and device ip

# stopwork errors:
console.table not commented out in session controller lead to: 
# <NameError: undefined local variable or method `console' for ApplicationController:Class 13:02:19 api.1  | Did you mean?  const_set>

removed create statement in sessionController:
# <NameError: undefined local variable or method `console' for ApplicationController:Class 13:02:19 api.1  | Did you mean?  const_set>
Only want to have the create method find the user:email and authenticate




## Rails console solution to testing for encoded sessions "super secret"
Loading development environment (Rails 6.0.3.4)
2.6.0 :001 > User.first
  User Load (0.4ms)  SELECT "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
 => #<User id: 1, user_name: "Lois Griffin", hometown: "Quahog MA", email: "lois@thegriffins.com", password_digest: [FILTERED], upid: "5365794e-4fb4-491e-8e72-23c9af00af37", upph: "", created_at: "2020-11-30 10:28:46", updated_at: "2020-11-30 10:28:46"> 
2.6.0 :002 > Rails.application.credentials
 => #<ActiveSupport::EncryptedConfiguration:0x00007fd5e3adeb00 @key_path=#<Pathname:/Users/susansims/OnMyMac/Flatiron/PT 071519/React-Redux-Portfolio/vox-act-api/config/master.key>, @content_path=#<Pathname:/Users/susansims/OnMyMac/Flatiron/PT 071519/React-Redux-Portfolio/vox-act-api/config/credentials.yml.enc>, @env_key="RAILS_MASTER_KEY", @raise_if_missing_key=false> 
2.6.0 :003 > Rails.application.credentials.fetch('secret_key_base')
Traceback (most recent call last):
        1: from (irb):3
KeyError (key not found: "secret_key_base")
2.6.0 :004 > Rails.application.credentials.fetch('SECRET_KEY_BASE')
Traceback (most recent call last):
        2: from (irb):4
        1: from (irb):4:in `rescue in irb_binding'
KeyError (key not found: "SECRET_KEY_BASE")
2.6.0 :005 > ENV['SECRET_KEY_BASE']
 => nil 
2.6.0 :006 > ENV['secret_key_base']
 => nil 
2.6.0 :007 > Rails.application.credentials
 => #<ActiveSupport::EncryptedConfiguration:0x00007fd5e3adeb00 @key_path=#<Pathname:/Users/susansims/OnMyMac/Flatiron/PT 071519/React-Redux-Portfolio/vox-act-api/config/master.key>, @content_path=#<Pathname:/Users/susansims/OnMyMac/Flatiron/PT 071519/React-Redux-Portfolio/vox-act-api/config/credentials.yml.enc>, @env_key="RAILS_MASTER_KEY", @raise_if_missing_key=false, @encryptor=#<ActiveSupport::MessageEncryptor:0x00007fd5d4170118 @secret="\x99 \x9C\xCDyW\xC1\xA1\x12\xF0\xF2u|\x7F\xD1-", @sign_secret=nil, @cipher="aes-128-gcm", @aead_mode=true, @verifier=ActiveSupport::MessageEncryptor::NullVerifier, @serializer=Marshal, @options={:cipher=>"aes-128-gcm"}, @rotations=[]>, @config={:secret_key_base=>"940a629164294b4cff7fb0d746894bcb040af3cdef873b8564b99c68934b87f325aad3a9c85bb77ca0e7029aacc0563758a9ee9858a35e22acd9ee14a4af2b4f"}> 
2.6.0 :008 > Rails.application.credentials.get('secret_key_base')
 => nil 
2.6.0 :009 > reload!
Reloading...
 => true 
2.6.0 :010 > Rails.application.credentials.get('secret_key_base')
 => nil 
2.6.0 :011 > Rails.application.credentials => #<ActiveSupport::EncryptedConfiguration:0x00007fd5e3adeb00 @key_path=#<Pathname:/Users/susansims/OnMyMac/Flatiron/PT 071519/React-Redux-Portfolio/vox-act-api/config/master.key>, @content_path=#<Pathname:/Users/susansims/OnMyMac/Flatiron/PT 071519/React-Redux-Portfolio/vox-act-api/config/credentials.yml.enc>, @env_key="RAILS_MASTER_KEY", @raise_if_missing_key=false, @encryptor=#<ActiveSupport::MessageEncryptor:0x00007fd5d4170118 @secret="\x99 \x9C\xCDyW\xC1\xA1\x12\xF0\xF2u|\x7F\xD1-", @sign_secret=nil, @cipher="aes-128-gcm", @aead_mode=true, @verifier=ActiveSupport::MessageEncryptor::NullVerifier, @serializer=Marshal, @options={:cipher=>"aes-128-gcm"}, @rotations=[]>, @config={:secret_key_base=>"940a629164294b4cff7fb0d746894bcb040af3cdef873b8564b99c68934b87f325aad3a9c85bb77ca0e7029aacc0563758a9ee9858a35e22acd9ee14a4af2b4f"}, @options={}> 
2.6.0 :012 > Rails.application.credentials.config
 => {:secret_key_base=>"940a629164294b4cff7fb0d746894bcb040af3cdef873b8564b99c68934b87f325aad3a9c85bb77ca0e7029aacc0563758a9ee9858a35e22acd9ee14a4af2b4f"} 
2.6.0 :013 > Rails.application.credentials.config[:secret_key_base]
 => "940a629164294b4cff7fb0d746894bcb040af3cdef873b8564b99c68934b87f325aad3a9c85bb77ca0e7029aacc0563758a9ee9858a35e22acd9ee14a4af2b4f" 

2.6.0 :015 > ApplicationController
 => ApplicationController 
2.6.0 :016 > ApplicationController.methods
 => [:middleware_stack, :_routes, :_wrapper_options, :etaggers=, :default_url_options?, :rescue_handlers, :__callbacks?, :rescue_handlers=, :_wrapper_options=, :etaggers, :logger=, :_renderers, :_renderers=, :_renderers?, :etaggers?, :without_modules, :_process_action_callbacks, :_process_action_callbacks=, :_wrapper_options?, :__callbacks, :_serialization_scope?, :default_url_options, :default_url_options=, :rescue_handlers?, :__callbacks=, :_serialization_scope=, :_serialization_scope, :logger, :serialization_scope, :log_process_action, :inherited, :wrap_parameters, :_set_wrapper_options, :handler_for_rescue, :rescue_from, :rescue_with_handler, :make_response!, :force_ssl, :append_after_action, :prepend_after_action, :around_action, :prepend_around_action, :skip_around_action, :append_around_action, :_insert_callbacks, :before_action, :_normalize_callback_option, :prepend_before_action, :skip_before_action, :append_before_action, :_normalize_callback_options, :after_action, :skip_after_action, :set_callbacks, :skip_callback, :reset_callbacks, :define_callbacks, :set_callback, :normalize_callback_params, :__update_callbacks, :get_callbacks, :etag, :use_renderer, :use_renderers, :setup_renderer!, :render, :renderer, :action_methods, :_prefixes, :prepend_view_path, :append_view_path, :view_paths=, :view_paths, :_view_paths=, :_view_paths, :binary_params_for?, :action, :middleware_stack=, :dispatch, :use, :controller_name, :middleware_stack?, :middleware, :abstract, :abstract?, :internal_methods, :abstract!, :clear_action_methods!, :supports_path?, :controller_path, :method_added, :direct_descendants, :descendants, :config, :configure, :yaml_tag, :class_attribute, :allocate, :superclass, :new, :json_creatable?, :subclasses, :attr_internal_reader, :attr_internal_writer, :attr_internal_accessor, :attr_internal, :pretty_print, :included_modules, :include?, :name, :ancestors, :attr, :attr_reader, :attr_writer, :attr_accessor, :instance_methods, :public_instance_methods, :protected_instance_methods, :private_instance_methods, :constants, :const_get, :const_set, :const_defined?, :class_variables, :remove_class_variable, :class_variable_get, :class_variable_set, :class_variable_defined?, :public_constant, :private_constant, :deprecate_constant, :singleton_class?, :autoload, :include, :module_exec, :module_eval, :class_eval, :class_exec, :remove_method, :undef_method, :method_defined?, :<, :alias_method, :>, :private_class_method, :protected_method_defined?, :public_method_defined?, :private_method_defined?, :public_instance_method, :public_class_method, :delegate_missing_to, :deprecate, :delegate, :instance_method, :module_parents, :define_method, :parent_name, :autoload?, :anonymous?, :module_parent, :parents, :rake_extension, :remove_possible_method, :remove_possible_singleton_method, :<=>, :<=, :>=, :==, :===, :thread_mattr_reader, :thread_cattr_reader, :thread_mattr_writer, :thread_cattr_writer, :thread_mattr_accessor, :thread_cattr_accessor, :freeze, :inspect, :prepend, :const_missing, :silence_redefinition_of_method, :redefine_singleton_method, :redefine_method, :to_s, :alias_attribute, :mattr_reader, :cattr_reader, :mattr_writer, :cattr_writer, :cattr_accessor, :module_parent_name, :pretty_print_cycle, :method_visibility, :autoload_without_bootsnap, :parent, :mattr_accessor, :concerning, :concern, :unloadable, :guess_for_anonymous, :require_dependency, :to_json, :instance_values, :instance_variable_names, :html_safe?, :present?, :presence, :deep_dup, :acts_like?, :pry, :duplicable?, :to_param, :to_query, :with_options, :to_yaml, :as_json, :__binding__, :in?, :blank?, :presence_in, :pretty_print_inspect, :pretty_print_instance_variables, :try, :try!, :load_dependency, :require_or_load, :instance_variable_defined?, :remove_instance_variable, :instance_of?, :kind_of?, :is_a?, :tap, :instance_variable_get, :instance_variable_set, :protected_methods, :instance_variables, :private_methods, :method, :public_method, :public_send, :singleton_method, :define_singleton_method, :remote_byebug, :debugger, :pretty_inspect, :extend, :byebug, :to_enum, :enum_for, :=~, :!~, :gem, :eql?, :respond_to?, :object_id, :send, :display, :class, :nil?, :hash, :dup, :singleton_class, :clone, :then, :itself, :yield_self, :untaint, :taint, :tainted?, :trust, :untrust, :untrusted?, :singleton_methods, :frozen?, :methods, :public_methods, :equal?, :!, :instance_exec, :!=, :instance_eval, :__id__, :__send__] 
2.6.0 :017 > ApplicationController.methods.sort
 => [:!, :!=, :!~, :<, :<=, :<=>, :==, :===, :=~, :>, :>=, :__binding__, :__callbacks, :__callbacks=, :__callbacks?, :__id__, :__send__, :__update_callbacks, :_insert_callbacks, :_normalize_callback_option, :_normalize_callback_options, :_prefixes, :_process_action_callbacks, :_process_action_callbacks=, :_renderers, :_renderers=, :_renderers?, :_routes, :_serialization_scope, :_serialization_scope=, :_serialization_scope?, :_set_wrapper_options, :_view_paths, :_view_paths=, :_wrapper_options, :_wrapper_options=, :_wrapper_options?, :abstract, :abstract!, :abstract?, :action, :action_methods, :acts_like?, :after_action, :alias_attribute, :alias_method, :allocate, :ancestors, :anonymous?, :append_after_action, :append_around_action, :append_before_action, :append_view_path, :around_action, :as_json, :attr, :attr_accessor, :attr_internal, :attr_internal_accessor, :attr_internal_reader, :attr_internal_writer, :attr_reader, :attr_writer, :autoload, :autoload?, :autoload_without_bootsnap, :before_action, :binary_params_for?, :blank?, :byebug, :cattr_accessor, :cattr_reader, :cattr_writer, :class, :class_attribute, :class_eval, :class_exec, :class_variable_defined?, :class_variable_get, :class_variable_set, :class_variables, :clear_action_methods!, :clone, :concern, :concerning, :config, :configure, :const_defined?, :const_get, :const_missing, :const_set, :constants, :controller_name, :controller_path, :debugger, :deep_dup, :default_url_options, :default_url_options=, :default_url_options?, :define_callbacks, :define_method, :define_singleton_method, :delegate, :delegate_missing_to, :deprecate, :deprecate_constant, :descendants, :direct_descendants, :dispatch, :display, :dup, :duplicable?, :enum_for, :eql?, :equal?, :etag, :etaggers, :etaggers=, :etaggers?, :extend, :force_ssl, :freeze, :frozen?, :gem, :get_callbacks, :guess_for_anonymous, :handler_for_rescue, :hash, :html_safe?, :in?, :include, :include?, :included_modules, :inherited, :inspect, :instance_eval, :instance_exec, :instance_method, :instance_methods, :instance_of?, :instance_values, :instance_variable_defined?, :instance_variable_get, :instance_variable_names, :instance_variable_set, :instance_variables, :internal_methods, :is_a?, :itself, :json_creatable?, :kind_of?, :load_dependency, :log_process_action, :logger, :logger=, :make_response!, :mattr_accessor, :mattr_reader, :mattr_writer, :method, :method_added, :method_defined?, :method_visibility, :methods, :middleware, :middleware_stack, :middleware_stack=, :middleware_stack?, :module_eval, :module_exec, :module_parent, :module_parent_name, :module_parents, :name, :new, :nil?, :normalize_callback_params, :object_id, :parent, :parent_name, :parents, :prepend, :prepend_after_action, :prepend_around_action, :prepend_before_action, :prepend_view_path, :presence, :presence_in, :present?, :pretty_inspect, :pretty_print, :pretty_print_cycle, :pretty_print_inspect, :pretty_print_instance_variables, :private_class_method, :private_constant, :private_instance_methods, :private_method_defined?, :private_methods, :protected_instance_methods, :protected_method_defined?, :protected_methods, :pry, :public_class_method, :public_constant, :public_instance_method, :public_instance_methods, :public_method, :public_method_defined?, :public_methods, :public_send, :rake_extension, :redefine_method, :redefine_singleton_method, :remote_byebug, :remove_class_variable, :remove_instance_variable, :remove_method, :remove_possible_method, :remove_possible_singleton_method, :render, :renderer, :require_dependency, :require_or_load, :rescue_from, :rescue_handlers, :rescue_handlers=, :rescue_handlers?, :rescue_with_handler, :reset_callbacks, :respond_to?, :send, :serialization_scope, :set_callback, :set_callbacks, :setup_renderer!, :silence_redefinition_of_method, :singleton_class, :singleton_class?, :singleton_method, :singleton_methods, :skip_after_action, :skip_around_action, :skip_before_action, :skip_callback, :subclasses, :superclass, :supports_path?, :taint, :tainted?, :tap, :then, :thread_cattr_accessor, :thread_cattr_reader, :thread_cattr_writer, :thread_mattr_accessor, :thread_mattr_reader, :thread_mattr_writer, :to_enum, :to_json, :to_param, :to_query, :to_s, :to_yaml, :trust, :try, :try!, :undef_method, :unloadable, :untaint, :untrust, :untrusted?, :use, :use_renderer, :use_renderers, :view_paths, :view_paths=, :with_options, :without_modules, :wrap_parameters, :yaml_tag, :yield_self] 
2.6.0 :018 > ApplicationController.methods.select{|m| m.match('encode')}
 => [] 
2.6.0 :019 > def encode_token(payload)
2.6.0 :020?>       JWT.encode(payload, "super secret")
2.6.0 :021?>     end
 => :encode_token 
2.6.0 :022 > encode_toekn(id: 1)
Traceback (most recent call last):
        1: from (irb):22
NoMethodError (undefined method `encode_toekn' for main:Object)
Did you mean?  encode_token
2.6.0 :023 > encode_token(id: 1)
 => "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.5vm0wcCpesArCo4Mk9AROdsDEhTXXc-vo6BJ-vULtlY" 
2.6.0 :024 > 

# found the command for the token value
[13:44:13] (master) vox-act-api
// ♥ EDITOR="code --wait" rails credentials:edit
File encrypted and saved.