import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
	palette: {
		primary: {
			main: '#186280'
		},
		
	},
	typography: {
        'body2' : {
            fontWeight : 'normal'
        }
    },
    overrides: {
        MuiNativeSelect : {
            root : {
                '& option'  : {
                    background: 'red'
                }
            }
        }
    }
});
theme = responsiveFontSizes(theme);
export default theme;