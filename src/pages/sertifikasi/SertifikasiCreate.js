import React, {useState} from 'react';
import Input from '../../components/Input'
import Select from '../../components/Select'
import Card from '../../components/Card'
import getFetch from '../../api/axios'
import {useForm} from 'react-hook-form'

function SertifikasiCreate(props) {
    let formData = new FormData();
    let [loading,setLoading] = useState(false);
    const { register, handleSubmit} = useForm();
    const submitHandler = (data) =>{
        let {nama,deskripsi,institusi,tingkat,tanggal} = data;
        setLoading(true)
        formData.append('bukti', data.bukti[0])
        formData.append('nama', nama)
        formData.append('deskripsi', deskripsi)
        formData.append('institusi', institusi)
        formData.append('tingkat', tingkat)
        formData.append('tanggal', tanggal)
        formData.append('user_id', 1)
        getFetch('portofolio/sertifikasi','POST',formData)
        .then(response => {alert(response.data.message)})
        .catch(err => console.log(err.response))
       
    }
    return (
        <form onSubmit={handleSubmit(submitHandler)}>
       <Card title="Sertifikasi" description="silahkan isi sertifikasi yang pernah anda dapatkan selama perkuliahan">
           <Input name="nama" title="Nama Sertifikasi" type="text" register={register}/>
           <Input name="deskripsi" title="Deskripsi Sertifikasi" type="text" register={register}/>
           <Select name="tingkat" title="Tingkat Wilayah" type="text" register={register}/>
           <Input name="institusi" title="Penyelenggara Sertifikasi" type="text" register={register}/>
           <Input name="tanggal" title="Tanggal Sertifikasi" type="date" register={register}/>
           <Input name="bukti" title="Bukti Sertifikasi" type="file" register={register}/>
       </Card>
       </form>
    );
}

export default SertifikasiCreate;
