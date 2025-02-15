import React from 'react'

const SortiTable = ({ nom_emateur, id, nom_recepteur, matricule, telephone }) => {
    return (
        <>

            <tr>
                <td><i class="fab fa-react fa-lg text-info me-3"></i> <strong>{id}</strong></td>
                <td><i class="fab fa-react fa-lg text-info me-3"></i> <strong>{nom_emateur}</strong></td>
                <td>{nom_recepteur}</td>
                <td>{matricule}</td>
                <td>
                    <a href="javascript:void(0);"
                    ><i class="bx bx-edit-alt me-1"></i></a
                    >
                    <a href="javascript:void(0);"
                    ><i class="bx bx-trash me-1"></i></a
                    >
                     <a href="javascript:void(0);"
                    ><i class="bx bx-file me-1"></i></a
                    >
                </td>
            </tr>
        </>
    );
}

export default SortiTable