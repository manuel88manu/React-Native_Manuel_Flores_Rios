import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../../api/reqRes";
import { ReqRespListado, Usuario } from "../../interfaces/reqResp";

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const CRRefPage = useRef(1);

    useEffect(() => {
        manuCargaUsuarios();
    }, [])

    const manuCargaUsuarios = async () => {
        const CRResponse = await
        reqRespApi.get<ReqRespListado>('/users', { params: { page: CRRefPage.current }})
        .then(resp=> {
            if ( resp.data.data.length > 0 ) {
                setUsuarios(resp.data.data);
                //CRRefPage.current ++;
            }
            else {
                alert('No hay mas registros');
            }
        })
        .catch(err => console.log(err))
    }

    const manuPaginaSiguiente = () => {
        CRRefPage.current ++;
        manuCargaUsuarios();  
    }

    const manuPaginaAnterior = () => {
        if ( CRRefPage.current > 1 ){
            CRRefPage.current --;
            manuCargaUsuarios();
        } 
    }

    return{
        usuarios,
        //manuCargaUsuarios,
        manuPaginaAnterior, 
        manuPaginaSiguiente 
    }
}