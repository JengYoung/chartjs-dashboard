import { globalTheme } from './../styles/theme';
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: globalTheme['color'];
    fontSize: globalTheme['fontSize'];
    fontWeight: globalTheme['fontWeight'];
    fontFamily: globalTheme['fontFamily'];
    layouts: globalTheme['layouts'];
  }
}
