<template>
    <div>
        <!-- 두개의 수를 입력받아서 더한 값을 출력시키기 -->

        <!-- 1. 옵션 api 구조 data() 데이터형 사용 -->
        
        <!-- 2. 반응형 api 구조(기본 setup 구조) reactive 함수 사용 -->
        <!-- <input type=text v-model="state.num1" @keyup="handleResult"/>
        <input type=text v-model="state.num2" @keyup="handleResult"/>
        {{ state.result }} -->

        <!-- 3. reactive + computed 구조 -->
        <!-- <input type=text v-model="state.num1" />
        <input type=text v-model="state.num2" />
        {{ state.result }} -->

        <!-- 4. reactive + computed + toRefs 구조 -->
        <!-- <input type=text v-model="num1" />
        <input type=text v-model="num2" />
        {{ result }} -->

        <!-- 5. 함수형태로 분리 사용 -->
        <input type=text v-model="num1" />
        <input type=text v-model="num2" />
        {{ result }}
    </div>
</template>

<script>



// 2. setup 구조
// import { reactive } from '@vue/reactivity'
// export default {
//     setup () {
//         const state = reactive({
//             num1 : 0,
//             num2 : 0,
//             result : 0
//         })

//         const handleResult = () => {
//             state.result = Number(state.num1) + Number(state.num2)
//         }

//         return {
//             state,
//             handleResult,
//         }
//     }
// }

// 3. reactive, computed 구조 
// import { reactive, computed } from '@vue/reactivity'
// export default {
//     setup () {
//         const state = reactive({
//             num1 : 0,
//             num2 : 0,
//             result : computed(() => 
//             Number(state.num1) + 
//             Number(state.num2)
//             )
//             // computed를 이용해서 => num1, num2가 변경되면 즉각적으로 result에 더한값을 반환함
//         })

//         return {
//             state,
//         }
//     }
// }

// 4. reactive, computed, toRefs 구조  
// import { reactive, computed, toRefs } from '@vue/reactivity'
// export default {
//     setup () {
//         const state = reactive({
//             num1 : 0,
//             num2 : 0,
//             result : computed(() => 
//             Number(state.num1) + 
//             Number(state.num2)
//             )
//         })

//         return toRefs(state)
//         // => toRefs를 사용 컴포넌트 밖에서도 반응형 처리가 가능하도록함 
//     }
// }

// 5. 함수형태로 분리 사용
import { handleResult } from '../common.js'
export default {
    setup () {
        let {num1, num2, result} = handleResult()
        
        return {num1, num2, result}
    }
}
</script>

<style lang="scss" scoped>

</style>