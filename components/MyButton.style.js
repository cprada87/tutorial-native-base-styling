import variable from "../native-base-theme/variables/platform";

export const STYLE_NAME = 'Piki.MyButton';

export const generateStyle = (variables = variable) => ({
  'NativeBase.Button': {
  },
});

export const styleRule = (variables = variable) => ({
	[STYLE_NAME]: generateStyle(variables)
});