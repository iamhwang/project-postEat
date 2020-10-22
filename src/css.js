/* eslint-disable spaced-comment */
import { makeStyles } from '@material-ui/core/styles';

const MAIN_COLOR_RED = '#E85349';
const MAIN_COLOR_ORANGE = '#FF9480';
const MAIN_COLOR_YELLOW = '#FFEFA3';
const MAIN_COLOR_GREEN = '#00A178';
const MAIN_COLOR_WHITE = '#FFFFFF';
//const TRANSPARENT = 'transparent';
const width = '400px';

const useStyles = makeStyles((theme) => ({
  // 로그인 페이지
  backgroundLogin: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  windowLogin: {
    position: 'absolute',
    width: '60%',
    height: '60%',
    background: MAIN_COLOR_WHITE,
    margin: '10% 25% 10% 25%',
    display: 'flex',
  },
  windowleft: {
    margin: '5% 0% 0% 0%',
  },
  windowRight: {
    margin: '0% 0% 0% 0%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textfieldLogin: {
    margin: theme.spacing(1),
    width,
    color: 'green',
  },
  errorMessage: {
    fontWeight: 'bolder',
    color: MAIN_COLOR_ORANGE,
  },
  buttonLogin: {
    margin: theme.spacing(1),
    background: MAIN_COLOR_RED,
    width,
    fontWeight: 'bolder',
    '&:hover': {
      background: MAIN_COLOR_RED,
    },
  },
  buttonSignIn: {
    margin: theme.spacing(1),
    background: MAIN_COLOR_GREEN,
    fontWeight: 'bolder',
    width,
    '&:hover': {
      background: MAIN_COLOR_GREEN,
    },
  },
  buttonGoogleIn: {
    margin: theme.spacing(1),
    background: MAIN_COLOR_YELLOW,
    fontWeight: 'bolder',
    width,
    '&:hover': {
      background: MAIN_COLOR_YELLOW,
      color: 'white',
    },
  },
}));

export default useStyles;
