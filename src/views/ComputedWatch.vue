<template>
    <div>
        <h1>computed+watch</h1>
        <!-- computed
        => vue 인스턴스 내에 정의된 데이터 값과 연관된
        => 또하나의 데이터를 정의해서 사용 할 수 있도록함 -->
     
        <h1>방법1 문자열 형식으로 표현하는 방법</h1>
        <h1>{{ lastName+' '+firstName }}</h1>

        <h1>방법2 함수 형식으로 표현하는 방법</h1>
        <h1>{{ getFullName() }}</h1>

        <h1>방법3 computed 형식으로 표현하는 방법</h1>
        <h1>{{ fullName }}</h1>
        <!-- => computed 내에 함수를 정의하면 이때 함수명은 함수이자 동시에 vue 인스턴스의 데이터값이 되어 
        =>firstName, lastName과 같이 데이터값으로 사용 할 수 있음  -->

        <!-- watch
        => vue 인스턴스에 정의된 데이터 값이 변경이 되는지 감시하고
        => 변경이 되면 함수를 호출하여 실행시킴
        => computed는 기존에 정의된 데이터 값을 기반으로 새로운 데이터값을 활용하기 위해 사용
        => watch는 watch에 정의된 데이터 값 하나만을 감시하기 위해 사용함 
        => watch는 초기에 설정된 값이 있다고 하더라도 아무런 값을 할당 하지 않음
        => 반드시 초기 설정 값이 변경되어야 watch 실행-->
        <h1>watch로 정의하여 사용</h1>
        <h1>{{ totalName }}</h1>
        <button @click="changeName">클릭</button>
    </div>
</template>

<script>
export default {
    data () {


        return {
            firstName: 'HyunJeong',
            lastName: 'Shin',
            totalName: '',
        }
    },
    methods: {
        getFullName() {
            return this.lastName+' '+this.firstName
        },
        changeName() {
            this.firstName='Cindy'
        }
    },
    computed: {
        fullName() {
            return this.lastName+' '+this.firstName
        }
    },
    watch: {
        firstName() {
            this.totalName = this.lastName+' '+this.firstName
        }
    }
}
</script>

<style lang="scss" scoped>

</style>