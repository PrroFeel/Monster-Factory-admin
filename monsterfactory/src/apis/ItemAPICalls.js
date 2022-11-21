import {
    GET_ITEMS,
    // GET_ITEM,
    // POST_ITEM,
    // PUT_ITEM,
    // DELETE_ITEM
} from '../modules/ItemModule.js';


// 아이템 목록 조회
export const callItemAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/items`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
            console.log('result', result);
            dispatch({ type: GET_ITEMS, payload: result });
        
    };
}


// // 아이템 하나 상세 조회
// export const callItemBySearchAPI = ({search}) => {

//     const requestURL = `http://${REACT_APP_RESTAPI_IP}/items/${search}`;

//     return async (dispatch, getState) => {

//         const result = await fetch(requestURL, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "*/*"
//             }
//         })
//         .then(response => response.json());

//         dispatch({ type: GET_ITEM, payload: result });
//     };
// };


// // 아이템 등록
// export const callItemRegistAPI = ({form}) => {

//     const requestURL = `http://${REACT_APP_RESTAPI_IP}/item/regist`;

//     return async (dispatch, getState) => {

//         const result = await fetch(requestURL, {
//             method: "POST",
//             headers: {
//                 "Accept": "*/*",
//                 "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
//             },
//             body: form
//         })
//         .then(response => response.json());

//         dispatch({ type: POST_ITEM, payload: result });
//     };
// };


// // 아이템 수정
// export const callItemUpdateAPI = ({form}, itemId) => {

//     const requestURL = `http://${REACT_APP_RESTAPI_IP}/item/update/${itemId}`;

//     return async (dispatch, getState) => {

//         const result = await fetch(requestURL, {
//             method: "PUT",
//             headers: {
//                 "Accept": "*/*",
//                 "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
//             },
//             body: form
//         })
//         .then(response => response.json());

//         dispatch({ type: PUT_ITEM, payload: result });
//     };
// };

// // 아이템 삭제
// export const callItemDeleteAPI = (itemId) => {

//     const requestURL = `http://${REACT_APP_RESTAPI_IP}/item/delete/${itemId}`;

//     return async (dispatch, getState) => {

//         const result = await fetch(requestURL, {
//             method: "DELETE",
//             headers: {
//                 "Accept": "*/*",
//                 "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
//             }
//         })
//         .then(response => response.json());

//         dispatch({ type: DELETE_ITEM, payload: result });
//     };
// };