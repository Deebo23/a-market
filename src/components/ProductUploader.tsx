import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage, auth } from '../lib/firebase';

export default function ProductUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file || !name || !price || !auth.currentUser) return;
    setUploading(true);
    try {
      const fileRef = ref(storage, `products/${Date.now()}_${file.name}`);
      await uploadBytes(fileRef, file);
      const fileUrl = await getDownloadURL(fileRef);

      let imageUrl = '';
      if (image) {
        const imageRef = ref(storage, `images/${Date.now()}_${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, 'products'), {
        name,
        description,
        price: parseFloat(price),
        fileUrl,
        imageUrl,
        ownerId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      alert('تم رفع المنتج بنجاح');
      setName('');
      setDescription('');
      setPrice('');
      setFile(null);
      setImage(null);
    } catch (error) {
      console.error(error);
      alert('حدث خطأ أثناء الرفع');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4">رفع منتج رقمي</h2>
      <input type="text" placeholder="اسم المنتج" value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-2 p-2 border rounded" />
      <textarea placeholder="وصف المنتج" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full mb-2 p-2 border rounded" />
      <input type="number" placeholder="السعر" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full mb-2 p-2 border rounded" />
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">ملف المنتج</label>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">صورة المنتج</label>
        <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} className="w-full" />
      </div>
      <button onClick={handleUpload} disabled={uploading} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        {uploading ? 'جاري الرفع...' : 'رفع المنتج'}
      </button>
    </div>
  );
}
