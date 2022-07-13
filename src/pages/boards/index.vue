<template>
  <div class="px-2">
    <h1 class="text-xl font-bold">Boards</h1>
    <div class="flex flex-row">
      <Board
          v-for="board in boards"
          :key="board.title"
          :image="board.image"
          :order="board.order"
          :tasks="board.tasks"
          :title="board.title"
          class="mr-2"
      ></Board>
      <kbutton :fill-mode="'flat'" @click="addNewBoard">New Board+</kbutton>
    </div>
  </div>
</template>

<script>
import Board from '@/components/Board.vue';
import {Button} from '@progress/kendo-vue-buttons';

export default {
  name: 'boards',
  components: {
    Board,
    kbutton: Button,
  },
  data() {
    return {
      boards: [
        {
          title: 'My first board',
          order: '',
          image: 'https://picsum.photos/285/100',
          tasks: [],
        },
        {
          title: 'My second board',
          order: '',
          image: 'https://picsum.photos/285/100',
          tasks: [],
        },
        {
          title: 'My third board',
          order: '',
          image: 'https://picsum.photos/285/100',
          tasks: [],
        },
      ],
    };
  },
  methods: {
    addNewBoard() {
      alert('add a board');
    },
  },
};
</script>

<style>
.k-button {
  width: 285px;
}
</style>
