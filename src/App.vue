<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
    <ReDialog />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import { ReDialog } from "@/components/ReDialog";
import en from "element-plus/es/locale/lang/en";
import ja from "element-plus/es/locale/lang/ja";
import ko from "element-plus/es/locale/lang/ko";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import zhTw from "element-plus/es/locale/lang/zh-tw";

import plusEn from "plus-pro-components/es/locale/lang/en";
import plusZhCn from "plus-pro-components/es/locale/lang/zh-cn";

export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
    ReDialog
  },
  computed: {
    currentLocale() {
      switch (this.$storage.locale?.locale) {
        case "zh":
          return { ...zhCn, ...plusZhCn };
        case "en":
          return { ...en, ...plusEn };
        case "tw":
          return { ...zhTw, ...plusEn };
        case "ja":
          return { ...ja, ...plusEn };
        case "ko":
          return { ...ko, ...plusEn };
        default:
          return { ...zhCn, ...plusZhCn };
      }
    }
  }
});
</script>
