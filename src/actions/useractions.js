import { userConstants } from '../actionTypes';
import { userService } from '../services';
import { alertActions } from '.';
import { history } from '../helpers';
export const userActions = {
    login,
    
	register,
	userDetails,
	editUserDetails
};
function login(email, password) {
    return (dispatch) => {
        // dispatch(request({ username }));
        userService.login(email, password).then(
           async (user) => {
				// let data = await user.data;
				console.log(user)
                dispatch({
                    type: userConstants.LOGIN_SUCCESS,
                    payload: {user},
				  });
				  
                // history.push(from);
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };
    function request(user) {
        return { type: userConstants.LOGIN_REQUEST, user };
    }
    function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user};
    }
    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error };
    }
}

function register(user) {
    return (dispatch) => {
        //dispatch(request(user));
        userService.register(user).then(
            (user) => {
                // dispatch(success());
                // history.push('/login');
                dispatch(alertActions.success('Registration successful'));
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };
    function request(user) {
        return { type: userConstants.REGISTER_REQUEST, user };
    }
    function success(user) {
        return { type: userConstants.REGISTER_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, error };
    }
}




export function userDetails(userId) {
	return (dispatch) => {
		try {
			const response = userService.userDetails(
				userId
			);
			const { data } = response;
			dispatch({
				type: userConstants.GET_DETAILS_SUCCESS,
				payload: data,
			});
		} catch (err) {
			const { data } = err.response;
			dispatch({
				type: userConstants.GET_DETAILS_ERROR,
				payload: data,
			});
		}
	};
}


export function editUserDetails(userId, userName, status, profileImage, phoneNumber) {
	return (dispatch) => {
		try {
			const response = userService.userDetails(
				userId, 
				userName, 
				status, 
				profileImage, 
				phoneNumber
			);
			const { data } = response;
			dispatch({
				type: userConstants.EDIT_SUCCESS,
				payload: data,
			});
		} catch (err) {
			const { data } = err.response;
			dispatch({
				type: userConstants.EDIT_ERROR,
				payload: data,
			});
		}
	};
}