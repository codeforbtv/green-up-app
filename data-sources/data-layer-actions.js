// @flow
import * as types from "../constants/action-types";
import TrashDrop from "../models/trash-drop";
import Message from "../models/message";

type ActionType = { type: string, error?: any, data?: any };

export function userAuthenticated(user: UserType): ActionType {
    return { type: types.LOGIN_SUCCESSFUL, data: user };
}

export function messageFetchSuccessful(messages: Object): ActionType {
    const _key = Object.keys(messages)[0];
    const myMessages = Object
        .keys(messages[_key])
        .reduce((messageHash: Object, key: string): Object => Object.assign({}, messageHash, { [key]: Message.create(Object.assign({ uid: key }, messages[_key][key])) }), {});
    return { type: types.FETCH_MESSAGES_SUCCESS, data:  { [_key]: myMessages } };
}

export function noCurrentUser(): ActionType {
    return { type: types.NO_CURRENT_USER };
}

export function userLoggedOut(): ActionType {
    return { type: types.LOGOUT_SUCCESSFUL };
}

export function userFailedLogOut(error: any): ActionType {
    return { type: types.LOGOUT_FAIL, error };
}

export function userFailedAuthentication(error: any): ActionType {
    return { type: types.LOGIN_FAIL, error };
}

export function townDataFetchFail(): ActionType {
    return { type: types.FETCH_TEAMS_FAIL };
}

export function resetData(): ActionType {
    return { type: types.RESET };
}

export function trashDropFetchSuccessful(_trashDrops: Object): ActionType {
    const trashDrops = Object
        .keys(_trashDrops || {})
        .reduce((trashDropObj: Object, key: string): Object => (Object.assign({}, trashDropObj, { [key]: TrashDrop.create(_trashDrops[key], key) })), {});
    return { type: types.FETCH_TRASH_DROPS_SUCCESS, data:trashDrops };
}

export function profileFetchSuccessful(profile: Object): ActionType {
    return { type: types.FETCH_PROFILE_SUCCESS, data: profile };
}


export function inviteesFetchSuccessful(invitees: Object, teamId: string): ActionType {
    return { type: types.FETCH_INVITEES_SUCCESS, data:{ invitees, teamId } };
}

export function teamMemberFetchSuccessful(membership: Object, teamId: string): ActionType {
    return { type: types.TEAM_MEMBER_FETCH_SUCCESS, data: { membership, teamId } };
}

export function teamRequestFetchSuccessful(requests: Object, teamId: string): ActionType {
    return { type: types.TEAM_REQUEST_FETCH_SUCCESS, data:{ requests, teamId } };
}

export function profileCreateFail(error: Object): ActionType {
    return { type: types.UPDATE_PROFILE_FAIL, error };
}

export function profileUpdateFail(error: Object): ActionType {
    return { type: types.UPDATE_PROFILE_FAIL, error };
}

export function profileFetchFail(error: Object): ActionType {
    return { type: types.FETCH_PROFILE_FAIL, error };
}

export function townDataFetchSuccessful(townData: Object): ActionType {
    return { type: types.FETCH_TOWN_DATA_SUCCESS, townData };
}

export function invitationFetchSuccessful(invitations: Object): ActionType {
    return { type: types.FETCH_INVITATIONS_SUCCESS, data:invitations };
}

export function noTeamsToLoad(): ActionType {
    return { type: types.NO_TEAMS_TO_LOAD };
}

export function initilizationSuccessful(): ActionType {
    return { type: types.INITIALIZE_SUCCESS };
}

export function initilizationFail(): ActionType {
    return { type: types.INITIALIZE_FAIL };
}

export function myTeamsFetchSuccessful(myTeams: Array<Object>): ActionType {
    return { type: types.FETCH_MY_TEAMS_SUCCESS, data: myTeams };
}