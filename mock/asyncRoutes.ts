// 模拟后端动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { $t } from "@/plugins/i18n";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */
const permissionRouter = {
  path: "/permission",
  meta: {
    title: $t("menus.purePermission"),
    icon: "ep:lollipop",
    rank: 10
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: $t("menus.purePermissionPage"),
        roles: ["admin", "common"]
      }
    },
    {
      path: "/permission/button",
      meta: {
        title: $t("menus.purePermissionButton"),
        roles: ["admin", "common"]
      },
      children: [
        {
          path: "/permission/button/router",
          component: "permission/button/index",
          name: "PermissionButtonRouter",
          meta: {
            title: $t("menus.purePermissionButtonRouter"),
            auths: [
              "permission:btn:add",
              "permission:btn:edit",
              "permission:btn:delete"
            ]
          }
        },
        {
          path: "/permission/button/login",
          component: "permission/button/perms",
          name: "PermissionButtonLogin",
          meta: {
            title: $t("menus.purePermissionButtonLogin")
          }
        }
      ]
    }
  ]
};

export default defineFakeRoute([
  {
    url: "/get-async-routes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [permissionRouter]
      };
    }
  }
]);
