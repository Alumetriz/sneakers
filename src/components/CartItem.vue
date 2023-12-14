<script setup>
const props = defineProps({
  order: {
    type: Object
  }
})

const emit = defineEmits(['updateCart'])

const updateCart = () => {
  emit('updateCart', props.order)
}
</script>

<template>
  <div class="border border-[#EAEAEA] rounded-2xl p-5 mt-10">
    <div class="flex items-center justify-between gap-10">
      <img :src="order.img" alt="Sneakers" class="h-[70px] w-[70px]" />
      <div>
        <h3 class="max-w-[250px] text-left">{{ order.title }}</h3>
        <span class="font-bold">{{ order.price }} руб.</span>
      </div>
      <img
        src="@/assets/img/close.svg"
        alt="Add"
        class="cursor-pointer h-9 w-9"
        @click="updateCart"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
