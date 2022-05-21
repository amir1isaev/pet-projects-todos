import { ITheme } from 'core/theme'
import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
