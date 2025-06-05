<script setup lang="ts">
import { PropType } from "vue";
import { ListItem } from "../data";
import NoticeItem from "./NoticeItem.vue";
import { transformI18n } from "@/plugins/i18n";

const props = defineProps({
  list: {
    type: Array as PropType<Array<ListItem>>,
    default: () => []
  },
  emptyText: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(["update:list"]);

function handleRead(item: ListItem) {
  const index = props.list.findIndex(i => i === item);
  if (index !== -1) {
    const newList = [...props.list];
    newList[index] = { ...item, isRead: true };
    emit("update:list", newList);
  }
}
</script>

<template>
  <div v-if="list.length">
    <NoticeItem
      v-for="(item, index) in list"
      :key="index"
      :noticeItem="item"
      @read="handleRead"
    />
  </div>
  <el-empty v-else :description="transformI18n(emptyText)" />
</template>
