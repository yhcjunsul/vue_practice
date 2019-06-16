<template>
<div>
    <MemberInfo :members="members"></MemberInfo>
</div>
</template>

<script>
import MemberInfo from '@/components/MemberInfo.vue'

export default {
    data() {
        return {
            members: []
        }
    },
    components: {
        MemberInfo
    },
    mounted() {
        this.axios.get(`${process.env.VUE_APP_API_URL}/member`).then((response) => {
            this.members = response.data
        })
    }
}
</script>
