<template>
    <div>
        <button @click="open=true">열기</button>
    </div>
    <ChildPage :open="open" @close="open=false" />

    <div class="slot">
        <child-slot ref="child">
            <template v-slot:mainTitle>부모가 자식에게 태그 삽입</template>
            <template v-slot:footerTitle>
                <h5>푸터에 내용을 넣기</h5>
            </template>
            <!-- => 자식 영역에 slot 태그 삽입 후 name으로 이름 지정함 -->
            <!-- => 부모 영역에 template 태그에 v-slot:name 설정으로 -->
            <!-- => 내용 및 태그 삽입 -->
            <template v-slot:default>이름 없는 slot</template>
        </child-slot>
        <!-- => slot 사용시 컴포넌트 태그 삽입은 더블태그로 해야함 -->
        <!-- => 자식에게 slot 지정 -->
        <!-- => 해당 자식의 태그에 부모가 내용 삽입은 -->
        <!-- => 태그의 내용 삽입에 사용함 -->

        <button type="button" @click="handleOpen">자식 열기</button>
        <!-- => 자식에게 있는 open을 true로 변경 -->
    </div>
</template>

<script>
import ChildPage from '../components/ChildPage.vue'
import ChildSlot from '../components/ChildSlot.vue'


export default {
    data () {
        
        

        return {
            open: false
        }
    },
    components: {
        ChildPage,
        ChildSlot
    },
    methods: {
        handleOpen() {
            this.$refs.child.open1=true;
            // 내 안에 있는 child 안에 open1을 true로 변경
        }
    }
}
</script>

<style lang="scss" scoped>

</style>