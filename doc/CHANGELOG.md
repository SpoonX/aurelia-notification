<a name="1.1.0"></a>
# [1.1.0](https://github.com/SpoonX/aurelia-notification/compare/1.0.0...1.1.0) (2019-01-09)


### Bug Fixes

* **notification:** notification constructor preserves explicitly specified container element. ([255e953](https://github.com/SpoonX/aurelia-notification/commit/255e953))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/SpoonX/aurelia-notification/compare/1.0.0-rc5...v1.0.0) (2016-10-04)


### Features

* **project:** allow configuration with an object ([c2890a2](https://github.com/SpoonX/aurelia-notification/commit/c2890a2))



<a name="1.0.0-rc5"></a>
## [1.0.0-rc5](https://github.com/SpoonX/aurelia-notification/compare/1.0.0-rc1...v1.0.0-rc5) (2016-07-22)


### Bug Fixes

* **notification:** notifications respect translate overwrite ([e8d0d51](https://github.com/SpoonX/aurelia-notification/commit/e8d0d51))


### Features

* **notification:** improved generated typings ([25f8548](https://github.com/SpoonX/aurelia-notification/commit/25f8548))
* **project:** add gulp fixup-dts. removes unneeded/problematic external imports from d.ts ([961955a](https://github.com/SpoonX/aurelia-notification/commit/961955a))



<a name="1.0.0-rc4"></a>
## [1.0.0-rc4](https://github.com/SpoonX/aurelia-notification/compare/1.0.0-rc1...v1.0.0-rc4) (2016-07-01)


<a name"1.0.0-rc3"></a>
### 1.0.0-rc3 (2016-06-02)


#### Bug Fixes

* **notification:** notifications respect translate overwrite ([e8d0d515](https://github.com/SpoonX/aurelia-notification/commit/e8d0d515))


<a name"1.0.0-rc2"></a>
### 1.0.0-rc2 (2016-04-30)


#### Features

* **notification:** improved generated typings ([25f8548e](https://github.com/SpoonX/aurelia-notification/commit/25f8548e))


<a name"1.0.0-rc1"></a>
## 1.0.0-rc1 (2016-04-29)


#### Bug Fixes

* **config:** use extend to apply options correctly ([a6f6bb2d](https://github.com/SpoonX/aurelia-notification/commit/a6f6bb2d))


#### Features

* **project:**
  * bundle into single file ([183a22d5](https://github.com/SpoonX/aurelia-notification/commit/183a22d5))
  * allow npm installation. update aurelia-i18n to ^ 0.5.0 ([cc9d0be3](https://github.com/SpoonX/aurelia-notification/commit/cc9d0be3))
  * Rename project to remove spoonx prefix ([a62b1f20](https://github.com/SpoonX/aurelia-notification/commit/a62b1f20))
  * export Config ([cce7508c](https://github.com/SpoonX/aurelia-notification/commit/cce7508c))


#### Breaking Changes

* Removed unnneded configure function in Notification. Use the exported Config instread
BREAKING CHANGE: Cannot be used without aurelia-i18n anymore

 ([a6f6bb2d](https://github.com/SpoonX/aurelia-notification/commit/a6f6bb2d))
* all imports need to use 'aurelia-notification'

 ([183a22d5](https://github.com/SpoonX/aurelia-notification/commit/183a22d5))
* `wavded/` prefix dropped from install name humane-js. Update `package.json` and `config.js` accordingly.

 ([cc9d0be3](https://github.com/SpoonX/aurelia-notification/commit/cc9d0be3))


<a name"0.0.6"></a>
### 0.0.6 (2016-03-25)


#### Features

* **project:** typescript support ([bf5828a0](https://github.com/SpoonX/aurelia-notification/commit/bf5828a0))


### 0.0.5 (2016-03-16)


#### Bug Fixes

* **notification:** attach to body using 'aurelia-composed' event ([8fc71e0e](https://github.com/SpoonX/aurelia-notification/commit/8fc71e0ebd4e67263dc1777bcab6f80948d700db))


<a name"0.0.4"></a>
### 0.0.4 (2016-03-02)


<a name"0.0.3"></a>
### 0.0.3 (2016-02-09)


<a name"0.0.2"></a>
### 0.0.2 (2016-02-04)


#### Bug Fixes

* **config:** Defaults correctly applied ([75b1ba4b](https://github.com/SpoonX/aurelia-notification/commit/75b1ba4b))


#### Features

* **notification:**
  * Return promises. Easier configuration ([4e68a1dc](https://github.com/SpoonX/aurelia-notification/commit/4e68a1dc))
  * translation is optional, more api methods, support for humane-js css library. no ([293ac3c1](https://github.com/SpoonX/aurelia-notification/commit/293ac3c1))
