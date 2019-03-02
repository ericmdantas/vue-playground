<template>
  <div id="app">
    <section class="basic-style">
        <h1> 1. Basic Style</h1>
        
        <div class="hv-container">
            <div class="hv-wrapper">

                <div class="hv-item">

                    <div class="hv-item-parent">
                        <p class="simple-card"> Parent </p>
                    </div>

                    <div class="hv-item-children">

                        <div class="hv-item-child">
                            <div class="hv-item">

                                <div class="hv-item-parent">
                                    <p class="simple-card"> Parent </p>
                                </div>

                                <div class="hv-item-children">

                                    <div class="hv-item-child">
                                        <p class="simple-card"> Child 1 </p>
                                    </div>


                                    <div class="hv-item-child">
                                        <p class="simple-card"> Child 2 </p>
                                    </div>

                                    <div class="hv-item-child">
                                        <p class="simple-card"> Child 3 </p>
                                    </div>

                                    <div class="hv-item-child">
                                        <p class="simple-card"> Child 4 </p>
                                    </div>


                                    <div class="hv-item-child">
                                        <p class="simple-card"> Child 5 </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="hv-item-child">
                          <div class="hv-item">
                              <div class="hv-item-parent">
                                  <p class="simple-card"> Parent </p>
                              </div>

                              <div class="hv-item-children">

                              <div class="hv-item-child">
                                <p class="simple-card"> Child 1 </p>
                              </div>

                              <div class="hv-item-child">
                                <p class="simple-card"> Child 2 </p>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div class="hv-item-child">
                            <p class="simple-card"> Child 2 </p>
                        </div>

                        <div class="hv-item-child">
                            <p class="simple-card"> Child 3 </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>
  </div>
</template>

<script>
import "./assets/arvore.scss"
import service from './app.service'

export default {
  data() {
    return {
      tree: []
    }   
  },
  async mounted() {
    this.tree = await service.getTree()
  },
}
</script>
