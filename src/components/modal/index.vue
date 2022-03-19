<template>
  <div v-bind="$attrs" v-on="$listeners">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{modalData.product.title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <div class="row">
            <div class="col-12"><span class="text-danger">Title:</span> {{modalData.variant.title}}</div>
            <div class="col-12"><span class="text-danger">Grams:</span> {{modalData.variant.grams}}</div>
            <div class="col-12"><span class="text-danger">Stock:</span> {{modalData.variant.inventory_quantity}}</div>
            <div class="col-12"><span class="text-danger">Weight:</span> {{modalData.variant.weight}}{{modalData.variant.weight_unit}}</div>
            <div class="col-12"><span class="text-danger">Price:</span> {{modalData.variant.price}}$</div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalData: {
      type: Object,
      default: () => ({}),
    }
  },
}
</script>

<style>

</style>