<template>
    <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container-fluid" style="padding: 0px 0px;">
            <a class="navbar-brand text" href="#">FILMCHUA</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarID">
                <div class="navbar-nav">
                    <a class="nav-link " aria-current="page" href="#">Đăng nhập</a>
                    <a class="nav-link " aria-current="page" href="#">Đăng ký</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="d-flex justify-content-between align-items-center bg-white border my-0 py-0"
        style="border-radius: 3px;">
        <div class="d-flex flex-row">
            <button @click="getFilmBo()" class="btn p-2 bd-highlight header-link btn-no">Phim bộ</button>
            <button class="btn p-2 bd-highlight header-link">Phim chiếu rạp</button>
            <button class="btn p-2 bd-highlight header-link">Hoạt hình</button>
        </div>
        <div class="">
            <form action="" class="input-wrapper">
                <input type="text" name="" class="search-bar border-0" id="" style="width: 250px;">
                <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
            </form>
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    methods: {
        getFilmBo() {
            // alert("sdgg")
            this.$emit('getFilmBo',);
        }
    }

}
</script>

<style>
.text {
    background: linear-gradient(to right, #e6dada, #274046);
    font-size: 35px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.btn:focus {
    outline: none;
    box-shadow: none;
}

.header-link {
    text-decoration: none;
    padding-right: 5px;
    color: black;
    font-weight: 900;
}

button.p-2.bd-highlight:hover {
    background-color: orange;
    color: white;
}

.search-bar {
    background: #FFFFFF;
    box-shadow: inset 0px -3px 4px 1px rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    color: black;
}

.input-wrapper {
    display: inline-block;
    position: relative;
    width: 255px
}

.input-wrapper:after {
    font-family: 'FontAwesome';
    content: '\f002';
    position: absolute;
    right: 10px;
    color: black;
}
</style>