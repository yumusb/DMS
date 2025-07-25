// 应用设置配置类型定义
export interface AppSettings {
  /** 网页标题 */
  title: string;
  /** 侧边栏主题 深色主题theme-dark，浅色主题theme-light */
  sideTheme: 'theme-dark' | 'theme-light';
  /** 是否系统布局配置 */
  showSettings: boolean;
  /** 是否显示顶部导航 */
  topNav: boolean;
  /** 是否显示 tagsView */
  tagsView: boolean;
  /** 是否固定头部 */
  fixedHeader: boolean;
  /** 是否显示logo */
  sidebarLogo: boolean;
  /** 是否显示动态标题 */
  dynamicTitle: boolean;
  /** 错误日志环境配置 */
  errorLog: 'production' | 'development' | string[];
}

const settings: AppSettings = {
  /**
   * 网页标题
   */
  title: "DMS",
  /**
   * 侧边栏主题 深色主题theme-dark，浅色主题theme-light
   */
  sideTheme: 'theme-light',
  /**
   * 是否系统布局配置
   */
  showSettings: true,

  /**
   * 是否显示顶部导航
   */
  topNav: false,

  /**
   * 是否显示 tagsView
   */
  tagsView: true,

  /**
   * 是否固定头部
   */
  fixedHeader: true,

  /**
   * 是否显示logo
   */
  sidebarLogo: true,

  /**
   * 是否显示动态标题
   */
  dynamicTitle: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
};

export default settings; 