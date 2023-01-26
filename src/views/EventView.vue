<template>
    <div>
        <h1>이벤트</h1>
        
        <!-- 이벤트
        v-on => @
        1. 마우스 이벤트
        => 클릭 이벤트 @click="" -->

        <!-- 직접적인 이벤트 발생 -->
        <button @click="num++">이벤트{{ num }}</button>
        <!-- 함수로 이벤트 발생 -->
        <button @click="pluse">함수 이벤트{{ num }}</button>
        <!-- 함수의 인자로 이벤트 발생 -->
        <button @click="setCount(30)">함수 인수 전달 이벤트{{ num }}</button>
        <!-- 여러 함수의 호출 -->
        <button @click="one(), two()">여러개 이벤트</button>
    
        <!-- 2. 체인지 이벤트 @change=""
        => select 태그에 가장 많이 사용
        => 옵션이 변경될때마다 change 이벤트 발생 -->
        <select v-model="selectvalue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>

        <!-- 3. 키 이벤트 @key
        enter, tab, delete, esc, space, up, down, left, right
        ctrl, alt, shift -->
        <input type="text" @keyup.enter="enterPlay" />
        <input type="text" @keyup.alt.enter="altEnter" v-model="num" />
    </div>
</template>

<script>
export default {
    data () {
        

        return {
            num: 0,
            selectvalue: '',
        }
    },
    methods: {
        pluse() {
            this.num += 10
        },
        setCount(count) {
            this.num = count
        },
        one() {
            alert('one')
        },
        two() {
            alert('two')
        },
        changeSelect() {
            alert(this.selectvalue);
        },
        enterPlay() {
            alert("엔터키가 눌려졌음");
        },
        altEnter() {
            this.num += 10000
        }
    }
}
</script>

<style lang="scss" scoped>

</style>