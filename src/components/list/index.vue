<template>
  <div v-if="ready" class="container">
    <div class="d-flex justify-content-end">
      <i class="fas fa-search" :class="$style.icon"></i>
      <input class="mt-2" :class="$style.input" type="text" name="" id="" placeholder="Search" v-model="search">
    </div>
    <div class="row row-cols-xl-5 row-cols-md-2 row-cols-1 ">
      <div class="col mt-3 mb-3 d-flex justify-content-center" v-for="product in filteredList" :key="product.id">
        <Card :product="product" @modal-data="modalData = $event"/>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="isFirstPage ? 'disabled' : ''" @click="onClickPreviousPage()"><a class="page-link" href="#">Previous</a></li>
          <template v-for="page in totalPage">
            <li class="page-item" @click="onClickPage(page)" :key="page"><a class="page-link" href="#">{{page}}</a></li>
          </template>
          <li class="page-item" :class="isLastPage ? 'disabled' : ''" @click="onClickNextPage()"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
    <Modal :modal-data="modalData" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"/>
  </div>
  <Loading v-else/>
</template>

<script>
import Modal from '@/components/modal'
import Card from '@/components/card'
import Loading from '@/components/loading';
import productService from '@/services/products.js'
export default {
  name: 'List',
    components: {
    Modal,
    Card,
    Loading,
  },
  data() {
    return {
      ready: false,
      allProducts: [],
      currentPage: 0,
      totalPage: 0,
      totalCount: 0,
      itemPerPage: 10,
      initialPage: 1,
      search: '',
      modalData: {
        product: {},
        variant: {},
      },
    };
  },
  computed: {
    filteredList() {
      if (this.search) {
        return this.allProducts.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        }).slice(this.currentPage*10, (this.currentPage+1)*10);
      } else {
        return this.allProducts.slice(this.currentPage*10, (this.currentPage+1)*10);
      }
    },
    isFirstPage() {
      if (!this.allProducts) return true;
      return this.currentPage === 0 ? true : false;
    },
    isLastPage() {
      if (!this.allProducts) return true;
      return this.currentPage === this.totalPage-1 ? true : false;
    },
  },
  watch: {
    search(val) {
      this.currentPage = 0;
      if(val) {
        this.totalCount = this.allProducts.filter(post => {
          return post.title.toLowerCase().includes(val.toLowerCase())
        }).length;
        this.totalPage = Math.ceil(this.totalCount / this.itemPerPage);
      } else {
        this.totalCount = this.allProducts.length;
        this.totalPage = Math.ceil(this.totalCount / this.itemPerPage);
      }
    }
  },
  beforeMount() {
    this.getData()
  },
  methods: {
    async getData() {
      const res = await productService.getProducts();
      this.allProducts = res.data.filter(x => x.status === 'active');
      this.totalCount = this.allProducts.length;
      this.totalPage = Math.ceil(this.totalCount / this.itemPerPage);
      this.ready = true;
    },
    onClickPreviousPage() {
      if (this.currentPage === 0) return; 
      this.currentPage -= 1;
    },
    onClickNextPage() {
      if (this.currentPage === this.totalPage-1) return; 
      this.currentPage += 1;
    },
    onClickPage(index) {
      this.currentPage = index-1;
    },
  }
}
</script>

<style src='./style.less' lang='less' module/>

