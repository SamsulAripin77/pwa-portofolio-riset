import React, {useState} from 'react';
import Input from '../../components/Input'
import Select from '../../components/Select'
import Card from '../../components/Card'
import getFetch from '../../api/axios'
import {useForm} from 'react-hook-form'

function SertifikasiCreate(props) {
    let formData = new FormData();
  const { register, handleSubmit} = useForm();
    let [fail, setFail] = useState(false);
    const submitHandler = (data,e) =>{
        let {nama,deskripsi,institusi,tingkat,tanggal} = data;
        formData.append('bukti', data.bukti[0])
        formData.append('nama', nama)
        formData.append('deskripsi', deskripsi)
        formData.append('institusi', institusi)
        formData.append('tingkat', tingkat)
        formData.append('tanggal', tanggal)
        formData.append('user_id', 1)
        getFetch('/portofolio/sertifikasi','POST',formData)
        .then(response => {alert(response.data.message)})
        .then(()=> {
            e.target.reset()
        })
        .catch(() =>{
            setFail(true);
        })
    }
    return (
        <form onSubmit={handleSubmit(submitHandler)}>
       <Card title="Sertifikasi" description="silahkan isi sertifikasi yang pernah anda dapatkan selama perkuliahan">
           <Input name="nama" title="Nama Sertifikasi" type="text" register={register({required:true})}/>
           <Input name="deskripsi" title="Deskripsi Sertifikasi" type="text" register={register({required:true})}/>
           <Select name="tingkat" title="Tingkat Wilayah" type="text" register={register({required:true})}/>
           <Input name="institusi" title="Penyelenggara Sertifikasi" type="text" register={register({required:true})}/>
           <Input name="tanggal" title="Tanggal Sertifikasi" type="date" register={register({required:true})}/>
           <Input name="bukti" title="Bukti Sertifikasi" type="file" register={register({required:true})}/>
       </Card>
       </form>
    );
}

export default SertifikasiCreate;
