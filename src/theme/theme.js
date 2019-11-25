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
        MuiListItem : {
            button: {
                '&:hover' : {
                    background: '#b1c9a9 !important'
                }
            }
        }
    }
});
theme = responsiveFontSizes(theme);
export default theme;