import React from 'react';
import Input from '../../components/Input'
import Card from '../../components/Card'
import sertifikasiApi from '../../api/sertifikasiApi'
import {useForm} from 'react-hook-form'

function SertifikasiCreate(props) {
    let formData = new FormData()
    let {handleSubmit} = useForm();
    let submitHandler = (data) => {
        let {nama,deskripsi,institusi,tingkat,tanggal} = data;
        formData.append('bukti', data.bukti[0])
        formData.append('nama', nama)
        formData.append('deskripsi', deskripsi)
        formData.append('institusi', institusi)
        formData.append('tingkat', tingkat)
        formData.append('tanggal', tanggal)
        formData.append('user_id', 1)

        sertifikasiApi.create(formData)
        .then(response => {
            console.log(response)
        })
        .catch(err => {console.log(err)})
    }
    return (
        <form onSubmit={handleSubmit(submitHandler)}>
       <Card title="Sertifikasi" description="silahkan isi sertifikasi yang pernah anda dapatkan selama perkuliahan">
           <Input name="nama" title="Nama Sertifikasi" type="text" />
           <Input name="deskripsi" title="Deskripsi Sertifikasi" type="text" />
           <Input name="tingkat" title="Nama Wialayah" type="text" />
           <Input name="peneyelenggara" title="Peneyelenggara Sertifikasi" type="text" />
           <Input name="tanggal" title="Tanggal Sertifikasi" type="date" />
           <Input name="bukti" title="Bukti Sertifikasi" type="file" />
       </Card>
       </form>
    );
}

export default SertifikasiCreate;
