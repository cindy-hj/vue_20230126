<template>
    <div>
        <h1>inject로 받기</h1>
        <h1 v-if="tfmsg === true">나는 보일까? 안보일까?</h1>
        <h1>{{ textmsg }}</h1>
    </div>
</template>

<script>
export default {
    inject: ['textmsg', 'tfmsg'],
    // => 부모가 provide()로 보낸 메세지는
    // => 자식이 inject로 받음
    // => inject는 배열의 문자형으로 부모의 데이터를 받음
    // => 정적데이터는 잘받지만 동적데이터는 안옴

}
</script>

<style lang="scss" scoped>

</style>