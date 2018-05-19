import variable from "./native-base-theme/variables/platform";

export const STYLE_NAME = 'Piki.MyComponent';

export const generateStyle = (variables = variable) => ({
  'NativeBase.ViewNB': {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    'NativeBase.Text':{
      color: variables.brandPrimary      
    },
  },
});

export const styleRule = (variables = variable) => ({
	[STYLE_NAME]: generateStyle(variables)
});