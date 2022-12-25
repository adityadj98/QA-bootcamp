import BaseApi from '$root/pages/base.api';

const ReqresApi = {
    register: (data) => BaseApi.post('/register', data),
    list_user: (param) => BaseApi.get(`/user?page=${param}`)
}

export default ReqresApi;