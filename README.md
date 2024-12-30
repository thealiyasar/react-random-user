# React + Vite Random Users and Cards

[DEMO](https://react-random-user-gamma.vercel.app/)

Proje https://randomuser.me/ adresinde yayımlanan random user api üzerine kurulmuştur.

API'a atılan istek sonucunda dönen veri ile yeni bir obje oluşturularak kullanıcılar için bir card tasarımı uygulanıp sonuçlar listelenmiştir.

Projede `useEffect` ,`useState` , `axios` kütüphaneleri ve `tailwindcss` kullanılmıştır. Yapı hem web hemde mobil görünümde tasarlanmıştır.

İstenilen sayı kadar `user card` (maks 99) oluşturulabilir.

İstenilen bölgeye göre kullanıcılar filtrelenebilir.

İstenilen cinsiyete göre kullanılar filtrelenebilir.

Ayrıca ilk açılış ve filtreleme dahil olmak üzere veriler json halinde indirilebilir.

Örnek veri :

```json
[
  {
    "uuid": "6a7a60a0-3af6-4a14-8d5a-1a3b7e57a076",
    "avatar": "https://randomuser.me/api/portraits/women/95.jpg",
    "fullName": "Esma Gürmen",
    "address": "6707 Abanoz Sk, Adıyaman, Samsun, Turkey",
    "country": "Turkey",
    "email": "esma.gurmen@example.com",
    "phone": "(493)-429-3036",
    "username": "yellowfish403",
    "password": "RiFiMlYuQZjAYVAv"
  }
]
```

API'da çok fazla gereksiz kısım olduğu ve filtreleme ardından yeniden obje oluştura alıştırması olması için gelen verilerden yeni bir veri kümesi oluşturulduktan sonra projede gösterilmiştir.
