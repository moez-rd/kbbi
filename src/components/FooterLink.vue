<template>
  <a :href="href" class="hover:underline" target="_blank"><slot></slot></a>
</template>

<script>
export default {
  name: 'FooterLink',
  props: ['href']
}
</script>
