$p.wsql.alasql('USE md; CREATE TABLE IF NOT EXISTS `ireg_$log` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `date` INT, `sequence` INT, `class` CHAR, `note` CHAR, `obj` CHAR); CREATE TABLE IF NOT EXISTS `ireg_log` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, `date` INT, `sequence` INT, `class` CHAR, `note` CHAR, `obj` CHAR); CREATE TABLE IF NOT EXISTS `doc_cash_moving` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, posted boolean, date Date, number_doc CHAR, `sender` CHAR, `recipient` CHAR, `doc_amount` FLOAT, `cash_flow_article` CHAR, `responsible` CHAR, `note` CHAR); CREATE TABLE IF NOT EXISTS `cat_formulas` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `formula` CHAR, `leading_formula` CHAR, `condition_formula` BOOLEAN, `definition` CHAR, `template` CHAR, `predefined_name` CHAR, `parent` CHAR, `ts_params` JSON); CREATE TABLE IF NOT EXISTS `cat_cash_flow_articles` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `definition` CHAR, `sorting_field` INT, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_users` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `invalid` BOOLEAN, `note` CHAR, `ancillary` BOOLEAN, `user_ib_uid` CHAR, `user_fresh_uid` CHAR, `id` CHAR, `predefined_name` CHAR, `ts_extra_fields` JSON, `ts_contact_information` JSON); CREATE TABLE IF NOT EXISTS `cat_nom` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `article` CHAR, `nom_kind` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_destinations` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `КоличествоРеквизитов` CHAR, `КоличествоСведений` CHAR, `used` BOOLEAN, `predefined_name` CHAR, `parent` CHAR, `ts_extra_fields` JSON, `ts_extra_properties` JSON); CREATE TABLE IF NOT EXISTS `cat_cashboxes` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `funds_currency` CHAR, `predefined_name` CHAR, `ts_contact_information` JSON, `ts_extra_fields` JSON); CREATE TABLE IF NOT EXISTS `cat_users_acl` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `prefix` CHAR, `СуффиксБазы` CHAR, `predefined_name` CHAR, `owner` CHAR, `ts_acl_objs` JSON); CREATE TABLE IF NOT EXISTS `cat_meta_ids` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `full_moniker` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_property_values_hierarchy` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `heft` FLOAT, `full_name` CHAR, `predefined_name` CHAR, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_property_values` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `heft` FLOAT, `full_name` CHAR, `predefined_name` CHAR, `owner` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_nom_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `nom_type` CHAR, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_contact_information_kinds` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `type` CHAR, `ВидПоляДругое` CHAR, `used` BOOLEAN, `mandatory_fields` BOOLEAN, `predefined_name` CHAR, `parent` CHAR); CREATE TABLE IF NOT EXISTS `cat_currencies` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `name_full` CHAR, `extra_charge` FLOAT, `main_currency` CHAR, `parameters_russian_recipe` CHAR, `predefined_name` CHAR); CREATE TABLE IF NOT EXISTS `cat_scheme_settings` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `obj` CHAR, `user` CHAR, `order` INT, `query` CHAR, `date_from` Date, `date_till` Date, `formula` CHAR, `tag` CHAR, `ts_fields` JSON, `ts_sorting` JSON, `ts_dimensions` JSON, `ts_resources` JSON, `ts_selection` JSON, `ts_params` JSON, `ts_composition` JSON); CREATE TABLE IF NOT EXISTS `cat_meta_fields` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cat_meta_objs` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN); CREATE TABLE IF NOT EXISTS `cch_predefined_elmnts` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `value` CHAR, `value_T` CHAR, `definition` CHAR, `synonym` CHAR, `list` INT, `zone` INT, `predefined_name` CHAR, `parent` CHAR, `type` CHAR, `ts_elmnts` JSON); CREATE TABLE IF NOT EXISTS `cch_properties` (ref CHAR PRIMARY KEY NOT NULL, `_deleted` BOOLEAN, id CHAR, name CHAR, is_folder BOOLEAN, `shown` BOOLEAN, `extra_values_owner` CHAR, `available` BOOLEAN, `caption` CHAR, `mandatory` BOOLEAN, `note` CHAR, `destination` CHAR, `tooltip` CHAR, `is_extra_property` BOOLEAN, `list` BOOLEAN, `predefined_name` CHAR, `type` JSON, `ts_extra_fields_dependencies` JSON); CREATE TABLE IF NOT EXISTS `enm_nom_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_contact_information_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_reduce_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_caching_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_unload_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_obj_delivery_states` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_comparison_types` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_sort_directions` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); CREATE TABLE IF NOT EXISTS `enm_accumulation_record_type` (ref CHAR PRIMARY KEY NOT NULL, sequence INT, synonym CHAR); ', []);

$p.md.create_managers=function(){
$p.enm.accumulation_record_type = new $p.EnumManager('enm.accumulation_record_type');
$p.enm.sort_directions = new $p.EnumManager('enm.sort_directions');
$p.enm.comparison_types = new $p.EnumManager('enm.comparison_types');
$p.enm.obj_delivery_states = new $p.EnumManager('enm.obj_delivery_states');
$p.enm.unload_type = new $p.EnumManager('enm.unload_type');
$p.enm.caching_type = new $p.EnumManager('enm.caching_type');
$p.enm.reduce_type = new $p.EnumManager('enm.reduce_type');
$p.enm.contact_information_types = new $p.EnumManager('enm.contact_information_types');
$p.enm.nom_types = new $p.EnumManager('enm.nom_types');
$p.ireg.log = new $p.LogManager('ireg.$log');

/**
* ### План видов характеристик ДополнительныеРеквизитыИСведения
* Дополнительные реквизиты и сведения
* @class CchProperties
* @extends CatObj
* @constructor 
*/
function CchProperties(attr, manager){CchProperties.superclass.constructor.call(this, attr, manager)}
CchProperties._extend($p.CatObj);
$p.CchProperties = CchProperties;
CchProperties.prototype.__define({shown: {get: function(){return this._getter('shown')}, set: function(v){this._setter('shown',v)}, enumerable: true, configurable: true},
extra_values_owner: {get: function(){return this._getter('extra_values_owner')}, set: function(v){this._setter('extra_values_owner',v)}, enumerable: true, configurable: true},
available: {get: function(){return this._getter('available')}, set: function(v){this._setter('available',v)}, enumerable: true, configurable: true},
caption: {get: function(){return this._getter('caption')}, set: function(v){this._setter('caption',v)}, enumerable: true, configurable: true},
mandatory: {get: function(){return this._getter('mandatory')}, set: function(v){this._setter('mandatory',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
destination: {get: function(){return this._getter('destination')}, set: function(v){this._setter('destination',v)}, enumerable: true, configurable: true},
tooltip: {get: function(){return this._getter('tooltip')}, set: function(v){this._setter('tooltip',v)}, enumerable: true, configurable: true},
is_extra_property: {get: function(){return this._getter('is_extra_property')}, set: function(v){this._setter('is_extra_property',v)}, enumerable: true, configurable: true},
list: {get: function(){return this._getter('list')}, set: function(v){this._setter('list',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true}});
function CchPropertiesExtra_fields_dependenciesRow(owner){CchPropertiesExtra_fields_dependenciesRow.superclass.constructor.call(this, owner)};
CchPropertiesExtra_fields_dependenciesRow._extend($p.TabularSectionRow);
$p.CchPropertiesExtra_fields_dependenciesRow = CchPropertiesExtra_fields_dependenciesRow;
CchPropertiesExtra_fields_dependenciesRow.prototype.__define({ЗависимоеСвойство: {get: function(){return this._getter('ЗависимоеСвойство')}, set: function(v){this._setter('ЗависимоеСвойство',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
condition: {get: function(){return this._getter('condition')}, set: function(v){this._setter('condition',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true}});
CchProperties.prototype.__define('extra_fields_dependencies', {get: function(){return this._getter_ts('extra_fields_dependencies')}, set: function(v){this._setter_ts('extra_fields_dependencies',v)}, enumerable: true, configurable: true});
$p.cch.properties = new $p.ChartOfCharacteristicManager('cch.properties');

/**
* ### План видов характеристик ПредопределенныеЭлементы
* Хранит значения настроек и параметров подсистем
* @class CchPredefined_elmnts
* @extends CatObj
* @constructor 
*/
function CchPredefined_elmnts(attr, manager){CchPredefined_elmnts.superclass.constructor.call(this, attr, manager)}
CchPredefined_elmnts._extend($p.CatObj);
$p.CchPredefined_elmnts = CchPredefined_elmnts;
CchPredefined_elmnts.prototype.__define({value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
definition: {get: function(){return this._getter('definition')}, set: function(v){this._setter('definition',v)}, enumerable: true, configurable: true},
synonym: {get: function(){return this._getter('synonym')}, set: function(v){this._setter('synonym',v)}, enumerable: true, configurable: true},
list: {get: function(){return this._getter('list')}, set: function(v){this._setter('list',v)}, enumerable: true, configurable: true},
zone: {get: function(){return this._getter('zone')}, set: function(v){this._setter('zone',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true}});
function CchPredefined_elmntsElmntsRow(owner){CchPredefined_elmntsElmntsRow.superclass.constructor.call(this, owner)};
CchPredefined_elmntsElmntsRow._extend($p.TabularSectionRow);
$p.CchPredefined_elmntsElmntsRow = CchPredefined_elmntsElmntsRow;
CchPredefined_elmntsElmntsRow.prototype.__define({value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
elm: {get: function(){return this._getter('elm')}, set: function(v){this._setter('elm',v)}, enumerable: true, configurable: true}});
CchPredefined_elmnts.prototype.__define('elmnts', {get: function(){return this._getter_ts('elmnts')}, set: function(v){this._setter_ts('elmnts',v)}, enumerable: true, configurable: true});
$p.cch.predefined_elmnts = new $p.ChartOfCharacteristicManager('cch.predefined_elmnts');

/**
* ### Справочник undefined
* undefined
* @class CatMeta_objs
* @extends CatObj
* @constructor 
*/
function CatMeta_objs(attr, manager){CatMeta_objs.superclass.constructor.call(this, attr, manager)}
CatMeta_objs._extend($p.CatObj);
$p.CatMeta_objs = CatMeta_objs;
$p.cat.meta_objs = new $p.CatManager('cat.meta_objs');

/**
* ### Справочник undefined
* undefined
* @class CatMeta_fields
* @extends CatObj
* @constructor 
*/
function CatMeta_fields(attr, manager){CatMeta_fields.superclass.constructor.call(this, attr, manager)}
CatMeta_fields._extend($p.CatObj);
$p.CatMeta_fields = CatMeta_fields;
$p.cat.meta_fields = new $p.CatManager('cat.meta_fields');

/**
* ### Справочник scheme_settings
* Настройки отчетов и списков
* @class CatScheme_settings
* @extends CatObj
* @constructor 
*/
function CatScheme_settings(attr, manager){CatScheme_settings.superclass.constructor.call(this, attr, manager)}
CatScheme_settings._extend($p.CatObj);
$p.CatScheme_settings = CatScheme_settings;
CatScheme_settings.prototype.__define({obj: {get: function(){return this._getter('obj')}, set: function(v){this._setter('obj',v)}, enumerable: true, configurable: true},
user: {get: function(){return this._getter('user')}, set: function(v){this._setter('user',v)}, enumerable: true, configurable: true},
order: {get: function(){return this._getter('order')}, set: function(v){this._setter('order',v)}, enumerable: true, configurable: true},
query: {get: function(){return this._getter('query')}, set: function(v){this._setter('query',v)}, enumerable: true, configurable: true},
date_from: {get: function(){return this._getter('date_from')}, set: function(v){this._setter('date_from',v)}, enumerable: true, configurable: true},
date_till: {get: function(){return this._getter('date_till')}, set: function(v){this._setter('date_till',v)}, enumerable: true, configurable: true},
formula: {get: function(){return this._getter('formula')}, set: function(v){this._setter('formula',v)}, enumerable: true, configurable: true},
tag: {get: function(){return this._getter('tag')}, set: function(v){this._setter('tag',v)}, enumerable: true, configurable: true}});
function CatScheme_settingsFieldsRow(owner){CatScheme_settingsFieldsRow.superclass.constructor.call(this, owner)};
CatScheme_settingsFieldsRow._extend($p.TabularSectionRow);
$p.CatScheme_settingsFieldsRow = CatScheme_settingsFieldsRow;
CatScheme_settingsFieldsRow.prototype.__define({parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
width: {get: function(){return this._getter('width')}, set: function(v){this._setter('width',v)}, enumerable: true, configurable: true},
caption: {get: function(){return this._getter('caption')}, set: function(v){this._setter('caption',v)}, enumerable: true, configurable: true},
tooltip: {get: function(){return this._getter('tooltip')}, set: function(v){this._setter('tooltip',v)}, enumerable: true, configurable: true},
ctrl_type: {get: function(){return this._getter('ctrl_type')}, set: function(v){this._setter('ctrl_type',v)}, enumerable: true, configurable: true},
formatter: {get: function(){return this._getter('formatter')}, set: function(v){this._setter('formatter',v)}, enumerable: true, configurable: true},
editor: {get: function(){return this._getter('editor')}, set: function(v){this._setter('editor',v)}, enumerable: true, configurable: true}});
CatScheme_settings.prototype.__define('fields', {get: function(){return this._getter_ts('fields')}, set: function(v){this._setter_ts('fields',v)}, enumerable: true, configurable: true});
function CatScheme_settingsSortingRow(owner){CatScheme_settingsSortingRow.superclass.constructor.call(this, owner)};
CatScheme_settingsSortingRow._extend($p.TabularSectionRow);
$p.CatScheme_settingsSortingRow = CatScheme_settingsSortingRow;
CatScheme_settingsSortingRow.prototype.__define({parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
width: {get: function(){return this._getter('width')}, set: function(v){this._setter('width',v)}, enumerable: true, configurable: true},
caption: {get: function(){return this._getter('caption')}, set: function(v){this._setter('caption',v)}, enumerable: true, configurable: true},
tooltip: {get: function(){return this._getter('tooltip')}, set: function(v){this._setter('tooltip',v)}, enumerable: true, configurable: true},
ctrl_type: {get: function(){return this._getter('ctrl_type')}, set: function(v){this._setter('ctrl_type',v)}, enumerable: true, configurable: true},
formatter: {get: function(){return this._getter('formatter')}, set: function(v){this._setter('formatter',v)}, enumerable: true, configurable: true},
editor: {get: function(){return this._getter('editor')}, set: function(v){this._setter('editor',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
direction: {get: function(){return this._getter('direction')}, set: function(v){this._setter('direction',v)}, enumerable: true, configurable: true}});
CatScheme_settings.prototype.__define('sorting', {get: function(){return this._getter_ts('sorting')}, set: function(v){this._setter_ts('sorting',v)}, enumerable: true, configurable: true});
function CatScheme_settingsDimensionsRow(owner){CatScheme_settingsDimensionsRow.superclass.constructor.call(this, owner)};
CatScheme_settingsDimensionsRow._extend($p.TabularSectionRow);
$p.CatScheme_settingsDimensionsRow = CatScheme_settingsDimensionsRow;
CatScheme_settingsDimensionsRow.prototype.__define({parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
width: {get: function(){return this._getter('width')}, set: function(v){this._setter('width',v)}, enumerable: true, configurable: true},
caption: {get: function(){return this._getter('caption')}, set: function(v){this._setter('caption',v)}, enumerable: true, configurable: true},
tooltip: {get: function(){return this._getter('tooltip')}, set: function(v){this._setter('tooltip',v)}, enumerable: true, configurable: true},
ctrl_type: {get: function(){return this._getter('ctrl_type')}, set: function(v){this._setter('ctrl_type',v)}, enumerable: true, configurable: true},
formatter: {get: function(){return this._getter('formatter')}, set: function(v){this._setter('formatter',v)}, enumerable: true, configurable: true},
editor: {get: function(){return this._getter('editor')}, set: function(v){this._setter('editor',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
direction: {get: function(){return this._getter('direction')}, set: function(v){this._setter('direction',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true}});
CatScheme_settings.prototype.__define('dimensions', {get: function(){return this._getter_ts('dimensions')}, set: function(v){this._setter_ts('dimensions',v)}, enumerable: true, configurable: true});
function CatScheme_settingsResourcesRow(owner){CatScheme_settingsResourcesRow.superclass.constructor.call(this, owner)};
CatScheme_settingsResourcesRow._extend($p.TabularSectionRow);
$p.CatScheme_settingsResourcesRow = CatScheme_settingsResourcesRow;
CatScheme_settingsResourcesRow.prototype.__define({parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
width: {get: function(){return this._getter('width')}, set: function(v){this._setter('width',v)}, enumerable: true, configurable: true},
caption: {get: function(){return this._getter('caption')}, set: function(v){this._setter('caption',v)}, enumerable: true, configurable: true},
tooltip: {get: function(){return this._getter('tooltip')}, set: function(v){this._setter('tooltip',v)}, enumerable: true, configurable: true},
ctrl_type: {get: function(){return this._getter('ctrl_type')}, set: function(v){this._setter('ctrl_type',v)}, enumerable: true, configurable: true},
formatter: {get: function(){return this._getter('formatter')}, set: function(v){this._setter('formatter',v)}, enumerable: true, configurable: true},
editor: {get: function(){return this._getter('editor')}, set: function(v){this._setter('editor',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
direction: {get: function(){return this._getter('direction')}, set: function(v){this._setter('direction',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
formula: {get: function(){return this._getter('formula')}, set: function(v){this._setter('formula',v)}, enumerable: true, configurable: true}});
CatScheme_settings.prototype.__define('resources', {get: function(){return this._getter_ts('resources')}, set: function(v){this._setter_ts('resources',v)}, enumerable: true, configurable: true});
function CatScheme_settingsSelectionRow(owner){CatScheme_settingsSelectionRow.superclass.constructor.call(this, owner)};
CatScheme_settingsSelectionRow._extend($p.TabularSectionRow);
$p.CatScheme_settingsSelectionRow = CatScheme_settingsSelectionRow;
CatScheme_settingsSelectionRow.prototype.__define({parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
width: {get: function(){return this._getter('width')}, set: function(v){this._setter('width',v)}, enumerable: true, configurable: true},
caption: {get: function(){return this._getter('caption')}, set: function(v){this._setter('caption',v)}, enumerable: true, configurable: true},
tooltip: {get: function(){return this._getter('tooltip')}, set: function(v){this._setter('tooltip',v)}, enumerable: true, configurable: true},
ctrl_type: {get: function(){return this._getter('ctrl_type')}, set: function(v){this._setter('ctrl_type',v)}, enumerable: true, configurable: true},
formatter: {get: function(){return this._getter('formatter')}, set: function(v){this._setter('formatter',v)}, enumerable: true, configurable: true},
editor: {get: function(){return this._getter('editor')}, set: function(v){this._setter('editor',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
direction: {get: function(){return this._getter('direction')}, set: function(v){this._setter('direction',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
formula: {get: function(){return this._getter('formula')}, set: function(v){this._setter('formula',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
left_value: {get: function(){return this._getter('left_value')}, set: function(v){this._setter('left_value',v)}, enumerable: true, configurable: true},
comparison_type: {get: function(){return this._getter('comparison_type')}, set: function(v){this._setter('comparison_type',v)}, enumerable: true, configurable: true},
right_value: {get: function(){return this._getter('right_value')}, set: function(v){this._setter('right_value',v)}, enumerable: true, configurable: true}});
CatScheme_settings.prototype.__define('selection', {get: function(){return this._getter_ts('selection')}, set: function(v){this._setter_ts('selection',v)}, enumerable: true, configurable: true});
function CatScheme_settingsParamsRow(owner){CatScheme_settingsParamsRow.superclass.constructor.call(this, owner)};
CatScheme_settingsParamsRow._extend($p.TabularSectionRow);
$p.CatScheme_settingsParamsRow = CatScheme_settingsParamsRow;
CatScheme_settingsParamsRow.prototype.__define({parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
width: {get: function(){return this._getter('width')}, set: function(v){this._setter('width',v)}, enumerable: true, configurable: true},
caption: {get: function(){return this._getter('caption')}, set: function(v){this._setter('caption',v)}, enumerable: true, configurable: true},
tooltip: {get: function(){return this._getter('tooltip')}, set: function(v){this._setter('tooltip',v)}, enumerable: true, configurable: true},
ctrl_type: {get: function(){return this._getter('ctrl_type')}, set: function(v){this._setter('ctrl_type',v)}, enumerable: true, configurable: true},
formatter: {get: function(){return this._getter('formatter')}, set: function(v){this._setter('formatter',v)}, enumerable: true, configurable: true},
editor: {get: function(){return this._getter('editor')}, set: function(v){this._setter('editor',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
direction: {get: function(){return this._getter('direction')}, set: function(v){this._setter('direction',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
formula: {get: function(){return this._getter('formula')}, set: function(v){this._setter('formula',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
left_value: {get: function(){return this._getter('left_value')}, set: function(v){this._setter('left_value',v)}, enumerable: true, configurable: true},
comparison_type: {get: function(){return this._getter('comparison_type')}, set: function(v){this._setter('comparison_type',v)}, enumerable: true, configurable: true},
right_value: {get: function(){return this._getter('right_value')}, set: function(v){this._setter('right_value',v)}, enumerable: true, configurable: true},
param: {get: function(){return this._getter('param')}, set: function(v){this._setter('param',v)}, enumerable: true, configurable: true},
value_type: {get: function(){return this._getter('value_type')}, set: function(v){this._setter('value_type',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true}});
CatScheme_settings.prototype.__define('params', {get: function(){return this._getter_ts('params')}, set: function(v){this._setter_ts('params',v)}, enumerable: true, configurable: true});
function CatScheme_settingsCompositionRow(owner){CatScheme_settingsCompositionRow.superclass.constructor.call(this, owner)};
CatScheme_settingsCompositionRow._extend($p.TabularSectionRow);
$p.CatScheme_settingsCompositionRow = CatScheme_settingsCompositionRow;
CatScheme_settingsCompositionRow.prototype.__define({parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
width: {get: function(){return this._getter('width')}, set: function(v){this._setter('width',v)}, enumerable: true, configurable: true},
caption: {get: function(){return this._getter('caption')}, set: function(v){this._setter('caption',v)}, enumerable: true, configurable: true},
tooltip: {get: function(){return this._getter('tooltip')}, set: function(v){this._setter('tooltip',v)}, enumerable: true, configurable: true},
ctrl_type: {get: function(){return this._getter('ctrl_type')}, set: function(v){this._setter('ctrl_type',v)}, enumerable: true, configurable: true},
formatter: {get: function(){return this._getter('formatter')}, set: function(v){this._setter('formatter',v)}, enumerable: true, configurable: true},
editor: {get: function(){return this._getter('editor')}, set: function(v){this._setter('editor',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
direction: {get: function(){return this._getter('direction')}, set: function(v){this._setter('direction',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
formula: {get: function(){return this._getter('formula')}, set: function(v){this._setter('formula',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
left_value: {get: function(){return this._getter('left_value')}, set: function(v){this._setter('left_value',v)}, enumerable: true, configurable: true},
comparison_type: {get: function(){return this._getter('comparison_type')}, set: function(v){this._setter('comparison_type',v)}, enumerable: true, configurable: true},
right_value: {get: function(){return this._getter('right_value')}, set: function(v){this._setter('right_value',v)}, enumerable: true, configurable: true},
param: {get: function(){return this._getter('param')}, set: function(v){this._setter('param',v)}, enumerable: true, configurable: true},
value_type: {get: function(){return this._getter('value_type')}, set: function(v){this._setter('value_type',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true},
use: {get: function(){return this._getter('use')}, set: function(v){this._setter('use',v)}, enumerable: true, configurable: true},
field: {get: function(){return this._getter('field')}, set: function(v){this._setter('field',v)}, enumerable: true, configurable: true},
kind: {get: function(){return this._getter('kind')}, set: function(v){this._setter('kind',v)}, enumerable: true, configurable: true},
definition: {get: function(){return this._getter('definition')}, set: function(v){this._setter('definition',v)}, enumerable: true, configurable: true}});
CatScheme_settings.prototype.__define('composition', {get: function(){return this._getter_ts('composition')}, set: function(v){this._setter_ts('composition',v)}, enumerable: true, configurable: true});
$p.cat.scheme_settings = new $p.CatManager('cat.scheme_settings');

/**
* ### Справочник Валюты
* Валюты, используемые при расчетах
* @class CatCurrencies
* @extends CatObj
* @constructor 
*/
function CatCurrencies(attr, manager){CatCurrencies.superclass.constructor.call(this, attr, manager)}
CatCurrencies._extend($p.CatObj);
$p.CatCurrencies = CatCurrencies;
CatCurrencies.prototype.__define({name_full: {get: function(){return this._getter('name_full')}, set: function(v){this._setter('name_full',v)}, enumerable: true, configurable: true},
extra_charge: {get: function(){return this._getter('extra_charge')}, set: function(v){this._setter('extra_charge',v)}, enumerable: true, configurable: true},
main_currency: {get: function(){return this._getter('main_currency')}, set: function(v){this._setter('main_currency',v)}, enumerable: true, configurable: true},
parameters_russian_recipe: {get: function(){return this._getter('parameters_russian_recipe')}, set: function(v){this._setter('parameters_russian_recipe',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true}});
$p.cat.currencies = new $p.CatManager('cat.currencies');

/**
* ### Справочник ВидыКонтактнойИнформации
* Виды контактной информации
* @class CatContact_information_kinds
* @extends CatObj
* @constructor 
*/
function CatContact_information_kinds(attr, manager){CatContact_information_kinds.superclass.constructor.call(this, attr, manager)}
CatContact_information_kinds._extend($p.CatObj);
$p.CatContact_information_kinds = CatContact_information_kinds;
CatContact_information_kinds.prototype.__define({type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true},
ВидПоляДругое: {get: function(){return this._getter('ВидПоляДругое')}, set: function(v){this._setter('ВидПоляДругое',v)}, enumerable: true, configurable: true},
used: {get: function(){return this._getter('used')}, set: function(v){this._setter('used',v)}, enumerable: true, configurable: true},
mandatory_fields: {get: function(){return this._getter('mandatory_fields')}, set: function(v){this._setter('mandatory_fields',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.contact_information_kinds = new $p.CatManager('cat.contact_information_kinds');

/**
* ### Справочник ВидыНоменклатуры
* Виды номенклатуры
* @class CatNom_kinds
* @extends CatObj
* @constructor 
*/
function CatNom_kinds(attr, manager){CatNom_kinds.superclass.constructor.call(this, attr, manager)}
CatNom_kinds._extend($p.CatObj);
$p.CatNom_kinds = CatNom_kinds;
CatNom_kinds.prototype.__define({nom_type: {get: function(){return this._getter('nom_type')}, set: function(v){this._setter('nom_type',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.nom_kinds = new $p.CatManager('cat.nom_kinds');

/**
* ### Справочник ЗначенияСвойствОбъектов
* Дополнительные значения
* @class CatProperty_values
* @extends CatObj
* @constructor 
*/
function CatProperty_values(attr, manager){CatProperty_values.superclass.constructor.call(this, attr, manager)}
CatProperty_values._extend($p.CatObj);
$p.CatProperty_values = CatProperty_values;
CatProperty_values.prototype.__define({heft: {get: function(){return this._getter('heft')}, set: function(v){this._setter('heft',v)}, enumerable: true, configurable: true},
full_name: {get: function(){return this._getter('full_name')}, set: function(v){this._setter('full_name',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.property_values = new $p.CatManager('cat.property_values');

/**
* ### Справочник ЗначенияСвойствОбъектовИерархия
* Дополнительные значения (иерархия)
* @class CatProperty_values_hierarchy
* @extends CatObj
* @constructor 
*/
function CatProperty_values_hierarchy(attr, manager){CatProperty_values_hierarchy.superclass.constructor.call(this, attr, manager)}
CatProperty_values_hierarchy._extend($p.CatObj);
$p.CatProperty_values_hierarchy = CatProperty_values_hierarchy;
CatProperty_values_hierarchy.prototype.__define({heft: {get: function(){return this._getter('heft')}, set: function(v){this._setter('heft',v)}, enumerable: true, configurable: true},
full_name: {get: function(){return this._getter('full_name')}, set: function(v){this._setter('full_name',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.property_values_hierarchy = new $p.CatManager('cat.property_values_hierarchy');

/**
* ### Справочник ИдентификаторыОбъектовМетаданных
* Идентификаторы объектов метаданных для использования в базе данных.
* @class CatMeta_ids
* @extends CatObj
* @constructor 
*/
function CatMeta_ids(attr, manager){CatMeta_ids.superclass.constructor.call(this, attr, manager)}
CatMeta_ids._extend($p.CatObj);
$p.CatMeta_ids = CatMeta_ids;
CatMeta_ids.prototype.__define({full_moniker: {get: function(){return this._getter('full_moniker')}, set: function(v){this._setter('full_moniker',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.meta_ids = new $p.CatManager('cat.meta_ids');

/**
* ### Справочник ИнтеграцияПраваПользователей
* Права внешних пользователей
* @class CatUsers_acl
* @extends CatObj
* @constructor 
*/
function CatUsers_acl(attr, manager){CatUsers_acl.superclass.constructor.call(this, attr, manager)}
CatUsers_acl._extend($p.CatObj);
$p.CatUsers_acl = CatUsers_acl;
CatUsers_acl.prototype.__define({prefix: {get: function(){return this._getter('prefix')}, set: function(v){this._setter('prefix',v)}, enumerable: true, configurable: true},
СуффиксБазы: {get: function(){return this._getter('СуффиксБазы')}, set: function(v){this._setter('СуффиксБазы',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
owner: {get: function(){return this._getter('owner')}, set: function(v){this._setter('owner',v)}, enumerable: true, configurable: true}});
function CatUsers_aclAcl_objsRow(owner){CatUsers_aclAcl_objsRow.superclass.constructor.call(this, owner)};
CatUsers_aclAcl_objsRow._extend($p.TabularSectionRow);
$p.CatUsers_aclAcl_objsRow = CatUsers_aclAcl_objsRow;
CatUsers_aclAcl_objsRow.prototype.__define({acl_obj: {get: function(){return this._getter('acl_obj')}, set: function(v){this._setter('acl_obj',v)}, enumerable: true, configurable: true},
type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true},
by_default: {get: function(){return this._getter('by_default')}, set: function(v){this._setter('by_default',v)}, enumerable: true, configurable: true}});
CatUsers_acl.prototype.__define('acl_objs', {get: function(){return this._getter_ts('acl_objs')}, set: function(v){this._setter_ts('acl_objs',v)}, enumerable: true, configurable: true});
$p.cat.users_acl = new $p.CatManager('cat.users_acl');

/**
* ### Справочник Кассы
* Список мест фактического хранения и движения наличных денежных средств.
* @class CatCashboxes
* @extends CatObj
* @constructor 
*/
function CatCashboxes(attr, manager){CatCashboxes.superclass.constructor.call(this, attr, manager)}
CatCashboxes._extend($p.CatObj);
$p.CatCashboxes = CatCashboxes;
CatCashboxes.prototype.__define({funds_currency: {get: function(){return this._getter('funds_currency')}, set: function(v){this._setter('funds_currency',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true}});
function CatCashboxesContact_informationRow(owner){CatCashboxesContact_informationRow.superclass.constructor.call(this, owner)};
CatCashboxesContact_informationRow._extend($p.TabularSectionRow);
$p.CatCashboxesContact_informationRow = CatCashboxesContact_informationRow;
CatCashboxesContact_informationRow.prototype.__define({type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true},
kind: {get: function(){return this._getter('kind')}, set: function(v){this._setter('kind',v)}, enumerable: true, configurable: true},
presentation: {get: function(){return this._getter('presentation')}, set: function(v){this._setter('presentation',v)}, enumerable: true, configurable: true},
values_fields: {get: function(){return this._getter('values_fields')}, set: function(v){this._setter('values_fields',v)}, enumerable: true, configurable: true},
country: {get: function(){return this._getter('country')}, set: function(v){this._setter('country',v)}, enumerable: true, configurable: true},
region: {get: function(){return this._getter('region')}, set: function(v){this._setter('region',v)}, enumerable: true, configurable: true},
city: {get: function(){return this._getter('city')}, set: function(v){this._setter('city',v)}, enumerable: true, configurable: true},
АдресЭП: {get: function(){return this._getter('АдресЭП')}, set: function(v){this._setter('АдресЭП',v)}, enumerable: true, configurable: true},
server_domain_name: {get: function(){return this._getter('server_domain_name')}, set: function(v){this._setter('server_domain_name',v)}, enumerable: true, configurable: true},
phone_number: {get: function(){return this._getter('phone_number')}, set: function(v){this._setter('phone_number',v)}, enumerable: true, configurable: true},
phone_without_codes: {get: function(){return this._getter('phone_without_codes')}, set: function(v){this._setter('phone_without_codes',v)}, enumerable: true, configurable: true},
ВидДляСписка: {get: function(){return this._getter('ВидДляСписка')}, set: function(v){this._setter('ВидДляСписка',v)}, enumerable: true, configurable: true},
ДействуетС: {get: function(){return this._getter('ДействуетС')}, set: function(v){this._setter('ДействуетС',v)}, enumerable: true, configurable: true}});
CatCashboxes.prototype.__define('contact_information', {get: function(){return this._getter_ts('contact_information')}, set: function(v){this._setter_ts('contact_information',v)}, enumerable: true, configurable: true});
function CatCashboxesExtra_fieldsRow(owner){CatCashboxesExtra_fieldsRow.superclass.constructor.call(this, owner)};
CatCashboxesExtra_fieldsRow._extend($p.TabularSectionRow);
$p.CatCashboxesExtra_fieldsRow = CatCashboxesExtra_fieldsRow;
CatCashboxesExtra_fieldsRow.prototype.__define({type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true},
kind: {get: function(){return this._getter('kind')}, set: function(v){this._setter('kind',v)}, enumerable: true, configurable: true},
presentation: {get: function(){return this._getter('presentation')}, set: function(v){this._setter('presentation',v)}, enumerable: true, configurable: true},
values_fields: {get: function(){return this._getter('values_fields')}, set: function(v){this._setter('values_fields',v)}, enumerable: true, configurable: true},
country: {get: function(){return this._getter('country')}, set: function(v){this._setter('country',v)}, enumerable: true, configurable: true},
region: {get: function(){return this._getter('region')}, set: function(v){this._setter('region',v)}, enumerable: true, configurable: true},
city: {get: function(){return this._getter('city')}, set: function(v){this._setter('city',v)}, enumerable: true, configurable: true},
АдресЭП: {get: function(){return this._getter('АдресЭП')}, set: function(v){this._setter('АдресЭП',v)}, enumerable: true, configurable: true},
server_domain_name: {get: function(){return this._getter('server_domain_name')}, set: function(v){this._setter('server_domain_name',v)}, enumerable: true, configurable: true},
phone_number: {get: function(){return this._getter('phone_number')}, set: function(v){this._setter('phone_number',v)}, enumerable: true, configurable: true},
phone_without_codes: {get: function(){return this._getter('phone_without_codes')}, set: function(v){this._setter('phone_without_codes',v)}, enumerable: true, configurable: true},
ВидДляСписка: {get: function(){return this._getter('ВидДляСписка')}, set: function(v){this._setter('ВидДляСписка',v)}, enumerable: true, configurable: true},
ДействуетС: {get: function(){return this._getter('ДействуетС')}, set: function(v){this._setter('ДействуетС',v)}, enumerable: true, configurable: true},
property: {get: function(){return this._getter('property')}, set: function(v){this._setter('property',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
txt_row: {get: function(){return this._getter('txt_row')}, set: function(v){this._setter('txt_row',v)}, enumerable: true, configurable: true}});
CatCashboxes.prototype.__define('extra_fields', {get: function(){return this._getter_ts('extra_fields')}, set: function(v){this._setter_ts('extra_fields',v)}, enumerable: true, configurable: true});
$p.cat.cashboxes = new $p.CatManager('cat.cashboxes');

/**
* ### Справочник НаборыДополнительныхРеквизитовИСведений
* Наборы дополнительных реквизитов и сведений
* @class CatDestinations
* @extends CatObj
* @constructor 
*/
function CatDestinations(attr, manager){CatDestinations.superclass.constructor.call(this, attr, manager)}
CatDestinations._extend($p.CatObj);
$p.CatDestinations = CatDestinations;
CatDestinations.prototype.__define({КоличествоРеквизитов: {get: function(){return this._getter('КоличествоРеквизитов')}, set: function(v){this._setter('КоличествоРеквизитов',v)}, enumerable: true, configurable: true},
КоличествоСведений: {get: function(){return this._getter('КоличествоСведений')}, set: function(v){this._setter('КоличествоСведений',v)}, enumerable: true, configurable: true},
used: {get: function(){return this._getter('used')}, set: function(v){this._setter('used',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
function CatDestinationsExtra_fieldsRow(owner){CatDestinationsExtra_fieldsRow.superclass.constructor.call(this, owner)};
CatDestinationsExtra_fieldsRow._extend($p.TabularSectionRow);
$p.CatDestinationsExtra_fieldsRow = CatDestinationsExtra_fieldsRow;
CatDestinationsExtra_fieldsRow.prototype.__define({property: {get: function(){return this._getter('property')}, set: function(v){this._setter('property',v)}, enumerable: true, configurable: true},
_deleted: {get: function(){return this._getter('_deleted')}, set: function(v){this._setter('_deleted',v)}, enumerable: true, configurable: true}});
CatDestinations.prototype.__define('extra_fields', {get: function(){return this._getter_ts('extra_fields')}, set: function(v){this._setter_ts('extra_fields',v)}, enumerable: true, configurable: true});
function CatDestinationsExtra_propertiesRow(owner){CatDestinationsExtra_propertiesRow.superclass.constructor.call(this, owner)};
CatDestinationsExtra_propertiesRow._extend($p.TabularSectionRow);
$p.CatDestinationsExtra_propertiesRow = CatDestinationsExtra_propertiesRow;
CatDestinationsExtra_propertiesRow.prototype.__define({property: {get: function(){return this._getter('property')}, set: function(v){this._setter('property',v)}, enumerable: true, configurable: true},
_deleted: {get: function(){return this._getter('_deleted')}, set: function(v){this._setter('_deleted',v)}, enumerable: true, configurable: true},
property: {get: function(){return this._getter('property')}, set: function(v){this._setter('property',v)}, enumerable: true, configurable: true},
_deleted: {get: function(){return this._getter('_deleted')}, set: function(v){this._setter('_deleted',v)}, enumerable: true, configurable: true}});
CatDestinations.prototype.__define('extra_properties', {get: function(){return this._getter_ts('extra_properties')}, set: function(v){this._setter_ts('extra_properties',v)}, enumerable: true, configurable: true});
$p.cat.destinations = new $p.CatManager('cat.destinations');

/**
* ### Справочник Номенклатура
* Перечень товаров, продукции, материалов, полуфабрикатов, тары, услуг
* @class CatNom
* @extends CatObj
* @constructor 
*/
function CatNom(attr, manager){CatNom.superclass.constructor.call(this, attr, manager)}
CatNom._extend($p.CatObj);
$p.CatNom = CatNom;
CatNom.prototype.__define({article: {get: function(){return this._getter('article')}, set: function(v){this._setter('article',v)}, enumerable: true, configurable: true},
nom_kind: {get: function(){return this._getter('nom_kind')}, set: function(v){this._setter('nom_kind',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.nom = new $p.CatManager('cat.nom');

/**
* ### Справочник Пользователи
* Пользователи
* @class CatUsers
* @extends CatObj
* @constructor 
*/
function CatUsers(attr, manager){CatUsers.superclass.constructor.call(this, attr, manager)}
CatUsers._extend($p.CatObj);
$p.CatUsers = CatUsers;
CatUsers.prototype.__define({invalid: {get: function(){return this._getter('invalid')}, set: function(v){this._setter('invalid',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
ancillary: {get: function(){return this._getter('ancillary')}, set: function(v){this._setter('ancillary',v)}, enumerable: true, configurable: true},
user_ib_uid: {get: function(){return this._getter('user_ib_uid')}, set: function(v){this._setter('user_ib_uid',v)}, enumerable: true, configurable: true},
user_fresh_uid: {get: function(){return this._getter('user_fresh_uid')}, set: function(v){this._setter('user_fresh_uid',v)}, enumerable: true, configurable: true},
id: {get: function(){return this._getter('id')}, set: function(v){this._setter('id',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true}});
function CatUsersExtra_fieldsRow(owner){CatUsersExtra_fieldsRow.superclass.constructor.call(this, owner)};
CatUsersExtra_fieldsRow._extend($p.TabularSectionRow);
$p.CatUsersExtra_fieldsRow = CatUsersExtra_fieldsRow;
CatUsersExtra_fieldsRow.prototype.__define({property: {get: function(){return this._getter('property')}, set: function(v){this._setter('property',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
txt_row: {get: function(){return this._getter('txt_row')}, set: function(v){this._setter('txt_row',v)}, enumerable: true, configurable: true}});
CatUsers.prototype.__define('extra_fields', {get: function(){return this._getter_ts('extra_fields')}, set: function(v){this._setter_ts('extra_fields',v)}, enumerable: true, configurable: true});
function CatUsersContact_informationRow(owner){CatUsersContact_informationRow.superclass.constructor.call(this, owner)};
CatUsersContact_informationRow._extend($p.TabularSectionRow);
$p.CatUsersContact_informationRow = CatUsersContact_informationRow;
CatUsersContact_informationRow.prototype.__define({property: {get: function(){return this._getter('property')}, set: function(v){this._setter('property',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true},
txt_row: {get: function(){return this._getter('txt_row')}, set: function(v){this._setter('txt_row',v)}, enumerable: true, configurable: true},
type: {get: function(){return this._getter('type')}, set: function(v){this._setter('type',v)}, enumerable: true, configurable: true},
kind: {get: function(){return this._getter('kind')}, set: function(v){this._setter('kind',v)}, enumerable: true, configurable: true},
presentation: {get: function(){return this._getter('presentation')}, set: function(v){this._setter('presentation',v)}, enumerable: true, configurable: true},
values_fields: {get: function(){return this._getter('values_fields')}, set: function(v){this._setter('values_fields',v)}, enumerable: true, configurable: true},
country: {get: function(){return this._getter('country')}, set: function(v){this._setter('country',v)}, enumerable: true, configurable: true},
region: {get: function(){return this._getter('region')}, set: function(v){this._setter('region',v)}, enumerable: true, configurable: true},
city: {get: function(){return this._getter('city')}, set: function(v){this._setter('city',v)}, enumerable: true, configurable: true},
АдресЭП: {get: function(){return this._getter('АдресЭП')}, set: function(v){this._setter('АдресЭП',v)}, enumerable: true, configurable: true},
server_domain_name: {get: function(){return this._getter('server_domain_name')}, set: function(v){this._setter('server_domain_name',v)}, enumerable: true, configurable: true},
phone_number: {get: function(){return this._getter('phone_number')}, set: function(v){this._setter('phone_number',v)}, enumerable: true, configurable: true},
phone_without_codes: {get: function(){return this._getter('phone_without_codes')}, set: function(v){this._setter('phone_without_codes',v)}, enumerable: true, configurable: true},
ВидДляСписка: {get: function(){return this._getter('ВидДляСписка')}, set: function(v){this._setter('ВидДляСписка',v)}, enumerable: true, configurable: true}});
CatUsers.prototype.__define('contact_information', {get: function(){return this._getter_ts('contact_information')}, set: function(v){this._setter_ts('contact_information',v)}, enumerable: true, configurable: true});
$p.cat.users = new $p.CatManager('cat.users');

/**
* ### Справочник СтатьиДвиженияДенежныхСредств
* Перечень статей движения денежных средств (ДДС), используемых в предприятии для проведения анализа поступлений и расходов в разрезе статей движения денежных средств. 
* @class CatCash_flow_articles
* @extends CatObj
* @constructor 
*/
function CatCash_flow_articles(attr, manager){CatCash_flow_articles.superclass.constructor.call(this, attr, manager)}
CatCash_flow_articles._extend($p.CatObj);
$p.CatCash_flow_articles = CatCash_flow_articles;
CatCash_flow_articles.prototype.__define({definition: {get: function(){return this._getter('definition')}, set: function(v){this._setter('definition',v)}, enumerable: true, configurable: true},
sorting_field: {get: function(){return this._getter('sorting_field')}, set: function(v){this._setter('sorting_field',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
$p.cat.cash_flow_articles = new $p.CatManager('cat.cash_flow_articles');

/**
* ### Справочник Формулы
* Формулы пользователя, для выполнения при расчете спецификаций в справочниках Вставки, Соединения, Фурнитура и регистре Корректировки спецификации
* @class CatFormulas
* @extends CatObj
* @constructor 
*/
function CatFormulas(attr, manager){CatFormulas.superclass.constructor.call(this, attr, manager)}
CatFormulas._extend($p.CatObj);
$p.CatFormulas = CatFormulas;
CatFormulas.prototype.__define({formula: {get: function(){return this._getter('formula')}, set: function(v){this._setter('formula',v)}, enumerable: true, configurable: true},
leading_formula: {get: function(){return this._getter('leading_formula')}, set: function(v){this._setter('leading_formula',v)}, enumerable: true, configurable: true},
condition_formula: {get: function(){return this._getter('condition_formula')}, set: function(v){this._setter('condition_formula',v)}, enumerable: true, configurable: true},
definition: {get: function(){return this._getter('definition')}, set: function(v){this._setter('definition',v)}, enumerable: true, configurable: true},
template: {get: function(){return this._getter('template')}, set: function(v){this._setter('template',v)}, enumerable: true, configurable: true},
predefined_name: {get: function(){return this._getter('predefined_name')}, set: function(v){this._setter('predefined_name',v)}, enumerable: true, configurable: true},
parent: {get: function(){return this._getter('parent')}, set: function(v){this._setter('parent',v)}, enumerable: true, configurable: true}});
function CatFormulasParamsRow(owner){CatFormulasParamsRow.superclass.constructor.call(this, owner)};
CatFormulasParamsRow._extend($p.TabularSectionRow);
$p.CatFormulasParamsRow = CatFormulasParamsRow;
CatFormulasParamsRow.prototype.__define({param: {get: function(){return this._getter('param')}, set: function(v){this._setter('param',v)}, enumerable: true, configurable: true},
value: {get: function(){return this._getter('value')}, set: function(v){this._setter('value',v)}, enumerable: true, configurable: true}});
CatFormulas.prototype.__define('params', {get: function(){return this._getter_ts('params')}, set: function(v){this._setter_ts('params',v)}, enumerable: true, configurable: true});
$p.cat.formulas = new $p.CatManager('cat.formulas');

/**
* ### Документ ДвижениеДенег
* Перемещение денег
* @class DocCash_moving
* @extends DocObj
* @constructor 
*/
function DocCash_moving(attr, manager){DocCash_moving.superclass.constructor.call(this, attr, manager)}
DocCash_moving._extend($p.DocObj);
$p.DocCash_moving = DocCash_moving;
DocCash_moving.prototype.__define({sender: {get: function(){return this._getter('sender')}, set: function(v){this._setter('sender',v)}, enumerable: true, configurable: true},
recipient: {get: function(){return this._getter('recipient')}, set: function(v){this._setter('recipient',v)}, enumerable: true, configurable: true},
doc_amount: {get: function(){return this._getter('doc_amount')}, set: function(v){this._setter('doc_amount',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true},
responsible: {get: function(){return this._getter('responsible')}, set: function(v){this._setter('responsible',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true}});
$p.doc.cash_moving = new $p.DocManager('doc.cash_moving');

/**
* ### Регистр сведений log
* Журнал событий
* @class IregLog
* @extends RegisterRow
* @constructor 
*/
function IregLog(attr, manager){IregLog.superclass.constructor.call(this, attr, manager)}
IregLog._extend($p.RegisterRow);
$p.IregLog = IregLog;
IregLog.prototype.__define({date: {get: function(){return this._getter('date')}, set: function(v){this._setter('date',v)}, enumerable: true, configurable: true},
sequence: {get: function(){return this._getter('sequence')}, set: function(v){this._setter('sequence',v)}, enumerable: true, configurable: true},
class: {get: function(){return this._getter('class')}, set: function(v){this._setter('class',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
obj: {get: function(){return this._getter('obj')}, set: function(v){this._setter('obj',v)}, enumerable: true, configurable: true}});

/**
* ### Регистр сведений $log
* Журнал событий
* @class Ireg$log
* @extends RegisterRow
* @constructor 
*/
function Ireg$log(attr, manager){Ireg$log.superclass.constructor.call(this, attr, manager)}
Ireg$log._extend($p.RegisterRow);
$p.Ireg$log = Ireg$log;
Ireg$log.prototype.__define({date: {get: function(){return this._getter('date')}, set: function(v){this._setter('date',v)}, enumerable: true, configurable: true},
sequence: {get: function(){return this._getter('sequence')}, set: function(v){this._setter('sequence',v)}, enumerable: true, configurable: true},
class: {get: function(){return this._getter('class')}, set: function(v){this._setter('class',v)}, enumerable: true, configurable: true},
note: {get: function(){return this._getter('note')}, set: function(v){this._setter('note',v)}, enumerable: true, configurable: true},
obj: {get: function(){return this._getter('obj')}, set: function(v){this._setter('obj',v)}, enumerable: true, configurable: true}});
$p.ireg.$log = new $p.InfoRegManager('ireg.$log');

/**
* ### Обработка scheme_settings
* Варианты настроек
* @class DpScheme_settings
* @extends DataProcessorObj
* @constructor 
*/
function DpScheme_settings(attr, manager){DpScheme_settings.superclass.constructor.call(this, attr, manager)}
DpScheme_settings._extend($p.DataProcessorObj);
$p.DpScheme_settings = DpScheme_settings;
DpScheme_settings.prototype.__define({scheme: {get: function(){return this._getter('scheme')}, set: function(v){this._setter('scheme',v)}, enumerable: true, configurable: true}});
$p.dp.scheme_settings = new $p.DataProcessorsManager('dp.scheme_settings');

/**
* ### Отчет ДвижениеДенег
* Движение денег
* @class RepCash_moving
* @extends DataProcessorObj
* @constructor 
*/
function RepCash_moving(attr, manager){RepCash_moving.superclass.constructor.call(this, attr, manager)}
RepCash_moving._extend($p.DataProcessorObj);
$p.RepCash_moving = RepCash_moving;
function RepCash_movingCashboxesRow(owner){RepCash_movingCashboxesRow.superclass.constructor.call(this, owner)};
RepCash_movingCashboxesRow._extend($p.TabularSectionRow);
$p.RepCash_movingCashboxesRow = RepCash_movingCashboxesRow;
RepCash_movingCashboxesRow.prototype.__define({cashbox: {get: function(){return this._getter('cashbox')}, set: function(v){this._setter('cashbox',v)}, enumerable: true, configurable: true}});
RepCash_moving.prototype.__define('cashboxes', {get: function(){return this._getter_ts('cashboxes')}, set: function(v){this._setter_ts('cashboxes',v)}, enumerable: true, configurable: true});
function RepCash_movingCash_flow_articlesRow(owner){RepCash_movingCash_flow_articlesRow.superclass.constructor.call(this, owner)};
RepCash_movingCash_flow_articlesRow._extend($p.TabularSectionRow);
$p.RepCash_movingCash_flow_articlesRow = RepCash_movingCash_flow_articlesRow;
RepCash_movingCash_flow_articlesRow.prototype.__define({cashbox: {get: function(){return this._getter('cashbox')}, set: function(v){this._setter('cashbox',v)}, enumerable: true, configurable: true},
cash_flow_article: {get: function(){return this._getter('cash_flow_article')}, set: function(v){this._setter('cash_flow_article',v)}, enumerable: true, configurable: true}});
RepCash_moving.prototype.__define('cash_flow_articles', {get: function(){return this._getter_ts('cash_flow_articles')}, set: function(v){this._setter_ts('cash_flow_articles',v)}, enumerable: true, configurable: true});
$p.rep.cash_moving = new $p.DataProcessorsManager('rep.cash_moving');
};


$p.md.init({"enm":{"accumulation_record_type":[{"order":0,"name":"debit","synonym":"Приход"},{"order":1,"name":"credit","synonym":"Расход"}],"sort_directions":[{"order":0,"name":"asc","synonym":"По возрастанию"},{"order":1,"name":"desc","synonym":"По убыванию"}],"comparison_types":[{"order":0,"name":"gt","synonym":"Больше"},{"order":1,"name":"gte","synonym":"Больше или равно"},{"order":2,"name":"lt","synonym":"Меньше"},{"order":3,"name":"lte","synonym":"Меньше или равно "},{"order":4,"name":"eq","synonym":"Равно"},{"order":5,"name":"ne","synonym":"Не равно"},{"order":6,"name":"in","synonym":"В списке"},{"order":7,"name":"nin","synonym":"Не в списке"},{"order":8,"name":"lke","synonym":"Подобно "},{"order":9,"name":"nlk","synonym":"Не подобно"}],"obj_delivery_states":[{"order":0,"name":"Черновик","synonym":"Черновик"},{"order":1,"name":"Отправлен","synonym":"Отправлен"},{"order":2,"name":"Подтвержден","synonym":"Подтвержден"},{"order":3,"name":"Отклонен","synonym":"Отклонен"},{"order":4,"name":"Отозван","synonym":"Отозван"},{"order":5,"name":"Архив","synonym":"Перенесён в архив"},{"order":6,"name":"Шаблон","synonym":"Шаблон"}],"unload_type":[{"order":0,"name":"unload","synonym":"unload"},{"order":1,"name":"not_upload","synonym":"not_upload"},{"order":2,"name":"mixin","synonym":"mixin"}],"caching_type":[{"order":0,"name":"ram","synonym":"ram"},{"order":1,"name":"doc","synonym":"doc"},{"order":2,"name":"doc_remote","synonym":"doc_remote"},{"order":3,"name":"remote","synonym":"remote"},{"order":4,"name":"user","synonym":"user"},{"order":5,"name":"meta","synonym":"meta"},{"order":6,"name":"e1cib","synonym":"e1cib"},{"order":7,"name":"pgsql","synonym":"pgsql"}],"reduce_type":[{"order":0,"name":"record","synonym":"Запись"},{"order":1,"name":"array","synonym":"Массив"},{"order":2,"name":"slice_last","synonym":"Срез последних"},{"order":3,"name":"balances","synonym":"Остатки"},{"order":4,"name":"day","synonym":"Дневные обороты"},{"order":5,"name":"month","synonym":"Месячные обороты"}],"contact_information_types":[{"order":0,"name":"Адрес","synonym":"Адрес"},{"order":1,"name":"Телефон","synonym":"Телефон"},{"order":2,"name":"АдресЭлектроннойПочты","synonym":"Адрес электронной почты"},{"order":3,"name":"ВебСтраница","synonym":"Веб страница"},{"order":4,"name":"Факс","synonym":"Факс"},{"order":5,"name":"Другое","synonym":"Другое"},{"order":6,"name":"Skype","synonym":"Skype"}],"nom_types":[{"order":0,"name":"Товар","synonym":"Товар, материал"},{"order":1,"name":"Услуга","synonym":"Услуга"},{"order":2,"name":"Работа","synonym":"Работа, техоперация"}]},"cat":{"meta_objs":{"fields":{}},"meta_fields":{"fields":{}},"scheme_settings":{"name":"scheme_settings","synonym":"Настройки отчетов и списков","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"obj":{"synonym":"Объект","tooltip":"Имя класса метаданных","type":{"types":["string"],"str_len":250}},"user":{"synonym":"Пользователь","tooltip":"Если пусто - публичная настройка","type":{"types":["string"],"str_len":50}},"order":{"synonym":"Порядок","tooltip":"Порядок варианта","type":{"types":["number"],"digits":6,"fraction_figits":0}},"query":{"synonym":"Запрос","tooltip":"Индекс CouchDB или текст SQL","type":{"types":["string"],"str_len":0}},"date_from":{"synonym":"Начало периода","tooltip":"","type":{"types":["date"],"date_part":"date"}},"date_till":{"synonym":"Конец периода","tooltip":"","type":{"types":["date"],"date_part":"date"}},"formula":{"synonym":"Формула","tooltip":"Формула инициализации","type":{"types":["cat.formulas"],"is_ref":true}},"tag":{"synonym":"Дополнительные свойства","type":{"types":["string"],"str_len":0}}},"tabular_sections":{"fields":{"name":"fields","synonym":"Доступные поля","tooltip":"Состав, порядок и ширина колонок","fields":{"parent":{"synonym":"Родитель","tooltip":"Для плоского списка, родитель пустой","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"width":{"synonym":"Ширина","tooltip":"","type":{"types":["string"],"str_len":6}},"caption":{"synonym":"Заголовок","tooltip":"","type":{"types":["string"],"str_len":100}},"tooltip":{"synonym":"Подсказка","tooltip":"","type":{"types":["string"],"str_len":100}},"ctrl_type":{"synonym":"Тип","tooltip":"Тип элемента управления","type":{"types":["string"],"str_len":100}},"formatter":{"synonym":"Формат","tooltip":"Функция форматирования","type":{"types":["cat.formulas"],"is_ref":true}},"editor":{"synonym":"Редактор","tooltip":"Компонент редактирования","type":{"types":["cat.formulas"],"is_ref":true}}}},"sorting":{"name":"sorting","synonym":"Поля сортировки","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"direction":{"synonym":"Направление","tooltip":"","type":{"types":["enm.sort_directions"],"is_ref":true}}}},"dimensions":{"name":"dimensions","synonym":"Поля группировки","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}}}},"resources":{"name":"resources","synonym":"Ресурсы","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Поле","tooltip":"","type":{"types":["string"],"str_len":100}},"formula":{"synonym":"Формула","tooltip":"По умолчанию - сумма","type":{"types":["cat.formulas"],"is_ref":true}}}},"selection":{"name":"selection","synonym":"Отбор","tooltip":"","fields":{"parent":{"synonym":"Родитель","tooltip":"","type":{"types":["string"],"str_len":100}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"left_value":{"synonym":"Левое значение","tooltip":"","type":{"types":["string"],"str_len":100}},"comparison_type":{"synonym":"Вид сравнения","tooltip":"","type":{"types":["enm.comparison_types"],"is_ref":true}},"right_value":{"synonym":"Правое значение","tooltip":"","type":{"types":["string"],"str_len":100}}}},"params":{"name":"params","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","tooltip":"","type":{"types":["string"],"str_len":100}},"value_type":{"synonym":"Тип","tooltip":"Тип значения","type":{"types":["string"],"str_len":100}},"value":{"synonym":"Значение","tooltip":"Может иметь примитивный или ссылочный тип или массив","type":{"types":["string","number"],"str_len":0,"digits":15,"fraction_figits":3}}}},"composition":{"name":"composition","synonym":"Структура","tooltip":"","fields":{"parent":{"synonym":"Родитель","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":10}},"use":{"synonym":"Использование","tooltip":"","type":{"types":["boolean"]}},"field":{"synonym":"Элемент","tooltip":"Элемент структуры отчета","type":{"types":["string"],"str_len":50}},"kind":{"synonym":"Вид раздела отчета","tooltip":"список, таблица, группировка строк, группировка колонок","type":{"types":["string"],"str_len":50}},"definition":{"synonym":"Описание","tooltip":"Описание раздела структуры","type":{"types":["string"],"str_len":50}}}}},"cachable":"doc"},"currencies":{"name":"Валюты","splitted":true,"synonym":"Валюты","illustration":"Валюты, используемые при расчетах","obj_presentation":"Валюта","list_presentation":"","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":3,"fields":{"name_full":{"synonym":"Наименование валюты","multiline_mode":false,"tooltip":"Полное наименование валюты","mandatory":true,"type":{"types":["string"],"str_len":50}},"extra_charge":{"synonym":"Наценка","multiline_mode":false,"tooltip":"Коэффициент, который применяется к курсу основной валюты для вычисления курса текущей валюты.","type":{"types":["number"],"digits":10,"fraction_figits":2}},"main_currency":{"synonym":"Основная валюта","multiline_mode":false,"tooltip":"Валюта, на основании курса которой рассчитывается курс текущей валюты","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"parameters_russian_recipe":{"synonym":"Параметры прописи на русском","multiline_mode":false,"tooltip":"Параметры прописи валюты на русском языке","type":{"types":["string"],"str_len":200}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{},"cachable":"ram","form":{"selection":{"fields":["ref","_deleted","id","name as presentation","name_full"],"cols":[{"id":"id","width":"120","type":"ro","align":"left","sort":"server","caption":"Код"},{"id":"presentation","width":"*","type":"ro","align":"left","sort":"server","caption":"Обозначение"},{"id":"name_full","width":"*","type":"ro","align":"left","sort":"server","caption":"Наименование"}]},"obj":{"head":{"Дополнительно":["main_currency","extra_charge"]," ":["id","name","name_full","parameters_russian_recipe"]},"tabular_sections":{},"tabular_sections_order":[]}}},"contact_information_kinds":{"name":"ВидыКонтактнойИнформации","splitted":true,"synonym":"Виды контактной информации","illustration":"","obj_presentation":"Вид контактной информации","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (адрес, телефон и т.д.)","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.contact_information_types"],"is_ref":true}},"ВидПоляДругое":{"synonym":"Вид поля другое","multiline_mode":false,"tooltip":"Внешний вид поля другое на форме","type":{"types":["string"],"str_len":20}},"used":{"synonym":"Используется","multiline_mode":false,"tooltip":"Вид контактной информации используется","type":{"types":["boolean"]}},"mandatory_fields":{"synonym":"Обязательное заполнение","multiline_mode":false,"tooltip":"Вид контактной информации обязателен к заполнению","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа вида контактной информации","type":{"types":["cat.contact_information_kinds"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","hide":true},"nom_kinds":{"name":"ВидыНоменклатуры","splitted":true,"synonym":"Виды номенклатуры","illustration":"","obj_presentation":"Вид номенклатуры","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"nom_type":{"synonym":"Тип номенклатуры","multiline_mode":false,"tooltip":"Указывается тип, к которому относится номенклатура данного вида.","choice_groups_elm":"elm","mandatory":true,"type":{"types":["enm.nom_types"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"","type":{"types":["cat.nom_kinds"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","hide":true},"property_values":{"name":"ЗначенияСвойствОбъектов","splitted":true,"synonym":"Дополнительные значения","illustration":"","obj_presentation":"Дополнительное значение","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":true,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"heft":{"synonym":"Весовой коэффициент","multiline_mode":false,"tooltip":"Относительный вес дополнительного значения (значимость).","type":{"types":["number"],"digits":10,"fraction_figits":2}},"full_name":{"synonym":"Полное наименование","multiline_mode":true,"tooltip":"Подробное описание значения дополнительного реквизита","type":{"types":["string"],"str_len":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"owner":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит или сведение.","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Группа дополнительных значений свойства.","choice_links":[{"name":["selection","owner"],"path":["owner"]}],"type":{"types":["cat.property_values"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","hide":true},"property_values_hierarchy":{"name":"ЗначенияСвойствОбъектовИерархия","splitted":true,"synonym":"Дополнительные значения (иерархия)","illustration":"","obj_presentation":"Дополнительное значение (иерархия)","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":true,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"heft":{"synonym":"Весовой коэффициент","multiline_mode":false,"tooltip":"Относительный вес дополнительного значения (значимость).","type":{"types":["number"],"digits":10,"fraction_figits":2}},"full_name":{"synonym":"Полное наименование","multiline_mode":true,"tooltip":"Подробное описание значения дополнительного реквизита","type":{"types":["string"],"str_len":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"owner":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит или сведение.","mandatory":true,"type":{"types":["cch.properties"],"is_ref":true}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Вышестоящее дополнительное значение свойства.","choice_links":[{"name":["selection","owner"],"path":["owner"]}],"type":{"types":["cat.property_values_hierarchy"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","hide":true},"meta_ids":{"name":"ИдентификаторыОбъектовМетаданных","splitted":false,"synonym":"Идентификаторы объектов метаданных","illustration":"Идентификаторы объектов метаданных для использования в базе данных.","obj_presentation":"Идентификатор объекта метаданных","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"full_moniker":{"synonym":"Полное имя","multiline_mode":false,"tooltip":"Полное имя объекта метаданных","type":{"types":["string"],"str_len":430}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа объектов","multiline_mode":false,"tooltip":"Группа объектов метаданных.","type":{"types":["cat.meta_ids"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram","hide":true},"users_acl":{"name":"ИнтеграцияПраваПользователей","splitted":true,"synonym":"Права внешних пользователей","illustration":"","obj_presentation":"Права внешних пользователей","list_presentation":"Права внешних пользователей","input_by_string":[],"hierarchical":false,"has_owners":true,"group_hierarchy":true,"main_presentation_name":false,"code_length":0,"fields":{"prefix":{"synonym":"Префикс нумерации документов","multiline_mode":false,"tooltip":"Префикс номеров документов текущего пользователя","mandatory":true,"type":{"types":["string"],"str_len":2}},"СуффиксБазы":{"synonym":"Суффикс CouchDB","multiline_mode":false,"tooltip":"Суффикс нидивидуальной базы пользователя","type":{"types":["string"],"str_len":20}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"owner":{"synonym":"Пользователь","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["cat.users"],"is_ref":true}}},"tabular_sections":{"acl_objs":{"name":"ОбъектыДоступа","synonym":"Объекты доступа","tooltip":"","fields":{"acl_obj":{"synonym":"Объект доступа","multiline_mode":false,"tooltip":"","type":{"types":["cat.users","cat.cashboxes","cat.meta_ids"],"is_ref":true}},"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":50}},"by_default":{"synonym":"По умолчанию","multiline_mode":false,"tooltip":"","type":{"types":["boolean"]}}}}},"cachable":"ram","hide":true},"cashboxes":{"name":"Кассы","splitted":true,"synonym":"Кассы, подотчетники, контрагенты","illustration":"Список мест фактического хранения и движения наличных денежных средств.","obj_presentation":"Касса","list_presentation":"Кассы, подотчетники, контрагенты","input_by_string":["name","id"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"funds_currency":{"synonym":"Валюта","multiline_mode":false,"tooltip":"Валюта учета денежных средств","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.currencies"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{"contact_information":{"name":"КонтактнаяИнформация","synonym":"Контактная информация","tooltip":"Хранение контактной информации (адреса, веб-страницы, номера телефонов и др.)","fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (телефон, адрес и т.п.)","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"kind":{"synonym":"Вид","multiline_mode":false,"tooltip":"Вид контактной информации","choice_params":[{"name":"parent","path":{"ref":"8fc6d5dc-55bb-11e6-82b8-d85d4c80ec2a","presentation":"Справочник \"Кассы\"","type":"cat.contact_information_kinds"}}],"choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"Представление контактной информации для отображения в формах","type":{"types":["string"],"str_len":500}},"values_fields":{"synonym":"Значения полей","multiline_mode":false,"tooltip":"Служебное поле, для хранения контактной информации","type":{"types":["string"],"str_len":0},"hide":true},"country":{"synonym":"Страна","multiline_mode":false,"tooltip":"Страна (заполняется для адреса)","type":{"types":["string"],"str_len":100},"hide":true},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"Регион (заполняется для адреса)","type":{"types":["string"],"str_len":50},"hide":true},"city":{"synonym":"Город","multiline_mode":false,"tooltip":"Город (заполняется для адреса)","type":{"types":["string"],"str_len":50},"hide":true},"АдресЭП":{"synonym":"Адрес ЭП","multiline_mode":false,"tooltip":"Адрес электронной почты","type":{"types":["string"],"str_len":100},"hide":true},"server_domain_name":{"synonym":"Доменное имя сервера","multiline_mode":false,"tooltip":"Доменное имя сервера электронной почты или веб-страницы","type":{"types":["string"],"str_len":100},"hide":true},"phone_number":{"synonym":"Номер телефона","multiline_mode":false,"tooltip":"Полный номер телефона","type":{"types":["string"],"str_len":20},"hide":true},"phone_without_codes":{"synonym":"Номер телефона без кодов","multiline_mode":false,"tooltip":"Номер телефона без кодов и добавочного номера","type":{"types":["string"],"str_len":20},"hide":true},"ВидДляСписка":{"synonym":"Вид для списка","multiline_mode":false,"tooltip":"Вид контактной информации для списка","choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"ДействуетС":{"synonym":"Действует С","multiline_mode":false,"tooltip":"Дата актуальности контактная информация","type":{"types":["date"],"date_part":"date"}}}},"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Набор реквизитов, состав которого определяется компанией.","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","choice_type":{"path":["extra_fields","property"],"elm":0},"type":{"types":["boolean","string","date","number","cat.users"],"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3,"is_ref":true}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0},"hide":true}}}},"cachable":"ram"},"destinations":{"name":"НаборыДополнительныхРеквизитовИСведений","splitted":true,"synonym":"Наборы дополнительных реквизитов и сведений","illustration":"","obj_presentation":"Набор дополнительных реквизитов и сведений","list_presentation":"","input_by_string":["name"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"КоличествоРеквизитов":{"synonym":"Количество реквизитов","multiline_mode":false,"tooltip":"Количество реквизитов в наборе не помеченных на удаление.","type":{"types":["string"],"str_len":5}},"КоличествоСведений":{"synonym":"Количество сведений","multiline_mode":false,"tooltip":"Количество сведений в наборе не помеченных на удаление.","type":{"types":["string"],"str_len":5}},"used":{"synonym":"Используется","multiline_mode":false,"tooltip":"Набор свойств отображается в форме списка","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Входит в группу","multiline_mode":false,"tooltip":"Группа, к которой относится набор.","type":{"types":["cat.destinations"],"is_ref":true}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"","fields":{"property":{"synonym":"Дополнительный реквизит","multiline_mode":false,"tooltip":"Дополнительный реквизит этого набора","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"_deleted":{"synonym":"Пометка удаления","multiline_mode":false,"tooltip":"Устанавливается при исключении дополнительного реквизита из набора,\nчтобы можно было вернуть связь с уникальным дополнительным реквизитом.","type":{"types":["boolean"]}}}},"extra_properties":{"name":"ДополнительныеСведения","synonym":"Дополнительные сведения","tooltip":"","fields":{"property":{"synonym":"Дополнительное сведение","multiline_mode":false,"tooltip":"Дополнительное сведение этого набора","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"_deleted":{"synonym":"Пометка удаления","multiline_mode":false,"tooltip":"Устанавливается при исключении дополнительного сведения из набора,\nчтобы можно было вернуть связь с уникальным дополнительным сведением.","type":{"types":["boolean"]}}}}},"cachable":"ram","hide":true},"nom":{"name":"Номенклатура","splitted":true,"synonym":"Номенклатура","illustration":"Перечень товаров, продукции, материалов, полуфабрикатов, тары, услуг","obj_presentation":"Позиция номенклатуры","list_presentation":"","input_by_string":["name","id","article"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":11,"fields":{"article":{"synonym":"Артикул ","multiline_mode":false,"tooltip":"Артикул номенклатуры.","type":{"types":["string"],"str_len":25}},"nom_kind":{"synonym":"Вид номенклатуры","multiline_mode":false,"tooltip":"Указывается вид, к которому следует отнести данную позицию номенклатуры.","choice_groups_elm":"elm","mandatory":true,"type":{"types":["cat.nom_kinds"],"is_ref":true}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа, в которую входит данная позиция номенклатуры.","type":{"types":["cat.nom"],"is_ref":true}}},"tabular_sections":{},"cachable":"remote","hide":true},"users":{"name":"Пользователи","splitted":true,"synonym":"Пользователи","illustration":"","obj_presentation":"Пользователь","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":0,"fields":{"invalid":{"synonym":"Недействителен","multiline_mode":false,"tooltip":"Пользователь больше не работает в программе, но сведения о нем сохранены.\nНедействительные пользователи скрываются из всех списков\nпри выборе или подборе в документах и других местах программы.","type":{"types":["boolean"]}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Произвольная строка","type":{"types":["string"],"str_len":0}},"ancillary":{"synonym":"Служебный","multiline_mode":false,"tooltip":"Неразделенный или разделенный служебный пользователь, права к которому устанавливаются непосредственно и программно.","type":{"types":["boolean"]}},"user_ib_uid":{"synonym":"Идентификатор пользователя ИБ","multiline_mode":false,"tooltip":"Уникальный идентификатор пользователя информационной базы, с которым сопоставлен этот элемент справочника.","choice_groups_elm":"elm","type":{"types":["string"],"str_len":36,"str_fix":true}},"user_fresh_uid":{"synonym":"Идентификатор пользователя сервиса","multiline_mode":false,"tooltip":"Уникальный идентификатор пользователя сервиса, с которым сопоставлен этот элемент справочника.","choice_groups_elm":"elm","type":{"types":["string"],"str_len":36,"str_fix":true}},"id":{"synonym":"Логин","multiline_mode":true,"tooltip":"Произвольная строка","type":{"types":["string"],"str_len":50}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}}},"tabular_sections":{"extra_fields":{"name":"ДополнительныеРеквизиты","synonym":"Дополнительные реквизиты","tooltip":"Дополнительные реквизиты объекта","fields":{"property":{"synonym":"Свойство","multiline_mode":false,"tooltip":"Дополнительный реквизит","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение дополнительного реквизита","choice_links":[{"name":["selection","owner"],"path":["extra_fields","property"]}],"choice_groups_elm":"elm","type":{"types":["boolean","string","date","number","cat.users"],"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3,"is_ref":true}},"txt_row":{"synonym":"Текстовая строка","multiline_mode":false,"tooltip":"Полный текст строкового дополнительного реквизита","type":{"types":["string"],"str_len":0}}}},"contact_information":{"name":"КонтактнаяИнформация","synonym":"Контактная информация","tooltip":"Хранение контактной информации (адреса, веб-страницы, номера телефонов и др.)","fields":{"type":{"synonym":"Тип","multiline_mode":false,"tooltip":"Тип контактной информации (телефон, адрес и т.п.)","choice_groups_elm":"elm","type":{"types":["enm.contact_information_types"],"is_ref":true}},"kind":{"synonym":"Вид","multiline_mode":false,"tooltip":"Вид контактной информации","choice_params":[{"name":"parent","path":{"ref":"2d084a4c-55b8-11e6-82b8-d85d4c80ec2a","presentation":"Контактная информация справочника \"Пользователи\"","type":"cat.contact_information_kinds"}}],"choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}},"presentation":{"synonym":"Представление","multiline_mode":false,"tooltip":"Представление контактной информации для отображения в формах","type":{"types":["string"],"str_len":500}},"values_fields":{"synonym":"Значения полей","multiline_mode":false,"tooltip":"Служебное поле, для хранения контактной информации","type":{"types":["string"],"str_len":0}},"country":{"synonym":"Страна","multiline_mode":false,"tooltip":"Страна (заполняется для адреса)","type":{"types":["string"],"str_len":100}},"region":{"synonym":"Регион","multiline_mode":false,"tooltip":"Регион (заполняется для адреса)","type":{"types":["string"],"str_len":50}},"city":{"synonym":"Город","multiline_mode":false,"tooltip":"Город (заполняется для адреса)","type":{"types":["string"],"str_len":50}},"АдресЭП":{"synonym":"Адрес ЭП","multiline_mode":false,"tooltip":"Адрес электронной почты","type":{"types":["string"],"str_len":100}},"server_domain_name":{"synonym":"Доменное имя сервера","multiline_mode":false,"tooltip":"Доменное имя сервера электронной почты или веб-страницы","type":{"types":["string"],"str_len":100}},"phone_number":{"synonym":"Номер телефона","multiline_mode":false,"tooltip":"Полный номер телефона","type":{"types":["string"],"str_len":20}},"phone_without_codes":{"synonym":"Номер телефона без кодов","multiline_mode":false,"tooltip":"Номер телефона без кодов и добавочного номера","type":{"types":["string"],"str_len":20}},"ВидДляСписка":{"synonym":"Вид для списка","multiline_mode":false,"tooltip":"Вид контактной информации для списка","choice_groups_elm":"elm","type":{"types":["cat.contact_information_kinds"],"is_ref":true}}}}},"cachable":"ram","hide":true,"form":{"obj":{"head":{"Дополнительно":["ancillary","invalid",{"id":"user_ib_uid","path":"o.user_ib_uid","synonym":"Идентификатор пользователя ИБ","type":"ro"},{"id":"user_fresh_uid","path":"o.user_fresh_uid","synonym":"Идентификатор пользователя сервиса","type":"ro"},"note"]," ":["id","name"]},"tabular_sections":{"contact_information":{"fields":["kind","presentation"],"headers":"Вид,Представление","widths":"200,*","min_widths":"100,200","aligns":"","sortings":"na,na","types":"ref,txt"}},"tabular_sections_order":["contact_information"]}}},"cash_flow_articles":{"name":"СтатьиДвиженияДенежныхСредств","splitted":true,"synonym":"Статьи движения денежных средств","illustration":"Перечень статей движения денежных средств (ДДС), используемых в предприятии для проведения анализа поступлений и расходов в разрезе статей движения денежных средств. ","obj_presentation":"Статья движения денежных средств","list_presentation":"Статьи движения денежных средств","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"Рекомендации по выбору статьи движения денежных средств в документах","type":{"types":["string"],"str_len":1024}},"sorting_field":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Определяет порядок вывода вариантов анализа в мониторе целевых показателей при группировке по категориям целей.","type":{"types":["number"],"digits":5,"fraction_figits":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"В группе статей","multiline_mode":false,"tooltip":"Группа статей движения денежных средств","type":{"types":["cat.cash_flow_articles"],"is_ref":true}}},"tabular_sections":{},"cachable":"ram"},"formulas":{"name":"Формулы","splitted":true,"synonym":"Формулы","illustration":"Формулы пользователя, для выполнения при расчете спецификаций в справочниках Вставки, Соединения, Фурнитура и регистре Корректировки спецификации","obj_presentation":"Формула","list_presentation":"","input_by_string":["name","id"],"hierarchical":true,"has_owners":false,"group_hierarchy":true,"main_presentation_name":true,"code_length":9,"fields":{"formula":{"synonym":"Формула","multiline_mode":false,"tooltip":"Текст функции на языке javascript","type":{"types":["string"],"str_len":0}},"leading_formula":{"synonym":"Ведущая формула","multiline_mode":false,"tooltip":"Если указано, выполняется код ведущей формулы с параметрами, заданными для текущей формулы","choice_params":[{"name":"leading_formula","path":{"ref":"00000000-0000-0000-0000-000000000000","presentation":"","type":"cat.formulas"}}],"choice_groups_elm":"elm","type":{"types":["cat.formulas"],"is_ref":true}},"condition_formula":{"synonym":"Это формула условия","multiline_mode":false,"tooltip":"Формула используется, как фильтр, а не как алгоритм расчета количества.\nЕсли возвращает не Истина, строка в спецификацию не добавляется","type":{"types":["boolean"]}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"Описание в формате html","type":{"types":["string"],"str_len":0}},"template":{"synonym":"Шаблон","multiline_mode":true,"tooltip":"html шаблон отчета","type":{"types":["string"],"str_len":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"Группа","multiline_mode":false,"tooltip":"Группа формул","type":{"types":["cat.formulas"],"is_ref":true}}},"tabular_sections":{"params":{"name":"Параметры","synonym":"Параметры","tooltip":"","fields":{"param":{"synonym":"Параметр","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cch.properties","string"],"is_ref":true,"str_len":50}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_links":[{"name":["param"],"path":["params","param"]}],"choice_groups_elm":"elm","choice_type":{"path":["params","param"],"elm":0},"type":{"types":["boolean","string","date","number","cat.users"],"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3,"is_ref":true}}}}},"cachable":"doc","hide":true}},"doc":{"cash_moving":{"name":"ДвижениеДенег","splitted":true,"synonym":"Перемещение денег","illustration":"","obj_presentation":"","list_presentation":"","input_by_string":["number_doc"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":11,"fields":{"sender":{"synonym":"Отправитель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}},"recipient":{"synonym":"Получатель","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}},"doc_amount":{"synonym":"Сумма документа","multiline_mode":false,"tooltip":"","mandatory":true,"type":{"types":["number"],"digits":15,"fraction_figits":2}},"cash_flow_article":{"synonym":"Статья ДДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}},"responsible":{"synonym":"Ответственный","multiline_mode":false,"tooltip":"Пользователь, ответственный за  документ.","choice_groups_elm":"elm","type":{"types":["cat.users"],"is_ref":true}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":0}}},"tabular_sections":{},"cachable":"doc","form":{"selection":{"fields":["posted","date","number_doc","sender","sender","recipient","doc_amount","note"],"cols":[{"id":"date","width":"160","type":"ro","align":"left","sort":"server","caption":"Дата"},{"id":"number_doc","width":"120","type":"ro","align":"left","sort":"na","caption":"№"},{"id":"sender","width":"180","type":"ro","align":"left","sort":"na","caption":"Оправитель"},{"id":"recipient","width":"180","type":"ro","align":"left","sort":"na","caption":"Получатель"},{"id":"doc_amount","width":"120","type":"ron","align":"right","sort":"na","caption":"Сумма"},{"id":"note","width":"*","type":"ro","align":"left","sort":"na","caption":"Комментарий"}]}}}},"ireg":{"log":{"name":"log","note":"","synonym":"Журнал событий","dimensions":{"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"Время события","type":{"types":["number"],"digits":15,"fraction_figits":0}},"sequence":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Порядок следования","type":{"types":["number"],"digits":6,"fraction_figits":0}}},"resources":{"class":{"synonym":"Класс","multiline_mode":false,"tooltip":"Класс события","type":{"types":["string"],"str_len":100}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Текст события","type":{"types":["string"],"str_len":0}},"obj":{"synonym":"Объект","multiline_mode":true,"tooltip":"Объект, к которому относится событие","type":{"types":["string"],"str_len":0}}}},"$log":{"name":"$log","note":"","synonym":"Журнал событий","dimensions":{"date":{"synonym":"Дата","multiline_mode":false,"tooltip":"Время события","type":{"types":["number"],"digits":15,"fraction_figits":0}},"sequence":{"synonym":"Порядок","multiline_mode":false,"tooltip":"Порядок следования","type":{"types":["number"],"digits":6,"fraction_figits":0}}},"resources":{"class":{"synonym":"Класс","multiline_mode":false,"tooltip":"Класс события","type":{"types":["string"],"str_len":100}},"note":{"synonym":"Комментарий","multiline_mode":true,"tooltip":"Текст события","type":{"types":["string"],"str_len":0}},"obj":{"synonym":"Объект","multiline_mode":true,"tooltip":"Объект, к которому относится событие","type":{"types":["string"],"str_len":0}}}}},"areg":{},"dp":{"scheme_settings":{"name":"scheme_settings","synonym":"Варианты настроек","fields":{"scheme":{"synonym":"Текущая настройка","tooltip":"Текущий вариант настроек","mandatory":true,"type":{"types":["cat.scheme_settings"],"is_ref":true}}}}},"rep":{"cash_moving":{"name":"ДвижениеДенег","splitted":false,"synonym":"Движение денег","illustration":"","obj_presentation":"","list_presentation":"","hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":false,"code_length":0,"fields":{},"tabular_sections":{"cashboxes":{"name":"Кассы","synonym":"Кассы","tooltip":"","fields":{"cashbox":{"synonym":"Касса","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cashboxes"],"is_ref":true}}}},"cash_flow_articles":{"name":"СтатьиДвиженияДенежныхСредств","synonym":"Статьи ДДС","tooltip":"","fields":{"cash_flow_article":{"synonym":"Статья ДДС","multiline_mode":false,"tooltip":"","choice_groups_elm":"elm","type":{"types":["cat.cash_flow_articles"],"is_ref":true}}}}},"cachable":"ram"}},"cch":{"properties":{"name":"ДополнительныеРеквизитыИСведения","splitted":true,"synonym":"Дополнительные реквизиты и сведения","illustration":"","obj_presentation":"Дополнительный реквизит / сведение","list_presentation":"","input_by_string":["name"],"hierarchical":false,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"shown":{"synonym":"Виден","multiline_mode":false,"tooltip":"Настройка видимости дополнительного реквизита","type":{"types":["boolean"]}},"extra_values_owner":{"synonym":"Владелец дополнительных значений","multiline_mode":false,"tooltip":"Свойство-образец, с которым у этого свойства одинаковый список дополнительных значений","choice_groups_elm":"elm","type":{"types":["cch.properties"],"is_ref":true}},"available":{"synonym":"Доступен","multiline_mode":false,"tooltip":"Настройка доступности дополнительного реквизита","type":{"types":["boolean"]}},"caption":{"synonym":"Наименование","multiline_mode":false,"tooltip":"Краткое представление свойства, которое\nвыводится в формах редактирования его значения","mandatory":true,"type":{"types":["string"],"str_len":75}},"mandatory":{"synonym":"Заполнять обязательно","multiline_mode":false,"tooltip":"Настройка проверки заполненности дополнительного реквизита","type":{"types":["boolean"]}},"note":{"synonym":"Комментарий","multiline_mode":false,"tooltip":"Поясняет назначение свойства","type":{"types":["string"],"str_len":0}},"destination":{"synonym":"Набор свойств","multiline_mode":false,"tooltip":"Набор свойств, которому принадлежит уникальное свойство. Если не задан, значит свойство общее.","choice_groups_elm":"elm","type":{"types":["cat.destinations"],"is_ref":true}},"tooltip":{"synonym":"Подсказка","multiline_mode":false,"tooltip":"Показывается пользователю при редактировании свойства в форме объекта","type":{"types":["string"],"str_len":0}},"is_extra_property":{"synonym":"Это дополнительное сведение","multiline_mode":false,"tooltip":"Свойство является дополнительным сведением, а не дополнительным реквизитом","type":{"types":["boolean"]}},"list":{"synonym":"Список","multiline_mode":false,"tooltip":"Значение представляет собой список опций","type":{"types":["boolean"]}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"type":{"synonym":"","multiline_mode":false,"tooltip":"Типы значения, которое можно ввести при заполнении свойства.","mandatory":true,"type":{"types":["boolean","string","date","number","cat.users"],"str_len":1024,"date_part":"date_time","digits":15,"fraction_figits":3,"is_ref":true}}},"tabular_sections":{"extra_fields_dependencies":{"name":"ЗависимостиДополнительныхРеквизитов","synonym":"Зависимости дополнительных реквизитов","tooltip":"","fields":{"ЗависимоеСвойство":{"synonym":"Зависимое свойство","multiline_mode":false,"tooltip":"Имя свойства дополнительного реквизита, для которого настроена зависимость.","type":{"types":["string"],"str_len":0}},"field":{"synonym":"Реквизит","multiline_mode":false,"tooltip":"Имя реквизита формы или ссылка на дополнительный реквизит, от которого зависит текущий дополнительный реквизит.","choice_groups_elm":"elm","type":{"types":["cch.properties","string"],"is_ref":true,"str_len":99}},"condition":{"synonym":"Условие","multiline_mode":false,"tooltip":"Вид зависимости. \"Равно\", \"Не равно\", \"Заполнено\" или \"Не заполнено\".","type":{"types":["string"],"str_len":20}},"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"Значение реквизита в условии.","choice_groups_elm":"elm","type":{"types":["cat.ПапкиЭлектронныхПисем","enm.caching_type","doc.cash_moving","cch.predefined_elmnts","enm.reduce_type","cat.currencies","enm.contact_information_types","cat.property_values_hierarchy","cat.formulas","boolean","enm.unload_type","cat.property_values","cat.cash_flow_articles","cat.destinations","cch.properties","enm.nom_types","string","cat.nom_kinds","date","number","cat.users","cat.cashboxes","cat.nom","enm.obj_delivery_states","cat.meta_ids","cat.users_acl","cat.contact_information_kinds"],"is_ref":true,"str_len":50,"date_part":"date","digits":10,"fraction_figits":0}}}}},"cachable":"ram","hide":true},"predefined_elmnts":{"name":"ПредопределенныеЭлементы","splitted":true,"synonym":"Константы и списки","illustration":"Хранит значения настроек и параметров подсистем","obj_presentation":"Значение настроек","list_presentation":"","input_by_string":[],"hierarchical":true,"has_owners":false,"group_hierarchy":false,"main_presentation_name":true,"code_length":0,"fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}},"definition":{"synonym":"Описание","multiline_mode":true,"tooltip":"","type":{"types":["string"],"str_len":0}},"synonym":{"synonym":"Синоним","multiline_mode":false,"tooltip":"Синоним предопределенного элемента","mandatory":true,"type":{"types":["string"],"str_len":50}},"list":{"synonym":"Список","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":1,"fraction_figits":0}},"zone":{"synonym":"Область","multiline_mode":false,"tooltip":"","type":{"types":["number"],"digits":6,"fraction_figits":0}},"predefined_name":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["string"],"str_len":256}},"parent":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["cch.predefined_elmnts"],"is_ref":true}},"type":{"synonym":"","multiline_mode":false,"tooltip":"","type":{"types":["boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}}},"tabular_sections":{"elmnts":{"name":"Элементы","synonym":"Элементы","tooltip":"","fields":{"value":{"synonym":"Значение","multiline_mode":false,"tooltip":"","choice_type":{"path":["ТипЗначения"],"elm":0},"type":{"types":["boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}},"elm":{"synonym":"Элемент","multiline_mode":false,"tooltip":"","type":{"types":["boolean","cch.properties","string","date","number"],"is_ref":true,"str_len":1024,"date_part":"date","digits":8,"fraction_figits":1}}}}},"cachable":"doc","form":{"obj":{"head":{"Реквизиты":[{"id":"name","path":"o.name","synonym":"Наименование","type":"ro"},{"id":"synonym","path":"o.synonym","synonym":"Синоним","type":"ro"},"list","zone","value"]},"tabular_sections":{"elmnts":{"fields":["elm","value"],"headers":"Элемент,Значение","widths":"*,*","min_widths":"150,150","aligns":"","sortings":"na,na","types":"ref,ref"}}}}}},"cacc":{},"bp":{},"tsk":{},"syns_1с":["Автор","Артикул","БазоваяЕдиницаИзмерения","Банк","БанкДляРасчетов","Банки","БанковскиеСчета","БанковскиеСчетаКонтрагентов","БанковскиеСчетаОрганизаций","БанковскийСчет","БизнесПроцесс","БИКБанка","БИКБанкаДляРасчетов","Булево","Валюта","ВалютаВзаиморасчетов","ВалютаДенежныхСредств","ВалютаДокумента","ВалютаЦены","Валюты","ВводПоСтроке","ВедениеВзаиморасчетов","ВедениеВзаиморасчетовПоДоговорам","ВедущаяЗадача","ВедущаяФормула","Ведущий","ВерсияДанных","Вес","Вид","ВидДоговора","Виден","ВидНоменклатуры","ВидОперации","ВидСчета","ВидыДоговоровКонтрагентов","ВидыКонтактнойИнформации","ВидыНоменклатуры","Владелец","ВладелецДополнительныхЗначений","Владельцы","ВремяИзменения","ВремяНачала","ВремяОкончания","ВремяСобытия","Всего","ВходящееИсходящееСобытие","ВыборГруппИЭлементов","Выполнена","Высота","Глубина","Город","ГородБанка","ГородБанкаДляРасчетов","Готовность","ГрафикиРаботников","ГрафикРаботы","ГруппыФинансовогоУчетаНоменклатуры","ДаНет","Дата","ДатаДоставки","ДатаИзменения","ДатаНачала","ДатаОкончания","ДатаРождения","ДатаСобытия","ДвижениеДенег","ДебетКредит","Действие","ДержатьРезервБезОплатыОграниченноеВремя","Длина","ДлинаКода","ДлинаНомера","ДниНедели","ДоговорКонтрагента","ДоговорыКонтрагентов","ДокументУдостоверяющийЛичность","Долгота","ДоменноеИмяСервера","ДополнительныеРеквизиты","ДополнительныеРеквизитыИСведения","ДополнительныеСведения","ДопустимаяСуммаЗадолженности","ДопустимоеЧислоДнейЗадолженности","Доступен","ЕдиницаИзмерения","ЕдиницаПоКлассификатору","ЕдиницаХраненияОстатков","ЕдиницыИзмерения","Завершен","Завершение","ЗависимостиДополнительныхРеквизитов","Заголовок","Заказ","ЗаказПокупателя","ЗаказПоставщику","Закрыт","Запасы","ЗаполнятьОбязательно","Запуск","Значение","ЗначениеЗаполнения","Значения","ЗначенияПолей","ЗначенияПолейАдреса","ЗначенияСвойствОбъектов","ЗначенияСвойствОбъектовИерархия","Идентификатор","ИдентификаторПользователяИБ","ИдентификаторПользователяСервиса","ИдентификаторыОбъектовМетаданных","Иерархический","ИерархияГруппИЭлементов","Имя","ИмяПредопределенныхДанных","Инд","Индекс","ИндивидуальныйПредприниматель","ИНН","ИнтеграцияКешСсылок","ИнтеграцияПраваПользователей","ИнтеграцияСостоянияТранспорта","ИнтеграцияТипВыгрузки","ИнтеграцияТипКеширования","ИнтеграцияТипСвёртки","Исполнители","Исполнитель","Используется","Касса","Кассы","Категория","КлассификаторБанковРФ","КлассификаторЕдиницИзмерения","Код","КодАльфа2","КодАльфа3","КодИМНС","КодПоОКПО","Количество","Комментарий","КонецПериода","КонтактнаяИнформация","КонтактныеЛица","КонтактныеЛицаКонтрагентов","Контрагент","Контрагенты","КонтролироватьСуммуЗадолженности","КонтролироватьЧислоДнейЗадолженности","КорректировкаРегистров","КоррСчет","КоррСчетБанка","КоррСчетБанкаДляРасчетов","Коэффициент","КоэффициентПотерь","КПП","Кратность","КратностьВзаиморасчетов","Курс","КурсВзаиморасчетов","КурсыВалют","Марка","Масса","Материалы","МеждународноеСокращение","Менеджер","МестоРождения","МногострочныйРежим","Мощность","Набор","НаборСвойств","НаборыДополнительныхРеквизитовИСведений","Наименование","НаименованиеБанка","НаименованиеПолное","НаименованиеСокращенное","НалогообложениеНДС","Наценка","НачалоПериода","Недействителен","Номенклатура","НоменклатурнаяГруппа","Номер","НомерСтроки","НомерСчета","НомерТелефона","НомерТелефонаБезКодов","Область","Объект","ОбъектДоступа","ОбъектыДоступа","Объем","ОбязательноеЗаполнение","ОкруглятьВБольшуюСторону","ОкруглятьКоличество","Описание","Организации","Организация","ОсновнаяВалюта","ОсновнаяСтатьяДвиженияДенежныхСредств","ОсновноаяКасса","ОсновноеПредставлениеИмя","ОсновнойБанковскийСчет","ОсновнойДоговорКонтрагента","ОсновнойМенеджерПокупателя","ОсновнойПроект","Отбор","Ответственный","Отправитель","ОтражатьВБухгалтерскомУчете","ОтражатьВНалоговомУчете","Отступы","Параметр","Параметры","ПараметрыВыбора","ПараметрыОтбора","ПараметрыПрописиНаРусском","Планирование","ПлатежноеПоручениеВходящее","ПлатежноеПоручениеИсходящее","ПлатежныйКалендарь","Плотность","Площадь","Поворачивать","ПоДоговоруВЦелом","Подразделение","Подразделения","Подсказка","Подчиненый","ПоЗаказам","Покупатель","Пол","ПолноеИмя","ПолноеНаименование","Получатель","ПолФизическихЛиц","Пользователи","ПометкаУдаления","ПорогОкругления","Порядок","ПорядокОкругления","Поставщик","ПоступлениеТоваровУслуг","ПоСчетам","ПоУмолчанию","Пояснение","Предоплата","ПредопределенныеЭлементы","Предопределенный","Представление","ПредставлениеИдентификатора","ПредставлениеОбъекта","ПредставлениеСписка","Префикс","Принудительно","Приоритет","ПриходныйКассовыйОрдер","Проведен","Проект","Проекты","Процент","ПроцентАвтоматическихСкидок","ПроцентПредоплаты","ПроцентСкидкиНаценки","ПроцентСкидкиНаценкиВнутр","Прочее","Разделитель","РасходныйКассовыйОрдер","РасчетныйСчет","РасчетыСКонтрагентами","РасширенныйРежим","РасшифровкаПлатежа","РеализацияТоваровУслуг","Регион","Реквизит","РеквизитДопУпорядочивания","Реквизиты","Родитель","СвидетельствоДатаВыдачи","СвидетельствоКодОргана","СвидетельствоНаименованиеОргана","СвидетельствоСерияНомер","СВИФТБИК","Свойство","Связи","СвязиПараметровВыбора","СвязьПоТипу","Сделка","Себестоимость","Синоним","Скидка","СкидкиНаценки","Склад","Склады","СКомиссионером","СКомитентом","Скрыть","Сложный","Служебный","Событие","Содержание","Соответствие","Состояние","СостояниеТранспорта","Сотрудник","Сотрудники","Спецификации","Спецификация","Список","СПокупателем","СпособУстановкиКурса","СпособыУстановкиКурсаВалюты","СПоставщиком","СрокДействия","Ссылка","СтавкаНДС","СтавкиНДС","Старт","Стартован","СтатусМатериальныхЗатрат","СтатусыЗаказов","СтатьиДвиженияДенежныхСредств","СтатьиЗатрат","СтатьяДвиженияДенежныхСредств","СтатьяЗатрат","Стоимость","Страна","СтраныМира","СтраховойНомерПФР","Строка","СтруктурнаяЕдиница","Сумма","СуммаАвтоматическойСкидки","СуммаВзаиморасчетов","СуммаВключаетНДС","СуммаДокумента","СуммаНДС","СуммаСНаценкой","СуммаУпр","Суффикс","СчетУчета","ТаблицаРегистров","ТабличнаяЧасть","ТабличныеЧасти","ТекстКорреспондента","ТекстНазначения","ТекстоваяСтрока","Телефон","Телефоны","ТелефоныБанка","Тип","ТипДенежныхСредств","ТипНоменклатуры","ТипСчета","ТипЦен","ТипыДенежныхСредств","ТипыКонтактнойИнформации","ТипыНалогообложенияНДС","ТипыНоменклатуры","ТипыСобытий","ТипыСтруктурныхЕдиниц","ТипыСчетов","ТипыЦенНоменклатуры","Товары","Толщина","ТочкаМаршрута","ТранспортныеСредства","Управленческий","Условие","Услуги","УстановкаЦенНоменклатуры","УчитыватьНДС","ФизическиеЛица","ФизическоеЛицо","Финиш","Формула","ФормулаРасчетаКурса","ФормулаУсловия","Формулы","Характеристика","ХарактеристикаНоменклатуры","ХарактеристикиНоменклатуры","Цвет","Цвета","Цена","ЦенаВключаетНДС","ЦенаВнутр","ЦеноваяГруппа","ЦеновыеГруппы","ЦеныНоменклатуры","Число","ЧислоДнейРезерваБезОплаты","Шаблон","Шаг","Ширина","Широта","Штуки","Экземпляр","Элемент","Элементы","ЭтоГруппа","ЭтоДополнительноеСведение","ЭтоНабор","ЭтоУслуга","ЮрЛицо","ЮрФизЛицо","Ячейка","Ячейки"],"syns_js":["author","article","base_unit","bank","settlements_bank","banks","bank_accounts","partner_bank_accounts","organization_bank_accounts","bank_account","buisness_process","bank_bic","settlements_bank_bic","boolean","currency","settlements_currency","funds_currency","doc_currency","price_currency","currencies","input_by_string","mutual_settlements","mutual_contract_settlements","leading_task","leading_formula","master","data_version","heft","kind","contract_kind","shown","nom_kind","transactions_kind","account_kind","contract_kinds","contact_information_kinds","nom_kinds","owner","extra_values_owner","owners","change_time","begin_time","end_time","event_time","altogether","inbound_outbound","choice_groups_elm","completed","height","depth","city","bank_city","settlements_bank_city","readiness","workers_schedules","worker_schedule","nom_groups","yes_no","date","shipping_date","change_date","start_date","expiration_date","birth_date","event_date","cash_moving","debit_credit","action","check_days_without_pay","len","code_length","number_doc_len","week_days","contract","contracts","identification_document","longitude","server_domain_name","extra_fields","properties","extra_properties","allowable_debts_amount","allowable_debts_days","available","unit","qualifier_unit","storage_unit","nom_units","finished","completion","extra_fields_dependencies","caption","invoice","buyers_order","purchase_order","closed","inventories","mandatory","launch","value","fill_value","values","values_fields","address_fields","property_values","property_values_hierarchy","identifier","user_ib_uid","user_fresh_uid","meta_ids","hierarchical","group_hierarchy","moniker","predefined_name","icounter","ind","individual_entrepreneur","inn","integration_links_cache","users_acl","obj_delivery_states","unload_type","caching_type","reduce_type","executors","executor","used","cashbox","cashboxes","category","banks_qualifier","units","id","alpha2","alpha3","imns_code","okpo","quantity","note","period_till","contact_information","contact_persons","contact_persons_partners","partner","partners","check_debts_amount","check_debts_days","registers_correction","correspondent_account","bank_correspondent_account","settlements_bank_correspondent_account","coefficient","loss_factor","kpp","multiplicity","settlements_multiplicity","course","settlements_course","currency_courses","brand","weight","materials","international_short","manager","birth_place","multiline_mode","performance","set","destination","destinations","name","bank_name","name_full","name_short","vat","extra_charge","period_from","invalid","nom","nom_group","number_doc","row","account_number","phone_number","phone_without_codes","area","obj","acl_obj","acl_objs","volume","mandatory_fields","rounding_in_a_big_way","rounding_quantity","definition","organizations","organization","main_currency","main_cash_flow_article","main_cashbox","main_presentation_name","main_bank_account","main_contract","buyer_main_manager","main_project","selection","responsible","sender","accounting_reflect","tax_accounting_reflect","offsets","param","params","choice_params","selection_params","parameters_russian_recipe","planning","debit_bank_order","credit_bank_order","calendar_payments","density","s","rotate","by_entire_contract","department","divisions","tooltip","has_owners","by_orders","is_buyer","sex","full_moniker","full_name","recipient","gender","users","_deleted","rounding_threshold","sorting","rounding_order","is_supplier","purchase","by_invoices","by_default","illustration","prepayment","predefined_elmnts","predefined","presentation","identifier_presentation","obj_presentation","list_presentation","prefix","forcibly","priority","debit_cash_order","posted","project","projects","rate","discount_percent_automatic","prepayment_percent","discount_percent","discount_percent_internal","others","delimiter","credit_cash_order","current_account","invoice_payments","extended_mode","payment_details","selling","region","field","sorting_field","fields","parent","certificate_date_issue","certificate_authority_code","certificate_authority_name","certificate_series_number","swift","property","links","choice_links","choice_type","trans","first_cost","synonym","discount","charges_discounts","warehouse","stores","with_commission_agent","with_committent","hide","difficult","ancillary","event","content","conformity","state","obj_delivery_state","employee","staff","specifications","specification","list","with_buyer","course_installation_method","course_installation_methods","with_supplier","validity","ref","vat_rate","vat_rates","start","started","costs_material_feed","invoice_conditions","cash_flow_articles","cost_items","cash_flow_article","cost_item","cost","country","countries","pfr_number","string","organizational_unit","amount","discount_amount_automatic","amount_mutual","vat_included","doc_amount","vat_amount","amount_marged","amount_operation","suffix","account_accounting","registers_table","tabular_section","tabular_sections","correspondent_text","appointments_text","txt_row","phone","phone_numbers","bank_phone_numbers","type","cash_flow_type","nom_type","account_type","price_type","cash_flow_types","contact_information_types","vat_types","nom_types","event_types","structural_unit_types","account_types","nom_prices_types","goods","thickness","buisness_process_point","transport_means","managerial","condition","services","nom_prices_setup","vat_consider","individuals","individual_person","finish","formula","course_calc_formula","condition_formula","formulas","characteristic","nom_characteristic","characteristics","clr","colors","price","vat_price_included","price_internal","price_group","price_groups","nom_prices","number","days_without_pay","template","step","width","latitude","is_pieces","specimen","elm","elmnts","is_folder","is_extra_property","is_set","is_service","legal_person","individual_legal","cell","cells"]});

/**
 * Установка параметров по умолчанию из package.json
 */

// Назначим обработчики событий
$p.on({

	/**
	 * ### При установке параметров сеанса
	 * Процедура устанавливает параметры работы программы по умолчанию из package.json
	 *
	 * @param prm {Object} - в свойствах этого объекта определяем параметры работы программы
	 */
	settings: function default_settings(prm) {

		$p.off(default_settings);

		prm.__define({

			// разделитель для localStorage
			local_storage_prefix: {
				value: "PACKAGE_PREFIX",
				writable: true
			},

			// скин по умолчанию
			skin: {
				value: "dhx_terrace",
				writable: true
			},

			// гостевые пользователи для демо-режима
			guests: {
				value: [{
					username: "Гость",
					password: "hQI7OhIGlVeOWi8="
				}],
				writable: true
			},

			// если понадобится обратиться к 1С, будем использовать irest
			irest_enabled: {
				value: true,
				writable: true
			},

			// расположение rest-сервиса 1c по умолчанию
			rest_path: {
				value: "PACKAGE_REST_1C",
				writable: true
			},

			// расположение couchdb
			couch_path: {
				value: "PACKAGE_COUCHDB",
				writable: true
			},

			// не шевелить hash url при открытии подчиненных форм
			keep_hash: {
				value: true,
				writable: true
			},

			// по умолчанию, обращаемся к зоне 0
			zone: {
				value: PACKAGE_ZONE,
				writable: true
			},

			// объявляем номер демо-зоны
			zone_demo: {
				value: PACKAGE_ZONE_DEMO,
				writable: true
			},

			// объявляем номер демо-зоны
			attachment_max_size: {
				value: PACKAGE_ATT_MAX_SIZE,
				writable: true
			},

			// разрешаем сохранение пароля
			enable_save_pwd: {
				value: true,
				writable: true
			}

		});

	},

	/**
	 * ### Обработчик ошибки загрузки локальных данных
	 * @param err
	 */
	pouch_load_data_error: function pouch_load_data_error(err) {

		$p.off(pouch_load_data_error);

		// если это первый запуск, показываем диалог авторизации
		if(err.db_name && err.hasOwnProperty("doc_count") && err.doc_count < 10 && navigator.onLine){

			$p.wsql.set_user_param("enable_save_pwd", true);

			// если это демо (zone === zone_demo), устанавливаем логин и пароль
			if($p.wsql.get_user_param("zone") == $p.job_prm.zone_demo && !$p.wsql.get_user_param("user_name")){
				$p.wsql.set_user_param("user_name", $p.job_prm.guests[0].username);
			}

			$p.iface.frm_auth({
				modal_dialog: true,
				try_auto: $p.wsql.get_user_param("zone") == $p.job_prm.zone_demo && $p.wsql.get_user_param("enable_save_pwd")
			});

		}

		if($p.iface.main && $p.iface.main.progressOff)
			$p.iface.main.progressOff();

	},

	/**
	 * ### При окончании загрузки локальных данных
	 */
	predefined_elmnts_inited: function predefined_elmnts_inited() {

		$p.off(predefined_elmnts_inited);

		// если разрешено сохранение пароля - сразу пытаемся залогиниться
		if(!$p.wsql.pouch.authorized && navigator.onLine &&
			$p.wsql.get_user_param("enable_save_pwd") &&
			$p.wsql.get_user_param("user_name") &&
			$p.wsql.get_user_param("user_pwd")){

			setTimeout(function () {
				$p.iface.frm_auth({
					modal_dialog: true,
					try_auto: true
				});
			}, 100);
		}

		if($p.iface.main && $p.iface.main.progressOff)
			$p.iface.main.progressOff();

	},

	/**
	 * ### Обработчик маршрутизации
	 * view отвечает за переключение закладки в SideBar
	 */
	hash_route: function (hprm) {

		if(hprm.view && $p.iface.main && $p.iface.main.getActiveItem && $p.iface.main.getActiveItem() != hprm.view){
			$p.iface.main.getAllItems().forEach(function(item){
				if(item == hprm.view)
					$p.iface.main.cells(item).setActive(true);
			});
		}

		return false;
	}

});