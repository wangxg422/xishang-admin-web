import { Login } from "@/api/interface/index";
// import authMenuList from "@/assets/json/authMenuList.json";
// import authButtonList from "@/assets/json/authButtonList.json";
import http from "@/api";

// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`/login`, params, { loading: false });
};

// 获取菜单列表
export const getAuthMenuListApi = () => {
  return http.get<Menu.MenuOptions[]>(`/menu/list`, {}, { loading: false });
  //return authMenuList;
};

// 获取按钮权限
export const getAuthButtonListApi = () => {
  return http.get<Login.ResAuthButtons>(`/auth/buttons`, {}, { loading: false });
  // 如果想让按钮权限变为本地数据，注释上一行代码，并引入本地 authButtonList.json 数据
  //return authButtonList;
};

// 用户退出登录
export const logoutApi = () => {
  return http.post(`/logout`);
};
