# Model Data Untuk Sistem PAC

Model data yang digunakan mongoDB

Model data untuk users, user disini bisa admin dan ketua kelompok yang login ke sistem, idealnya sistem mengirim email validasi akun ketika user signup. untuk level admin di seed di awal installasi sistem.

```json
users:{
    username:"overlord",
    email:"overlord@sokosama.com",
    password:"aksjdakhdiu12ihajhdbna13", | encyrpted
    level:"users|admin"
}
```

Model sistem setting digunakan untuk nyetting deadline lomba dan mengatur kontak data peserta, sistem setting lain yang berhubungan dengan ini ditaroh di database ini

```json
sistemSetting:{
    deadlineTahapSatu:"03-12-2018",
    deadlineTahapDua:"04-01-2019",
    kontakPanitia:"html formatted text yang nanti bisa ditampilkan ke dashboard peserta",
}
```

Model Tim pada model ini semua tim (termasuk ketua yang sudah registrasi) harus memasukkan biodata dirinya dan anggotanya maksimal anggota yang diperbolehkan adalah 3 orang

```json
tim:{
    namaTim:"tim mbois",
    status:"belum upload proposal",// status ini silahkan dipertimbangkan yang jelas jka ketua tim masuk dia bisa liat status tim nya
    anggotaTim:[peserta] //referrence or embedded (max 3)
    fileProposal:"url file",
    filePresentasiVideo:"url video",
    fileDemo:"url file",
    fileAplikasi:"url apk"
}
```

Model database peserta dipakai untuk menyimpan database pesera yang ikut lomba

```json
peserta :{
    nama:string,
    nim:string,
    fotoKtm:string,
    asalUniversitas:string,
    foto:string,
    jenisKelamin:string,
}
```

# Output / report yang dibutuhkan

1. Report kelompok beserta tim dan asal universitas
2. Report kelompok yang lolos tahap 1
3. Report kelompok yang lolos tahap 2
4. Filter data peserta berdasarkan universitas
5. Report jumlah universitas yang ikut
