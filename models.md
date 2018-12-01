# Model Data Untuk Sistem PAC

Model data yang digunakan mongoDB

## Users

Model data untuk users, user disini bisa admin dan ketua kelompok yang login ke sistem, idealnya sistem mengirim email validasi akun ketika user signup. untuk level admin di seed di awal installasi sistem.

```json
users:{
    "_id": "guae8gy48jbsihj",
    "username":"overlord",
    "email":"overlord@sokosama.com",
    "password":"aksjdakhdiu12ihajhdbna13", | encyrpted
    "level":"users|admin"
}
```

## Sistem Setting

Model sistem setting digunakan untuk nyetting deadline lomba dan mengatur kontak data peserta, sistem setting lain yang berhubungan dengan ini ditaroh di database ini

```json
sistemSetting: {
    "timeline": [
        {
            "nama": "Pendaftaran",
            "tanggal": "2018-10-12",
            "deskripsi": "Pendaftaran untuk peserta lomba PAC"
        },
        {
            "nama": "Babak Penyisihan",
            "tanggal": "2018-10-30",
            "deskripsi": "Mengupload Proposal"
        }
    ],
    "hadiah": [
        {
            "judul": "Juara 1",
            "nominal": 3500000
        },
        {
            "judul": "Juara 2",
            "nominal": 3000000
        }
    ],
    "kontak": [
        {
            "nama": "John Doe",
            "telp": "085652862762"
        },
        {
            "nama": "Budiman",
            "telp": "087636783726"
        }
    ],
}
```

## Tim

Model Tim pada model ini semua tim (termasuk ketua yang sudah registrasi) harus memasukkan biodata dirinya dan anggotanya maksimal anggota yang diperbolehkan adalah 3 orang

```json

tim:{
    "_id": "agjea8u9guya4oigja",
    "nama":"tim mbois",
    "universitas":"Politeknik Negeri Malang",
    "statusTim_id": "gh4t7y8tg8w",
    "peserta_id": ["gheaihgih52352", "fjasigjea852"],
    "fileProposal":"url file",
    "filePresentasiVideo":"url video",
    "fileDemo":"url file",
    "fileAplikasi":"url apk"
}
```

## Status

Model status dari suatu tim

```json
statusTim: {
    "_id": "gh4t7y8tg8w",
    "nama": "belum upload proposal"
}
```

## Peserta

Model database peserta dipakai untuk menyimpan database pesera yang ikut lomba

```json
peserta : {
    "_id": "gheaihgih52352",
    "nama":"John Doe",
    "nim": "1641720053",
    "fotoKtm":"string",
    "foto":"string",
    "user_id": "guae8gy48jbsihj"
}
```

# Output / report yang dibutuhkan

1. Report kelompok beserta tim dan asal universitas
2. Report kelompok yang lolos tahap 1
3. Report kelompok yang lolos tahap 2
4. Filter data peserta berdasarkan universitas
5. Report jumlah universitas yang ikut
