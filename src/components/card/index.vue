<template>
  <div class="card" :class='$style.card' style="width: 100%;">
    <div :class="$style.center" style="width: 100%;">
      <img class="card-img-top" :class="$style.size" :src="product.image.src" :alt="product.title">
    </div>
    <div class="card-body">
      <h5 class="card-title mb-3">{{product.title}}</h5>
      <template v-for="variant in product.variants">
        <div class="row" style="font-size:12px" :key="variant.id">
          <div class="col-6">
            <p class="card-text mb-1 text-muted">{{variant.title}}</p>
          </div>
          <div class="col-4">
            <p class="card-text mb-1 text-success">{{variant.price}}$</p>
          </div>
          <div class="col-2">
            <p class="card-text text-primary" style="cursor: pointer;" @click="openDetails(product, variant)" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
              </svg>
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalData: {
        product: {},
        variant: {},
      },
    };
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    }
  },
  methods: {
    openDetails(product, variant) {
      this.modalData = {
        product,
        variant,
      }
      this.$emit('modal-data', this.modalData);
    },
  }
}
</script>


<style src='./style.less' lang='less' module/>