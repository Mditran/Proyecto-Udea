// configuracion e inicializacion de la base de datos
import { initializeApp } from "firebase/app";
// Referencia a la base de datos
import { getFirestore } from 'firebase/firestore'
// Referencia al paquete de autenticacion
import { getAuth } from 'firebase/auth'
// Metodos de interacion con la base de datos
import { addDoc, collection, getDocs, query } from 'firebase/firestore'

/* const firebaseConfig = {
    apiKey: "AIzaSyBgNXe8wKBC5fYz3VeckH_zgr_k94wtKdE",
    authDomain: "lista-tareas-eb4bf.firebaseapp.com",
    projectId: "lista-tareas-eb4bf",
    storageBucket: "lista-tareas-eb4bf.appspot.com",
    messagingSenderId: "371173503521",
    appId: "1:371173503521:web:850af784d93fa1b0a62960",
    measurementId: "G-MGP6RXD32D"
}; */
const firebaseConfig = {
    apiKey: "AIzaSyA3XAUqsBuQ9jxt_kBV599Xk53W7ne892o",
    authDomain: "supermarket-327523.firebaseapp.com",
    projectId: "supermarket-327523",
    storageBucket: "supermarket-327523.appspot.com",
    messagingSenderId: "471711173326",
    appId: "1:471711173326:web:70a0eefcf81fc4033e9e9f",
    measurementId: "G-EXDVZV652Q"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const database = getFirestore();
const auth = getAuth();
export let usuario;

// getAll()
export const consultarDatabase = async (nombreColeccion) => {
    try {
        const respuesta = await getDocs(query(collection(database, nombreColeccion)))
        //console.log(respuesta);

        const coleccionDatos = respuesta.docs.map((documento) => {
            /* console.log(documento);
            console.log(documento.data()); */
            const documentoTemporal = {
                id: documento.id,
                ...documento.data()
            }
            // console.log(documentoTemporal);
            return documentoTemporal
        })

        return coleccionDatos
    } catch (e) {
        throw new Error(e)
    }
}

