# jobzz-cli

Creation/standardization of components, pages and styles for React (Typescript). Using Material UI.

#### Installation

```
$ yarn add global jobzz-cli
```
or
```
$ npm install -g jobzz-cli
```


#### Creating a simple component
Component created in the src/components/ path by default.

```
$ jobzz-cli generate:component MyComponent
$ jobzz-cli generate:component MyComponent src/myFolder/
```
or 
```
$ jobzz-cli gc MyComponent
$ jobzz-cli gc MyComponent src/myFolder/
```

#### Page creation and style
Page and style created in the src/pages/ path by default.

```
$ jobzz-cli generate:page MyComponent
$ jobzz-cli generate:page MyComponent src/myFolder/
```
or 
```
$ jobzz-cli gp MyComponent
$ jobzz-cli gp MyComponent src/myFolder/
```

#### For more details, execute the help command.
```
$ jobzz-cli help
```
