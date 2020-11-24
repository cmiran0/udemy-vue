var app = new Vue({
    el: '.vue',
    data: {
        mensaje: 'Este es el mensaje',
        src:'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a'
    },
    methods: {
        mostrarMensaje() {
            return 'Este es el mensaje'
        }
    }
})