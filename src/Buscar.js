import React, { useState } from 'react';
import { listaRestaurante } from './Restaurantes';


const Buscar = () => {
    const [valoresFormulario, setValoresFormulario] = useState({});
    const { nombre = ''} = valoresFormulario;
    const [resultado, setResultado] = useState([]);

    const handleOnChange = (e) => {

        console.log(e.target.name, e.target.value);
        if (e.target.name === 'nombre') {
            setValoresFormulario({ ...valoresFormulario, nombre: e.target.value });
        };
        
        
        console.log(valoresFormulario);
    }


    const handleOnSubmit = (e) => {
        e.preventDefault(); 
        console.log('estoy haciendo click');
        const filtro = listaRestaurante
            .filter(rest => rest.nombre.toUpperCase().includes(nombre.toUpperCase()));
        console.log(resultado);
        setResultado(filtro);
    }

    return (
        <div className="container container-fluid mt-3 mb-3 ">
            <div className='row'>
                <div className='col'>
                    <form onSubmit={(e) => handleOnSubmit(e)}>
                        <div className="mb-3">
                            <label className="form-label">Nombre Restaurante</label>
                            <input required type="text" name="nombre" value={nombre}
                                className="form-control" onChange={(e) => { handleOnChange(e) }} />
                        </div>

                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            resultado.map(restaurantes => {
                                return (
                                    <div className="col" key={restaurantes.id}>
                                        <div className="card">
                                            <img src={restaurantes.imagen} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title fonts">{restaurantes.nombre}</h5>
                                                <p className="card-text">{restaurantes.descripcion}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Buscar
}