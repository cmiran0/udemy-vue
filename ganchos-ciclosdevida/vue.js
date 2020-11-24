new Vue({
    el: "#app",
    data: {
        msj: 'esto es un mensaje'
    },
    beforeCreate: function () {
        console.log('Llamado beforeCreate')
    },
    create: function () {
        console.log('Llamado create')
    },
    beforeMount: function () {
        console.log('Llamado beforeMount')
    },
    mounted: function () {
        console.log('Llamado mounted')
    },
    beforeUpdate: function () {
        console.log('Llamado beforeUpdate')
    },
    updated: function () {
        console.log('Llamado updated')
    },
    beforeDestroy: function () {
        console.log('Llamado beforeDestroy')
    },
    destroy() {
        console.log('Llamado destroy')
    },
    methods: {
        destruir(){
            this.$destroy()
        }
    }
})
