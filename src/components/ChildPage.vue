<template>
    <div v-show="open === true">
        <header>
            <h1>header</h1>
        </header>
        <main>
            <h2>main</h2>
            <button @click="$emit('close')">닫기</button>
        </main>
        <footer>
            <h3>footer</h3>
        </footer>
    </div>
</template>

<script>
export default {
    props:{
        open:{
            type:Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>