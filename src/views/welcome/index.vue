<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav";

const { title } = useNav();
defineOptions({
  name: "Welcome"
});
</script>

<template>
  <h1>{{ title }}</h1>
</template>
