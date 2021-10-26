import React from 'react'

export const EditarUsuario = (usuario) => {

    function handleOcultar() {
        document.getElementById("modal").style.display = "none"
    }


    const element = document.getElementById('modal');
    let registros
    const error = {};
    let id_user;

    function handleModal() {
        usuario.map((user) => 
            id_user = user.id;
            document.getElementById("modal").style.display = "block";
            element.classList.toggle("visible");
            document.getElementById("nombres").value = (user.nombre);
            document.getElementById("apellidos").value = (user.apellido);
            document.getElementById("cedula").value = (user.cedula);
            document.getElementById("fecha").value = (user.fecha);
            document.getElementById("usuario").value = (user.nomUsuario);
            document.getElementById("telefono").value = (user.telefono);
            document.getElementById("role").value = (user.role);
        })
        
    }



    return (
        <div>
            <div className="modal" id="modal">
                <div className="overlay"></div>
                <div className="modal__container">
                    <button onclick="handleOcultar()" className="modal__close sellers__list-add-button">X</button>
                    <h2>Editar Informacion</h2>
                    <p>Por favor edite la Informacion del usuario</p>
                    <table>
                        <thead>
                            <tr>
                                <td>Nombres</td>
                                <td>Apellidos</td>
                                <td>Cédula</td>
                                <td>Fecha de nacimiento</td>
                                <td>Nombre de usuario</td>
                                <td>Teléfono</td>
                                <td>Role</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input id="nombres" placeholder="nombre" /></td>
                                <td><input id="apellidos" placeholder="Apellido" /></td>
                                <td><input type="number" id="cedula" placeholder="Cédula" /></td>
                                <td><input type="date" id="fecha" /></td>
                                <td><input id="usuario" placeholder="usuario" /></td>
                                <td><input type="number" id="telefono" placeholder="telefono" /></td>
                                <td><select name="transporte">

                                    <option>Coche</option>

                                    <option>Avión</option>

                                    <option>Tren</option>

                                </select></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" onclick="handleActualizar()" class="sellers__list-add-button">Guardar</button>
                </div>

            </div>

            {

            }
        </div>
    )
}
