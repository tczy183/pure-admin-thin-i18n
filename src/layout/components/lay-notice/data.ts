import { $t } from "@/plugins/i18n";

export interface ListItem {
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  description: string;
  status?: "primary" | "success" | "warning" | "info" | "danger";
  extra?: string;
  isRead: boolean;
}

export interface TabItem {
  key: string;
  name: string;
  list: ListItem[];
  emptyText: string;
}

export const noticesData: TabItem[] = [
  {
    key: "1",
    name: $t("status.pureTodo"),
    list: [
      {
        avatar: "",
        title: "光刻机紧急报警",
        description: "光刻机PM-001发生温度过高报警，需要立即处理",
        datetime: "",
        extra: "紧急处理",
        status: "danger",
        type: "3",
        isRead: false
      },
      {
        avatar: "",
        title: "刻蚀机气体泄漏",
        description: "刻蚀机ET-002检测到工艺气体泄漏，请立即检查",
        datetime: "",
        extra: "待处理",
        status: "danger",
        type: "3",
        isRead: false
      },
      {
        avatar: "",
        title: "离子注入机真空异常",
        description: "离子注入机IM-003真空度异常，需要立即处理",
        datetime: "",
        extra: "进行中",
        status: "danger",
        type: "3",
        isRead: true
      },
      {
        avatar: "",
        title: "CVD设备压力报警",
        description: "CVD设备压力超出安全范围，请立即检查",
        datetime: "",
        extra: "未开始",
        status: "danger",
        type: "3",
        isRead: true
      }
    ],
    emptyText: $t("status.pureNoTodo")
  },
  {
    key: "2",
    name: $t("status.pureMessage"),
    list: [
      {
        avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile1.svg",
        title: "光刻机温度异常",
        description:
          "光刻机PM-001温度波动超出正常范围，但未达到报警阈值，请关注。",
        datetime: "今天",
        type: "2",
        status: "warning",
        isRead: false
      },
      {
        avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile2.svg",
        title: "刻蚀速率偏差",
        description:
          "刻蚀机ET-002当前刻蚀速率较标准值偏差5%，建议检查工艺参数。",
        datetime: "昨天",
        type: "2",
        status: "warning",
        isRead: true
      },
      {
        avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile5.svg",
        title: "离子注入剂量波动",
        description: "离子注入机IM-003注入剂量出现轻微波动，建议观察。",
        datetime: "10分钟前",
        type: "2",
        status: "warning",
        isRead: false
      }
    ],
    emptyText: $t("status.pureNoMessage")
  },
  {
    key: "3",
    name: $t("status.pureNotify"),
    list: [
      {
        avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile1.svg",
        title: "设备保养提醒",
        description: "光刻机PM-001将于3天后需要进行季度保养，请提前安排。",
        datetime: "今天",
        type: "1",
        status: "info",
        isRead: false
      },
      {
        avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile2.svg",
        title: "设备校准通知",
        description: "刻蚀机ET-002校准周期已到，请安排工程师进行校准。",
        datetime: "昨天",
        type: "1",
        status: "primary",
        isRead: true
      },
      {
        avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile5.svg",
        title: "备件更换提醒",
        description: "离子注入机IM-003的离子源使用寿命即将到期，请准备更换。",
        datetime: "2小时前",
        type: "1",
        status: "info",
        isRead: false
      }
    ],
    emptyText: $t("status.pureNoNotify")
  }
];
