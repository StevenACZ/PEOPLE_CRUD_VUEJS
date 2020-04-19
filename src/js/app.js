let vue = new Vue({
  el: '#app',
  data: {
    nombre: '',
    apellido: '',
    edad: '',
    sexo: '',
    pais: '',
    users: [
      {nombre: 'Steven', apellido: 'Coaila', edad: '17', sexo: 'hombre' , pais: 'Perú'},
      {nombre: 'Jose', apellido: 'Rodriguez', edad: '25', sexo: 'mujer' , pais: 'Argentina'}
    ],

    modify: -10,
    modifyNombre: '',
    modifyApellido: '',
    modifyEdad: '',
    modifySexo: '',
    modifyPais: ''
  },
  methods: {
    submitUser() {
      this.users.push({
        nombre: this.nombre, // Envia el dato nombre del input al array users 
        apellido: this.apellido, // Envia el dato apellido del input al array users
        edad: this.edad, // Envia el dato edad del input al array users
        sexo: this.sexo, // Envia el dato sexo del input al array users
        pais: this.pais // Envia el dato pais del input al array users
      })

      this.nombre = '',
      this.apellido = '',
      this.edad = '',
      this.sexo = '',
      this.pais = ''
    },
    deleteUser(index) {
      this.users.splice(index, 1); // Elimina los datos del usuario(index) en el array users
    },
    modifyUser(index) {
      this.modify = index; // El elemento modificar se activa

      this.modifyNombre = this.users[index].nombre; // Trae los datos del array users al input modifyNombre
      this.modifyApellido = this.users[index].apellido; // Trae los datos del array users al input modifyApellido
      this.modifyEdad = this.users[index].edad; // Trae los datos del array users al input modifyEdad
      this.modifySexo = this.users[index].sexo; // Trae los datos del array users al input modifySexo
      this.modifyPais = this.users[index].pais; // Trae los datos del array users al input modifyPais
    },
    saveUser(index) {
      this.users.splice(index, 1, {
        nombre: this.modifyNombre, // Guarda el nombre modificado a su respectivo lugar en el array users
        apellido: this.modifyApellido, // Guarda el apellido modificado a su respectivo lugar en el array users
        edad: this.modifyEdad, // Guarda el edad modificado a su respectivo lugar en el array users
        sexo: this.modifySexo, // Guarda el sexo modificado a su respectivo lugar en el array users
        pais: this.modifyPais // Guarda el pais modificado a su respectivo lugar en el array users
      })

      this.modifyNombre = '',
      this.modifyApellido = '',
      this.modifyEdad = '',
      this.modifySexo = '',
      this.modifyPais = ''

      this.modify = -10; // El elemento modificar se desactiva, por lo tanto se pone a -10 para que no coincida con algun index
    }
  }
})