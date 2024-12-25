import axios from 'axios';
import { MOCK_USER_DATA } from 'mocks/mock-user-data';
import { getSessionDtls, getValueFromSessionStorage } from 'utils';
import {
  API_ADMIN_URL,
  API_ANALYTIC_URL,
  API_HOST_URL,
  AUTH_BYPASS,
  HTTP_STATUS
} from 'utils/constants';
import { encrypt } from 'utils/encrypt-decrypt';

const axiosClient = axios.create({
  baseURL: API_HOST_URL
});

axiosClient.interceptors.request.use(
  async (config) => {
    if (config?.isAnalytic || config?.config?.isAnalytic) {
      config.baseURL = API_ANALYTIC_URL;
    } else if (config?.isAdmin || config?.config?.isAdmin) {
      config.baseURL = API_ADMIN_URL;
    }

    if (config?.data?.password) {
      config.data.password = encrypt(config.data.password);
    }

    if (config?.url?.includes('$userId')) {
      const userId = AUTH_BYPASS ? MOCK_USER_DATA.userId : getSessionDtls()?.userId;
      if (userId) {
        config.url = config.url.replace('$userId', userId);
      } else {
        return;
      }
    }
    // const account = msalInstance.getAllAccounts();
    // const response = await msalInstance.acquireTokenSilent({
    //   ...loginRequest,
    //   account: account
    // });

    // if (config?.excludeAPI) {
    //   config.baseURL = API_HOST_DEFAULT;
    // }

    // const token = response.idToken;
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    config.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
    config.headers['Access-Control-Allow-Origin'] = '*';
    if (config?.hasFileUpload) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
      config.headers['content-disposition'] = 'attachment;';
    }

    //config.headers["Authorization"] = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImFwcElkLWYxNDMyZmZmLWQ1ODgtNDg3Ny04NWYwLTI1ZjE0YTIyOWZhMy0yMDIzLTA2LTI3VDA1OjU0OjMxLjQzNTQyMzU0MiIsInZlciI6NH0.eyJpc3MiOiJodHRwczovL2V1LWRlLmFwcGlkLmNsb3VkLmlibS5jb20vb2F1dGgvdjQvZjE0MzJmZmYtZDU4OC00ODc3LTg1ZjAtMjVmMTRhMjI5ZmEzIiwiZXhwIjoxNjkwMTk3ODYwLCJhdWQiOlsiNDNiZGY0NjItY2QzMC00MTAwLWJlYjctNGQ5OWRjNWRhZDE3Il0sInN1YiI6Ijk4NTA4NGM2LWFiMDQtNDI1My05ZDQ5LWM4MjVjZjk2OWQ4YSIsImFtciI6WyJpYm1pZCJdLCJpYXQiOjE2OTAxOTQyNjAsInRlbmFudCI6ImYxNDMyZmZmLWQ1ODgtNDg3Ny04NWYwLTI1ZjE0YTIyOWZhMyIsInNjb3BlIjoib3BlbmlkIGFwcGlkX2RlZmF1bHQgYXBwaWRfcmVhZHVzZXJhdHRyIGFwcGlkX3JlYWRwcm9maWxlIGFwcGlkX3dyaXRldXNlcmF0dHIgYXBwaWRfYXV0aGVudGljYXRlZCJ9.QrJw7nVm1OvWIfFxcbRmU07J7c9Myd0RZnV1Ev7A2u_b4ZPCICmXiTfPS56MS6r0If5bbAOTSnwFsQ5Yo-N2NIED4iG27hMlD_z2xf88X-W2oirb4qybSOUNbG2-ocYkKqTICPzlm3D8Aqsag8Aff2rOIsQdnJ2KhpLZatoptZdr0GJs5J8x6q2a1fsDyQycfs6Y76j7qhHjlhcWQLHFI7sIwmDJ3gpqBKxXKro1dDK21FK3emy75Z58URdDGmCbReAIT4qljp_CB3fb1el8vEn_wkaH6ZftZFgvNNzTusPDuJcfUCsulzmH38efTRZgBoT5F3iaZfreDgGq2EDwpw";
    config.headers['Authorization'] = `Bearer ${getValueFromSessionStorage('token')}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  function (response) {
    // store.dispatch(closeLoading());

    // return response.data.data;
    response.headers['Content-Type'] = 'application/zip';
    response.headers['content-disposition'] = 'attachment; filename=rfp.zip ';
    return responseHandler(response);
  },
  function (error) {
    // store.dispatch(closeLoading());
    if (error.response) {
      // store.dispatch(NotificationAction.setNotificationMsg({
      //     notificationMsg: 'Session expired'
      // }));
      if (401 === error.response.status) {
        // msalInstance
        //   .loginRedirect(loginRequest)
        //   .then((res) => console.log('login redirect', res))
        //   .catch((e) => {
        //     console.log('error', e);
        //   });
      }
    } else if (error.message.includes('timeout')) {
      // store.dispatch(createMessage('error', {
      //     title: 'Reques timeout',
      //     subtitle: `Request timeout of ${HTTP_TIMEOUT/1000} seconds exceeded`
      // }))
      //return null error. It means the error has been handled.
      return Promise.reject(null);
    } else {
      // store.dispatch(NotificationAction.setNotificationMsg({
      //     notificationMsg: error
      // }));
    }
    return Promise.reject(error);
  }
);

export function GET(URL, config) {
  return axiosClient.get(`${URL}`, config).then((response) => response);
}

export function POST(URL, payload, config) {
  return axiosClient.post(`${URL}`, payload, config).then((response) => response);
}

export function PATCH(URL, payload, config) {
  return axiosClient.patch(`/${URL}`, payload, config).then((response) => response);
}

export function PUT(URL, payload, config) {
  return axiosClient.put(`/${URL}`, payload, config).then((response) => response);
}

export function DELETE(URL, params, config) {
  return axiosClient
    .delete(`/${URL}`, { data: params, config: config })
    .then((response) => response);
}

const responseHandler = (res) => {
  if (HTTP_STATUS.OK !== res.status) {
    // store.dispatch(NotificationAction.setNotificationMsg({
    //     notificationMsg: 'Network error'
    // }));
    throw new Error('Network error');
  }
  if (res.status >= 400) {
    // console.log(">400")
    // store.dispatch(createMessage('error', {
    //     title: 'Request failed',
    //     subtitle: `${res.msg}`
    // }))
    return Promise.reject(res.data);
  }
  // if (Constants.HTTP_RESPNSE_OK !== res.data.retCode) {
  //     // store.dispatch(NotificationAction.setNotificationMsg({
  //     //     notificationMsg: res.data.msg
  //     // }));
  //     throw new Error(res.data.msg);
  // }
  return res;
};

export default {
  GET,
  PUT,
  POST,
  DELETE
};
