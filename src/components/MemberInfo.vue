<template>
<ul><li v-for="member in members" :key="member.id">ID:{{ member.id }}, NAME:{{member.name}}</li></ul>
</template>

<script>
export default {
    name : "MemberInfo",
    props :['members']
}
</script>