<template>
  <div class="components-list">
    <div class="container mx-auto px-4 py-5">
      <h1 class="text-4xl">UI Components</h1>
      <hr />

      <div class="flex items-center mt-3">
        <input placeholder="Search" v-model="search" class="w-full" />
        <i
          class="fas fa-times text-red-500 fa-2x ml-2 cursor-pointer"
          @click="search = ''"
        />
      </div>

      <div class="mt-3">
        <Badge
          @click="search = tag"
          color="primary"
          class="mr-1 cursor-pointer"
          v-for="(tag, index) in tags"
          :key="index"
        >
          {{ tag }}
        </Badge>
      </div>

      <div
        v-for="(component, index) in componentsList"
        :key="index"
        class="mt-3"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-2xl">{{ component.title }}</h3>
          <Button
            @click="handleComponentInList(component.id)"
            :color="myList.includes(component.id) ? 'warning' : 'success'"
            class="get-component-btn h-8 text-sm"
          >
            <i
              class="fas"
              :class="myList.includes(component.id) ? 'fa-minus' : 'fa-plus'"
            />
            {{ myList.includes(component.id) ? 'Retirer' : 'Ajouter' }}
          </Button>
        </div>
        <hr />
        <component :is="component.desc" />
      </div>
    </div>
  </div>
</template>

<script>
import docsJson from '../../docs.json';

export default {
  name: 'ComponentsList',
  created() {
    console.log(docsJson);
  },
  computed: {
    componentsList() {
      return this.components.filter((e) => e.tags.includes(this.search));
    },
    tags() {
      let res = [];
      this.components
        .filter((e) => e.tags.includes(this.search))
        .forEach((element) => {
          res = [...res, ...element.tags.split(' ')];
        });
      return res;
    },
  },
  methods: {
    handleComponentInList(id) {
      if (this.myList.includes(id)) {
        let index = this.myList.indexOf(id);
        this.myList.splice(index, 1);
      } else {
        this.myList.push(id);
      }
    },
  },
  data() {
    return {
      myList: [],
      search: '',
      components: docsJson,
    };
  },
};
</script>

<style lang="scss">
.components-list {
  min-height: 100vh;

  .get-component-btn {
    padding: 0 10px;
  }
}
</style>
