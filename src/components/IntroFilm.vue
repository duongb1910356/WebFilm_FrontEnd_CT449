<template>
    <div class="my-4">
        <div class="pt-3 background-secction">
            <div class="row">
                <div class="col-md-4">
                    <div class="text-white float-right">
                        <ul class="ul-horizon my-0">
                            <li class="" v-for="dir in film.director">{{ dir }} &nbsp;</li>
                        </ul>
                    </div>
                    <br>
                    <img :src="film.thumb_url" class="poster" alt="">
                </div>
                <div class="col-md-8 pt-4">
                    <div class="text-white">
                        <h3>
                            {{ film.name }}
                        </h3>
                        <div class="pt-4">
                            <p class="warp-ul">
                            <ul class="ul-horizon">
                                <li>Thể loại: &nbsp;</li>
                                <li v-for="cate in film.category">{{ cate }} &nbsp;</li>
                            </ul>
                            </p>
                            <p>Số tập: {{ film.episodes.length }}
                            </p>
                            <p class="warp-ul">
                            <ul class="ul-horizon">
                                <li>Quốc gia: &nbsp;</li>
                                <li v-for="co in film.country">{{ co }} &nbsp;</li>
                            </ul>
                            </p>
                            <p class="warp-ul">
                            <ul class="ul-horizon">
                                <li>Diễn viên: &nbsp;</li>
                                <li v-for="act in film.actor">{{ act }} &nbsp;</li>
                            </ul>
                            </p>
                            <p style="display: inline;">
                                Mô tả &nbsp; <span v-html="film.content"></span>
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        film: { type: Object, require: true }
    }
}
</script>


<style>


.ul-horizon li {
    display: inline;
}
</style>