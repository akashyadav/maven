import Utils from '../../helpers/utils';

export const GET_USER_DATA = 'GET_USER_DATA';

export const getUserData = () => {
    return(
        async (dispatch) => {
            const res = await Utils.request({url: 'users/1'}).catch(error => {throw error})
            dispatch({type: GET_USER_DATA, payload:res.data})
            return(res);
        }
    );
}