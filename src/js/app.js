let vue = new Vue({
  el: '#app',
  data: {
    nombre: '',
    apellido: '',
    edad: 0,
    users: [
      {nombre: 'Steven', apellido: 'Coaila', edad: 17},
      {nombre: 'Jose', apellido: 'Rodriguez', edad: 25}
    ],
    modify: -10,
    modifyNombre: '',
    modifyApellido: '',
    modifyEdad: 0
  },
  methods: {
    submitUser() {
      this.users.push({
        nombre: this.nombre, // Envia el dato nombre del input al array users 
        apellido: this.apellido, // Envia el dato apellido del input al array users
        edad: this.edad // Envia el dato edad del input al array users
      })

      this.nombre = '',
      this.apellido = '',
      this.edad = 0
    },
    deleteUser(index) {
      this.users.splice(index, 1); // Elimina los datos del usuario(index) en el array users
    },
    modifyUser(index) {
      this.modify = index; // El elemento modificar se activa

      this.modifyNombre = this.users[index].nombre; // Trae los datos del array users al input modifyNombre
      this.modifyApellido = this.users[index].apellido; // Trae los datos del array users al input modifyApellido
      this.modifyEdad = this.users[index].edad; // Trae los datos del array users al input modifyEdad
    },
    saveUser(index) {
      this.users.splice(index, 1, {
        nombre: this.modifyNombre, // Guarda el nombre modificado a su respectivo lugar en el array users
        apellido: this.modifyApellido, // Guarda el apellido modificado a su respectivo lugar en el array users
        edad: this.modifyEdad // Guarda el edad modificado a su respectivo lugar en el array users
      })

      this.modifyNombre = '',
      this.modifyApellido = '',
      this.modifyEdad = 0

      this.modify = -10; // El elemento modificar se desactiva, por lo tanto se pone a -10 para que no coincida con algun index
    }
  }
})