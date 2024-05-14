import request from '@/api/request'
export function signup(params)
{
    return request({
        url:'/user/register',
        method:'post',
        data:{
            name:params.name,
            gender:params.sex,
            phoneNumber:params.phone,
            pwd:params.password,
            mailBox:params.email,
            verifyCode:params.verifyCode
        }
    })
}

export function code(mail)
{
    return request({
        url:'/mail/verifyCode',
        method:'post',
        data:{
            mailBox:mail,
        }
    })
}