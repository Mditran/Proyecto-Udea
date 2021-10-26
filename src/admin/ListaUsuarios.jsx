import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { consultarDatabase } from '../config/firebase';

export const ListaUsuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState([])

    useEffect(() => {
        const cargarDatos = async () => {
            console.log('Entro..!');
            const listaTemporal = await consultarDatabase('usuarios')
            console.log(listaTemporal);
            setListaUsuarios(listaTemporal)
        }
        cargarDatos()
    }, [])

    return (
        <div>
            <h3>Lista usuarios</h3>
            <hr />
            <div className="mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombres</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Cédula</th>
                            <th scope="col">Fecha de nacimiento</th>
                            <th scope="col">Nombre de usuario</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaUsuarios.map((usuario, index) => {
                                console.log(usuario);
                                return (
                                    <tr key={usuario.id}>
                                        {/* <th scope="row">{index + 1}</th>
                                        <td>{usuario.name}</td>
                                        <td>{usuario.surname}</td>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.birthdate}</td>
                                        <td>{usuario.username}</td>
                                        <td>{usuario.cellphone}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.role}</td> */}
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.apellido}</td>
                                        <td>{usuario.cedula}</td>
                                        <td>{usuario.fecha}</td>
                                        <td>{usuario.nomUsuario}</td>
                                        <td>{usuario.telefono}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.rol}</td>
                                        <td>
                                            <Link to={`/usuarios/${usuario.id}`}>
                                                <button className="btn btn-info btn-sm">Editar</button>
                                            </Link>
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
