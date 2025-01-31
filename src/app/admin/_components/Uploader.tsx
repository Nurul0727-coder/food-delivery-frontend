'use client'

import { useState } from "react";


const CLOUDINARY_CLOUD_NAME = 'dcpnqt4db';
const CLOUDINARY_UPLOAD_PRESET = 'food-delivery';

export const Uploader = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length>0){
            const file = e.target.files[0];

            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

            setLoading(true);

            fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: data
            })
              .then((res=>res.json()))
                .then((data) => {
                    setImageUrl(data.secure_url);
                    setLoading(false);
                })
                .catch((err) => {
                    alert('Error uploading image');
                });
        }
    };

    return (
        <div className="bg-red-600 w-[36px] h-[36px] rounded-full text-black flex items-center justify-center bottom-4 left-4 hover:bg-red-700 "
        onClick={Uploader}
      >
        +
            <input className="text-black" disabled={loading} type="file" onChange={handleUpload} />
            <button 
        className="bg-red-600 w-[36px] h-[36px] rounded-full text-black flex items-center justify-center bottom-4 left-4 hover:bg-red-700 "
        onClick={Uploader}
      >
        +
      </button>
            {imageUrl && <img src={imageUrl} alt="uploaded" />}
        </div>
        
        
    );
    
};




