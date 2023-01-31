<template>
    <div>
        <child-inject></child-inject>
        <h1 v-if="tf === true">부모는 제어</h1>
        <button @click="close">클릭</button>
        <!-- <h1>{{ text }}</h1> -->
    </div>
    <!-- => 계층 구조가 복잡하다고 해도 부모 데이터를 자식에게 쉽게 보낼 수 있음 -->
    <!-- => 단점: 어떤 부모한테서 데이터를 받았는지 확인하기 힘듬 -->
    <!-- 부모는 provide로 보내고 자식은 inject로 받기 -->
</template>

<script>
import ChildInject from '@/components/ChildInject.vue';

export default {
    
    data () {
        

        return {
            text: '부모가 보내는 메세지',
            tf: true,
        }
    },
    components: {
        ChildInject
    },
    // method는 오타임...
    methods: {
        close() {
            // 버튼으로 부모 보였다 사라졌다 하기
            if(this.tf === true) {
                return this.tf = false
            } else {
                return this.tf = true
            }
        }
    },
    // provide는 methods 밖에...
    provide() {
        return{
            textmsg: this.text,
            tfmsg: this.tf
        }
    }
}
</script>

<style lang="css" scoped>

</style>