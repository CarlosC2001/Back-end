import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseFirestore } from './Firebase';

const crearProducto = async (producto) => {
    const nuevoDoc = doc(collection(FirebaseFirestore, '/productos'));
    await setDoc(nuevoDoc, producto); 
    console.log('producto creado');
}

const listarProductos = async () => {
    const productosRef = collection(FirebaseFirestore, '/productos');
    // arreglo de documentos de la collecion de productos
    const docs = await getDocs(productosRef); // llamado a la base de datos firestore
    const productos = [];
    docs.forEach(document => {
        productos.push({ id: document.id,
            nombre: document.data().nombre,
            descripcion: document.data().descripcion,
            imagen:document.data() });
    });
    console.log(productos)
    return productos;
}

export {
    crearProducto,
    listarProductos,
}