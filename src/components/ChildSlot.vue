<template>
    <div class="container" v-if="open1 === true">
        <header>
            <h1>헤더타이틀</h1>
            <!-- 자식영역에 내용 삽입부분에 slot 태그 삽입 -->
            <slot></slot>
        </header>
        <main>
            <h1>메인타이틀</h1>
            <slot name="mainTitle"></slot>
        </main>
        <footer>
            <h1>푸터타이틀</h1>
            <slot name="footerTitle"></slot>
            <button @click="open1=false">닫기</button>
        </footer>
    </div>
</template>

<script>
export default {
    data () {
        

        return {
            open1 : false
        }
    }
}
</script>

<style lang="css" scoped>
.container{
    width: 500px;
    height: 500px;
    background-color: rgba(105, 105, 105, 0.61);
    position: fixed;
    top: 0;
    left: 50%;
    margin-left: -250px;
    color: white;
    text-align: center;
    color: black;
}
header{
    height: 100px;
    line-height: 100px;
}
main{
    height: 300px;
    background-color: rgb(180, 255, 255);
    border-top: 5px solid rebeccapurple;
    border-bottom: 5px solid salmon;
    box-sizing: border-box;
}
footer{
    height: 100px;
}
</style>