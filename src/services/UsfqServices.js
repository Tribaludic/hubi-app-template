import axios from "axios";

export default class UsfqServices{

    //https://wservices.usfq.edu.ec/WSInformacionCuentas/Servicios/ActiveDirectoryWS.asmx/WSGetPropAllUserAD?valor=abustamante@usfq.edu.ec&tipo=correo

    static async WSGetPropAllUserAD(email){

      return await axios.get('https://wservices.usfq.edu.ec/WSInformacionCuentas/Servicios/ActiveDirectoryWS.asmx/WSGetPropAllUserAD?tipo=correo&valor='+email)
        .then(function (response) {
            // handle success
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return null;
        });
    }

}