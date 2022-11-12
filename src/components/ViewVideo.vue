<template>
    <div class="my-4">
        <div class="pt-3 background-secction">
            <div class="mt-4 bg-light pb-4" style="border-radius: 5px; color: black;">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" style=""
                        :src="videolink"
                        allowfullscreen></iframe>
                </div>
                <div class="pt-3 pl-3">
                    <span class="text-dark" style="color: black;">Chọn tập</span><br>
                    <button @click="playEpsode(ep.name)" class="btn p-0" style="" v-for="ep in film.episodes">
                        <span class="badge badge-dark px-2 mx-1">{{ep.name}}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    props:{
        film: { type: Object, require: true },
        videolink: {type: String, require: true}
    },
    data(){
        return{
            // videolink: ""
        }
    },
    methods: {
        playEpsode(name){
            this.$emit("playEpsode", name)
        }
    }
}

</script>

<style>
</style>