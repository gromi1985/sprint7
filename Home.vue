<template>
 <div>
    <h2>Qué quieres hacer?</h2>
    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"  />
      <label for="jack">Una página web (500€)</label><br>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">Una consultoria SEO (300€)</label><br>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Una campaña de Google Ads(200€)</label><br>
    </div>
    <br />
    <span>Preu: {{ checkedNames }}</span>
  </div>
</template>

<script>
import Initial from '@/components/Initial'

export default {
  name:home
  }
</script>

<style>
</style>