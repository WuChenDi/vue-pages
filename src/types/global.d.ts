import { AxiosRequestConfig } from 'axios';
import { ElLoadingComponent } from 'element-ui/types/loading';
import { RouteConfig } from 'vue-router';
declare global {
  interface Window {
    WebKitMutationObserver;
    MozMutationObserver;
    mozRequestAnimationFrame;
    webkitRequestAnimationFrame;
  }
  declare var wx: any;
  declare function request<T = any>(config: AxiosRequestConfig): Promise<T>;
}

/**
 * 全局路由配置类型
 */
type BaseRouteConfig = Omit<RouteConfig, 'path'> & {
  hidden?: boolean;
  title?: string;
  path?: string;
  component?: Promise<Component> | Component;
  menuName?: string;
  subMenus?: string[];
};
type GeneralRouteConfig = Omit<BaseRouteConfig, 'children'> & { children?: GeneralRouteConfig[] };
